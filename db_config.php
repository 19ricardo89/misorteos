<?php
// ⚙️ Configuración de la base de datos
$host = 'db5018730203.hosting-data.io';
$db   = 'dbs14818859';
$user = 'dbu3705396';
$pass = 'SaulRE31322.';

// 📡 Conexión PDO
$dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";
$options = [
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
  $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
  die("❌ Error de conexión: " . $e->getMessage());
}
