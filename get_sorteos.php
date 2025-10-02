<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

require __DIR__ . '/db_config.php';

// 📊 Seleccionar todos los sorteos activos
$stmt = $pdo->prepare("
  SELECT id, legacy_id, titulo, cuentas, categoria, valor, end_at_utc, end_original, status
  FROM sorteos
  WHERE status = 'active'
  ORDER BY end_at_utc ASC
");
$stmt->execute();
$rows = $stmt->fetchAll();

// 🔄 Formatear a JSON (ISO UTC para JS)
$out = array_map(function($r){
  $iso = (new DateTime($r['end_at_utc'].' UTC'))->format('Y-m-d\TH:i:s\Z');
  return [
    'id'         => $r['legacy_id'] ?: (string)$r['id'],
    'titulo'     => $r['titulo'],
    'cuentas'    => $r['cuentas'],
    'categoria'  => $r['categoria'],
    'valor'      => $r['valor'],
    'end_at_iso' => $iso,
    'original'   => $r['end_original'],
    'status'     => $r['status']
  ];
}, $rows);

echo json_encode($out, JSON_UNESCAPED_UNICODE);
