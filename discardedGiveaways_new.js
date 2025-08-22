// La lista estática de sorteos descartados, para la inicialización inicial
const initialDiscardedGiveaways = [
    {
        "id": "1723871991475",
        "date": "2025-07-23",
        "prize": "Sorteo de un iPhone 16",
        "accounts": [
            "@druni_perfumerias",
            "@vickyccruz31"
        ],
        "status": "expired",
        "originalDate": "2025-07-23",
        "prize_category": "otros"
    },
      {
        "id": "1723872202683",
        "date": "2025-08-20",
        "prize": "Lote de productos",
        "accounts": [
            "@mitjaterrassa"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-20-mitjaterrassa",
            "prize": "Pack de productos y 2 dorsales para la Cursa Fanny Sallés",
            "price": "60€",
            "accounts": [
                "@mitjaterrassa"
            ]
        },
        "originalDate": "2025-08-20",
        "prize_category": "otros"
    },
    {
        "id": "1723872202684",
        "date": "2025-08-20",
        "prize": "Lote de productos de The Fruit Company",
        "accounts": [
            "@pprimor",
            "@puterful_es"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-20-pprimor",
            "prize": "lote de thefruitcompanyy",
            "price": "50€",
            "accounts": [
                "@pprimor",
                "@puterful_es"
            ]
        },
        "originalDate": "2025-08-20",
        "prize_category": "otros"
    },
    {
        "id": "1723872202685",
        "date": "2025-08-20",
        "prize": "Un producto Roborock a elegir",
        "accounts": [
            "@roborock.es"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-20-roborockes",
            "prize": "Un producto Roborock a elegir",
            "price": "350€",
            "accounts": [
                "@roborock.es"
            ]
        },
        "originalDate": "2025-08-20",
        "prize_category": "otros"
    },
    {
        "id": "1723872202686",
        "date": "2025-08-24",
        "prize": "2 packs de merchandising oficial Pirelli",
        "accounts": [
            "@pirelli.es"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-24-pirellies",
            "prize": "2 packs de merchandising oficial Pirelli",
            "price": "100€",
            "accounts": [
                "@pirelli.es"
            ]
        },
        "originalDate": "2025-08-24",
        "prize_category": "otros"
    },
    {
        "id": "1723872202687",
        "date": "2025-08-31",
        "prize": "Mascarilla LED facial",
        "accounts": [
            "@salvelox_es",
            "@vicenta_58"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-24-salvelox",
            "prize": "mascarilla LED facial",
            "price": "60€",
            "accounts": [
                "@salvelox_es"
            ]
        },
        "originalDate": "2025-08-31",
        "prize_category": "otros"
    },
    {
        "id": "1723872202688",
        "date": "2025-08-24",
        "prize": "lote de productos de limpieza + 1 kit",
        "accounts": [
            "@leon_airjordan",
            "@autograph_spain",
            "@jordansvinils"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-24-leon_airjordan",
            "prize": "lote de productos de limpieza + 1 kit",
            "price": "60€",
            "accounts": [
                "@leon_airjordan",
                "@autograph_spain",
                "@jordansvinils"
            ]
        },
        "originalDate": "2025-08-24",
        "prize_category": "otros"
    },
    {
        "id": "1723872202689",
        "date": "2025-08-23",
        "prize": "Pack de juegos de cartas coleccionables",
        "accounts": [
            "cartas.coleccionables"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-23-cartas",
            "prize": "Pack de juegos de cartas coleccionables 🃏",
            "price": "100€",
            "accounts": [
                "@cartas.coleccionables"
            ]
        },
        "originalDate": "2025-08-23",
        "prize_category": "frikis"
    },
    {
        "id": "1723872202690",
        "date": "2025-08-15",
        "prize": "tienda de techo DODO EXPEDITION",
        "accounts": [
            "@fang.family3",
            "@dodoexpedition"
        ],
        "status": "expired",
        "originalDate": "2025-08-15",
        "prize_category": "otros"
    },
    {
        "id": "1723872202691",
        "date": "2025-08-21",
        "prize": "Kit Vuelta al cole",
        "accounts": [
            "@mom_elephant",
            "@coolpack.es"
        ],
        "status": "expired",
        "originalDate": "2025-08-21",
        "prize_category": "otros"
    },
    {
        "id": "1723872202692",
        "date": "2025-09-01",
        "prize": "televisión 4K LED de 55 pulgadas",
        "accounts": [
            "@orbiambdefabrica"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-9-1-orbiambdefabrica",
            "prize": "televisión 4K LED de 55 pulgadas",
            "price": "500€",
            "accounts": [
                "@orbiambdefabrica"
            ]
        },
        "originalDate": "2025-09-01",
        "prize_category": "otros"
    },
    {
        "id": "1723872202693",
        "date": "2025-08-20",
        "prize": "Lote de maternidad",
        "accounts": [
            "@mustelaesp",
            "@koalababycare_es"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-20-mustelaesp",
            "prize": "Lote de maternidad",
            "price": "100€",
            "accounts": [
                "@mustelaesp",
                "@koalababycare_es"
            ]
        },
        "originalDate": "2025-08-20",
        "prize_category": "otros"
    },
    {
        "id": "1723872202694",
        "date": "2025-08-24",
        "prize": "lote de productos Gliss & Schwarzkopf",
        "accounts": [
            "@glorys.10",
            "@gliss_es",
            "@schwarzkopfpro.spain"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-14-glorys",
            "prize": "lote de productos Gliss & Schwarzkopf",
            "price": "80€",
            "accounts": [
                "@glorys.10"
            ]
        },
        "originalDate": "2025-08-24",
        "prize_category": "otros"
    },
    {
        "id": "1723872202695",
        "date": "2025-08-19",
        "prize": "zapatillas Nike",
        "accounts": [
            "@footonmars",
            "@atleetstores"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-15-atleetstores",
            "prize": "Zapatillas Nike a elegir",
            "price": "120€",
            "accounts": [
                "@atleetstores",
                "@footonmars"
            ]
        },
        "originalDate": "2025-08-19",
        "prize_category": "otros"
    },
    {
        "id": "1723872202696",
        "date": "2025-08-31",
        "prize": "Ventilador a batería",
        "accounts": [
            "@einhellesp"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-31-einhellesp",
            "prize": "Ventilador a batería Einhell + Starter Kit",
            "price": "100€",
            "accounts": [
                "@einhellesp"
            ]
        },
        "originalDate": "2025-08-31",
        "prize_category": "otros"
    },
    {
        "id": "1723872202697",
        "date": "2025-08-22",
        "prize": "Lote de golosinas",
        "accounts": [
            "@conarenaenlospiess",
            "@vidalgolosinas"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-18-conarenaenlospiess",
            "prize": "alfombra con formas de coral",
            "price": "60€",
            "accounts": [
                "@conarenaenlospiess",
                "@ladykora_designconfort"
            ]
        },
        "originalDate": "2025-08-22",
        "prize_category": "otros"
    },
    {
        "id": "1723872202698",
        "date": "2025-08-18",
        "prize": "2 tarjetas regalo Click and Gift de 100€",
        "accounts": [
            "@mapfre_parati"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-18-mapfreparati",
            "prize": "2 tarjetas regalo Click and Gift de 100€",
            "price": "200€",
            "accounts": [
                "@mapfre_parati"
            ]
        },
        "originalDate": "2025-08-18",
        "prize_category": "otros"
    },
    {
        "id": "1723872202699",
        "date": "2025-08-12",
        "prize": "4 Entradas dobles para Parque de Atracciones y Parque Warner",
        "accounts": [
            "@fostershollywood"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-13-fostergiveaway",
            "prize": "4 ENTRADAS DOBLES Parque de Atracciones y Parque Warner",
            "price": "200€",
            "accounts": [
                "@fostershollywood"
            ]
        },
        "originalDate": "2025-08-12",
        "prize_category": "otros"
    },
    {
        "id": "1723872202700",
        "date": "2025-08-31",
        "prize": "Sorteo de un iPhone 16 Pro",
        "accounts": [
            "@moevegow"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-31-moevegow",
            "prize": "iPhone 16 Pro 💲",
            "price": "1219€",
            "accounts": [
                "@moeve_gow"
            ]
        },
        "originalDate": "2025-08-31",
        "prize_category": "otros"
    },
    {
        "id": "1723872202701",
        "date": "2025-08-22",
        "prize": "Un pack de Ray-Ban y café",
        "accounts": [
            "@lave.vida",
            "@laurasanchezz.r"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-16-lave_vida",
            "prize": "unas Meta Ray-Ban + un pack La Ve•Vida",
            "price": "200€",
            "accounts": [
                "@lave.vida",
                "@laurasanchezz.r"
            ]
        },
        "originalDate": "2025-08-22",
        "prize_category": "otros"
    },
    {
        "id": "1723872202702",
        "date": "2025-08-22",
        "prize": "Sorteo de unas zapatillas",
        "accounts": [
            "@privatesportshopes",
            "@brooksrunning"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-18-privatesportshopes",
            "prize": "zapatillas Brooks",
            "price": "120€",
            "accounts": [
                "@privatesportshopes",
                "@brooksrunning"
            ]
        },
        "originalDate": "2025-08-22",
        "prize_category": "otros"
    },
    {
        "id": "1723872202703",
        "date": "2025-08-18",
        "prize": "Sorteo de una nevera portátil",
        "accounts": [
            "@magdadelroj",
            "@mirinconcito.gastronomico"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-24-garciamillan",
            "prize": "Nevera Polarbox Naranja Sorbete + Un lote de nuestros productos",
            "price": "70€",
            "accounts": [
                "@garciamillan.es",
                "@polarboxstyle_official"
            ]
        },
        "originalDate": "2025-08-18",
        "prize_category": "otros"
    },
    {
        "id": "1723872202704",
        "date": "2025-08-20",
        "prize": "Pack de paella",
        "accounts": [
            "@denia.com",
            "@coloma2ferreteros"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-19-denia-paella",
            "prize": "Un paquete de paella",
            "price": "50€",
            "accounts": [
                "@denia.com"
            ]
        },
        "originalDate": "2025-08-20",
        "prize_category": "otros"
    },
    {
        "id": "1723872202705",
        "date": "2025-08-19",
        "prize": "lote de productos de limpieza",
        "accounts": [
            "@el_huertico"
        ],
        "status": "expired",
        "originalDate": "2025-08-19",
        "prize_category": "otros"
    },
    {
        "id": "1723872202706",
        "date": "2025-08-25",
        "prize": "una tarjeta regalo de 100€",
        "accounts": [
            "@theoutletstores",
            "@desigual"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-24-mochila-outlet",
            "prize": "Tarjeta regalo de 100€",
            "price": "100€",
            "accounts": [
                "@theoutletstores",
                "@desigual"
            ]
        },
        "originalDate": "2025-08-25",
        "prize_category": "otros"
    },
    {
        "id": "1723872202707",
        "date": "2025-08-22",
        "prize": "Pack de 4 juegos de mesa",
        "accounts": [
            "@maytelizondo",
            "@enpeudejocediciones"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-14-maytelizondo",
            "prize": "Juego de cartas Los Futbolísimos + Expansión + entrada doble para la película 🃏",
            "price": "45€",
            "accounts": [
                "@maytelizondo",
                "@campo4games"
            ],
            "date": "2025-08-14"
        },
        "originalDate": "2025-08-22",
        "prize_category": "frikis"
    },
    {
        "id": "1723872202708",
        "date": "2025-08-21",
        "prize": "Pack de paella",
        "accounts": [
            "@denia.com",
            "@coloma2ferreteros"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-19-denia-paella",
            "prize": "Un paquete de paella",
            "price": "50€",
            "accounts": [
                "@denia.com"
            ],
            "date": "2025-08-19"
        },
        "originalDate": "2025-08-21",
        "prize_category": "otros"
    },
    {
        "id": "1723872202709",
        "date": "2025-08-20",
        "prize": "Lote de productos de Cacao",
        "accounts": [
            "@chocolatestorras",
            "@casa_carriot"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-20-chocolate",
            "prize": "Un lote de productos de Cacao",
            "price": "50€",
            "accounts": [
                "@chocolatestorras",
                "@casa_carriot"
            ]
        },
        "originalDate": "2025-08-20",
        "prize_category": "otros"
    },
    {
        "id": "1723872202710",
        "date": "2025-08-21",
        "prize": "Sorteo de una moto eléctrica",
        "accounts": [
            "@soymariborlor"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-22-un-kit-organizacion",
            "prize": "Un kit de organización",
            "price": "60€",
            "accounts": [
                "@alihogar",
                "@codiil.pt"
            ],
            "date": "2025-08-22"
        },
        "originalDate": "2025-08-21",
        "prize_category": "otros"
    },
    {
        "id": "1723872202711",
        "date": "2025-08-19",
        "prize": "Un viaje a París para 4 personas, 2 iPhone 16 y 5 vales de 200€",
        "accounts": [
            "@druni_perfumerias",
            "@lovyc.es"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-20-druni-viajeparis",
            "prize": "Un viaje a París para 4 personas, 2 iPhone 16 y 5 vales de 200€",
            "price": ">1000€",
            "accounts": [
                "@druni_perfumerias",
                "@lovyc.es"
            ],
            "date": "2025-08-20"
        },
        "originalDate": "2025-08-19",
        "prize_category": "viajes"
    },
    {
        "id": "1723872202712",
        "date": "2025-08-20",
        "prize": "10 agendas escolares",
        "accounts": [
            "@alehop_es"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-20-agenda",
            "prize": "10 agendas escolares",
            "price": "100€",
            "accounts": [
                "@alehop_es"
            ],
            "date": "2025-08-20"
        },
        "originalDate": "2025-08-20",
        "prize_category": "otros"
    },
    {
        "id": "1723872202713",
        "date": "2025-08-20",
        "prize": "Lote de productos de Cacao",
        "accounts": [
            "@chocolatestorras",
            "@casa_carriot"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-20-chocolate",
            "prize": "Un lote de productos de Cacao",
            "price": "50€",
            "accounts": [
                "@chocolatestorras",
                "@casa_carriot"
            ]
        },
        "originalDate": "2025-08-20",
        "prize_category": "otros"
    },
    {
        "id": "1723872202714",
        "date": "2025-08-20",
        "prize": "Lote de material escolar",
        "accounts": [
            "@esthersalamancamadero"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-23-lote-escolar",
            "prize": "lote material escolar",
            "price": "80€",
            "accounts": [
                "@esthersalamancamadero"
            ]
        },
        "originalDate": "2025-08-20",
        "prize_category": "otros"
    },
    {
        "id": "discarded1",
        "date": "2025-08-14",
        "prize": "Lote Vuelta al Cole de Sonic",
        "accounts": [
            "dailyoana"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-14-dailyoana",
            "prize": "Lote Vuelta al Cole de Sonic 🃏",
            "price": "80€",
            "accounts": [
                "@dailyoana",
                "@karactermania"
            ],
            "date": "2025-08-14"
        },
        "originalDate": "2025-08-14",
        "prize_category": "frikis"
    },
    {
        "id": "discarded2",
        "date": "2025-08-17",
        "prize": "Sorteo de una camiseta del Eurorayo",
        "accounts": [
            "altoquefut"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-14-parabolicademestalla",
            "prize": "camiseta del Valencia CF",
            "price": "50€",
            "accounts": [
                "@parabolicademestalla",
                "@altoquefut"
            ],
            "date": "2025-08-14"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded3",
        "date": "2025-08-13",
        "prize": "Lote de material escolar",
        "accounts": [
            "libreria_maraury",
            "artescove",
            "estol.vzla"
        ],
        "status": "foreign",
        "originalDate": "2025-08-13",
        "prize_category": "otros"
    },
    {
        "id": "discarded4",
        "date": "2025-08-17",
        "prize": "Air Fryer de Oster",
        "accounts": [
            "nutricionista.paulajara"
        ],
        "status": "foreign",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded5",
        "date": "2025-08-17",
        "prize": "Sorteo de un kit de limpieza",
        "accounts": [
            "grupo_maya"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-27-grupo-maya",
            "prize": "un kit de limpieza",
            "price": "30€",
            "accounts": [
                "@grupo_maya",
                "@asevi.es"
            ],
            "date": "2025-08-27"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded6",
        "date": "2025-08-17",
        "prize": "Sorteo de una nevera portátil",
        "accounts": [
            "dulce.tentacion121"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded7",
        "date": "2025-08-13",
        "prize": "Lote de productos cosméticos de Marina",
        "accounts": [
            "druni_perfumerias"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-10-druniperfumerias-dera",
            "prize": "3 lotes (dera)",
            "price": "90€",
            "accounts": [
                "@druni_perfumerias"
            ],
            "date": "2025-08-10"
        },
        "originalDate": "2025-08-13",
        "prize_category": "otros"
    },
    {
        "id": "discarded8",
        "date": "2025-08-16",
        "prize": "Plancha eléctrica",
        "accounts": [
            "urnazante"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-16-plato-electric",
            "prize": "Plancha eléctrica",
            "price": "40€",
            "accounts": [
                "@urnazante"
            ],
            "date": "2025-08-16"
        },
        "originalDate": "2025-08-16",
        "prize_category": "otros"
    },
    {
        "id": "discarded9",
        "date": "2025-08-17",
        "prize": "Cama Box Roma Kids + 2 almohadas",
        "accounts": [
            "marimarsrl"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-16-marimarsrl",
            "prize": "Cama Box Roma Kids + 2 almohadas",
            "price": "150€",
            "accounts": [
                "@marimarsrl"
            ],
            "date": "2025-08-16"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded10",
        "date": "2025-08-17",
        "prize": "Kit de productos de cocina color pastel de Lidl",
        "accounts": [
            "lidlespana"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-16-lidlespana",
            "prize": "Kit de productos de cocina color pastel",
            "price": "80€",
            "accounts": [
                "@lidlespana"
            ],
            "date": "2025-08-16"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded11",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de panadería y quesería",
        "accounts": [
            "panaderia_obando"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-13-lamamadebodo",
            "prize": "lote de golosinas ⚠️",
            "price": "30€",
            "accounts": [
                "@lamamadebodo",
                "@vidalgolosinas"
            ],
            "date": "2025-08-13"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded12",
        "date": "2025-08-17",
        "prize": "Sorteo de una PlayStation 5",
        "accounts": [
            "apple.wolf"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-13-ccatalayas",
            "prize": "PlayStation 5 💲🃏",
            "price": "550€",
            "accounts": [
                "@cc_atalayas"
            ],
            "date": "2025-08-13"
        },
        "originalDate": "2025-08-17",
        "prize_category": "frikis"
    },
    {
        "id": "discarded13",
        "date": "2025-08-13",
        "prize": "Lote de papelería",
        "accounts": [
            "tgm_paperlovers"
        ],
        "status": "expired",
        "originalDate": "2025-08-13",
        "prize_category": "otros"
    },
    {
        "id": "discarded14",
        "date": "2025-08-17",
        "prize": "Sorteo de una nevera portátil",
        "accounts": [
            "dulce.tentacion121"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded15",
        "date": "2025-08-17",
        "prize": "Sorteo de un iPhone 16",
        "accounts": [
            "karlamamadecuatro"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-9-1-laserxauenjaen",
            "prize": "iPhone 16 💲",
            "price": "959€",
            "accounts": [
                "@laserxauen_jaen",
                "@laserxauencordoba"
            ],
            "date": "2025-09-01"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded16",
        "date": "2025-08-17",
        "prize": "Sorteo de un secaplatos",
        "accounts": [
            "sheshu.home"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-29-sheshu-home",
            "prize": "un secaplatos",
            "price": "80€",
            "accounts": [
                "@sheshu.home"
            ],
            "date": "2025-08-29"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded17",
        "date": "2025-08-17",
        "prize": "Sorteo de una PlayStation 5",
        "accounts": [
            "solucionescash"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-28-playstation-5",
            "prize": "una PlayStation 5",
            "price": "550€",
            "accounts": [
                "@solucionescash"
            ],
            "date": "2025-08-28"
        },
        "originalDate": "2025-08-17",
        "prize_category": "frikis"
    },
    {
        "id": "discarded18",
        "date": "2025-08-17",
        "prize": "Sorteo de una maleta de cabina",
        "accounts": [
            "chilly.es"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-21-chilly",
            "prize": "lote de productos Chilly + 1 maleta de cabina",
            "price": "100€",
            "accounts": [
                "@chilly.es"
            ],
            "date": "2025-08-21"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded19",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de perfumes",
        "accounts": [
            "yolandamaquieira"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded20",
        "date": "2025-08-13",
        "prize": "Sorteo de un lote de papelería",
        "accounts": [
            "tgm_paperlovers"
        ],
        "status": "expired",
        "originalDate": "2025-08-13",
        "prize_category": "otros"
    },
    {
        "id": "discarded21",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de cosmética",
        "accounts": [
            "druni_perfumerias"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-9-3-druniperfumerias",
            "prize": "2 lotes de productos Australian Gold",
            "price": "80€",
            "accounts": [
                "@druni_perfumerias"
            ],
            "date": "2025-09-03"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded22",
        "date": "2025-08-17",
        "prize": "Sorteo de un aspirador de tapicerías",
        "accounts": [
            "ufesa_oficial"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded23",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de productos de limpieza",
        "accounts": [
            "grupo_maya"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-27-grupo-maya",
            "prize": "un kit de limpieza",
            "price": "30€",
            "accounts": [
                "@grupo_maya",
                "@asevi.es"
            ],
            "date": "2025-08-27"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded24",
        "date": "2025-08-17",
        "prize": "Sorteo de una nevera portátil",
        "accounts": [
            "dulce.tentacion121"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded25",
        "date": "2025-08-17",
        "prize": "Sorteo de un iPhone 16",
        "accounts": [
            "karlamamadecuatro"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-9-1-laserxauenjaen",
            "prize": "iPhone 16 💲",
            "price": "959€",
            "accounts": [
                "@laserxauen_jaen",
                "@laserxauencordoba"
            ],
            "date": "2025-09-01"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded26",
        "date": "2025-08-17",
        "prize": "Sorteo de un secaplatos",
        "accounts": [
            "sheshu.home"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-29-sheshu-home",
            "prize": "un secaplatos",
            "price": "80€",
            "accounts": [
                "@sheshu.home"
            ],
            "date": "2025-08-29"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded27",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de perfumes",
        "accounts": [
            "yolandamaquieira"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded28",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de papelería",
        "accounts": [
            "tgm_paperlovers"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded29",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de cosmética",
        "accounts": [
            "druni_perfumerias"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-9-3-druniperfumerias",
            "prize": "2 lotes de productos Australian Gold",
            "price": "80€",
            "accounts": [
                "@druni_perfumerias"
            ],
            "date": "2025-09-03"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded30",
        "date": "2025-08-17",
        "prize": "Sorteo de un aspirador de tapicerías",
        "accounts": [
            "ufesa_oficial"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded31",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de productos de limpieza",
        "accounts": [
            "grupo_maya"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-27-grupo-maya",
            "prize": "un kit de limpieza",
            "price": "30€",
            "accounts": [
                "@grupo_maya",
                "@asevi.es"
            ],
            "date": "2025-08-27"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded32",
        "date": "2025-08-17",
        "prize": "Sorteo de una nevera portátil",
        "accounts": [
            "dulce.tentacion121"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded33",
        "date": "2025-08-17",
        "prize": "Sorteo de un iPhone 16",
        "accounts": [
            "karlamamadecuatro"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-9-1-laserxauenjaen",
            "prize": "iPhone 16 💲",
            "price": "959€",
            "accounts": [
                "@laserxauen_jaen",
                "@laserxauencordoba"
            ],
            "date": "2025-09-01"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded34",
        "date": "2025-08-17",
        "prize": "Sorteo de un secaplatos",
        "accounts": [
            "sheshu.home"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-29-sheshu-home",
            "prize": "un secaplatos",
            "price": "80€",
            "accounts": [
                "@sheshu.home"
            ],
            "date": "2025-08-29"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded35",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de perfumes",
        "accounts": [
            "yolandamaquieira"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded36",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de papelería",
        "accounts": [
            "tgm_paperlovers"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded37",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de cosmética",
        "accounts": [
            "druni_perfumerias"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-9-3-druniperfumerias",
            "prize": "2 lotes de productos Australian Gold",
            "price": "80€",
            "accounts": [
                "@druni_perfumerias"
            ],
            "date": "2025-09-03"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded38",
        "date": "2025-08-17",
        "prize": "Sorteo de un aspirador de tapicerías",
        "accounts": [
            "ufesa_oficial"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded39",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de productos de limpieza",
        "accounts": [
            "grupo_maya"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-27-grupo-maya",
            "prize": "un kit de limpieza",
            "price": "30€",
            "accounts": [
                "@grupo_maya",
                "@asevi.es"
            ],
            "date": "2025-08-27"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded40",
        "date": "2025-08-17",
        "prize": "Sorteo de una nevera portátil",
        "accounts": [
            "dulce.tentacion121"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded41",
        "date": "2025-08-17",
        "prize": "Sorteo de un iPhone 16",
        "accounts": [
            "karlamamadecuatro"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-9-1-laserxauenjaen",
            "prize": "iPhone 16 💲",
            "price": "959€",
            "accounts": [
                "@laserxauen_jaen",
                "@laserxauencordoba"
            ],
            "date": "2025-09-01"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded42",
        "date": "2025-08-17",
        "prize": "Sorteo de un secaplatos",
        "accounts": [
            "sheshu.home"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-29-sheshu-home",
            "prize": "un secaplatos",
            "price": "80€",
            "accounts": [
                "@sheshu.home"
            ],
            "date": "2025-08-29"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded43",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de perfumes",
        "accounts": [
            "yolandamaquieira"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded44",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de papelería",
        "accounts": [
            "tgm_paperlovers"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded45",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de cosmética",
        "accounts": [
            "druni_perfumerias"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-9-3-druniperfumerias",
            "prize": "2 lotes de productos Australian Gold",
            "price": "80€",
            "accounts": [
                "@druni_perfumerias"
            ],
            "date": "2025-09-03"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded46",
        "date": "2025-08-17",
        "prize": "Sorteo de un aspirador de tapicerías",
        "accounts": [
            "ufesa_oficial"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded47",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de productos de limpieza",
        "accounts": [
            "grupo_maya"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-27-grupo-maya",
            "prize": "un kit de limpieza",
            "price": "30€",
            "accounts": [
                "@grupo_maya",
                "@asevi.es"
            ],
            "date": "2025-08-27"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded48",
        "date": "2025-08-17",
        "prize": "Sorteo de una nevera portátil",
        "accounts": [
            "dulce.tentacion121"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded49",
        "date": "2025-08-17",
        "prize": "Sorteo de un iPhone 16",
        "accounts": [
            "karlamamadecuatro"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-9-1-laserxauenjaen",
            "prize": "iPhone 16 💲",
            "price": "959€",
            "accounts": [
                "@laserxauen_jaen",
                "@laserxauencordoba"
            ],
            "date": "2025-09-01"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded50",
        "date": "2025-08-17",
        "prize": "Sorteo de un secaplatos",
        "accounts": [
            "sheshu.home"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-29-sheshu-home",
            "prize": "un secaplatos",
            "price": "80€",
            "accounts": [
                "@sheshu.home"
            ],
            "date": "2025-08-29"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded51",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de perfumes",
        "accounts": [
            "yolandamaquieira"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded52",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de papelería",
        "accounts": [
            "tgm_paperlovers"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded53",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de cosmética",
        "accounts": [
            "druni_perfumerias"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-9-3-druniperfumerias",
            "prize": "2 lotes de productos Australian Gold",
            "price": "80€",
            "accounts": [
                "@druni_perfumerias"
            ],
            "date": "2025-09-03"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded54",
        "date": "2025-08-17",
        "prize": "Sorteo de un aspirador de tapicerías",
        "accounts": [
            "ufesa_oficial"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded55",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de productos de limpieza",
        "accounts": [
            "grupo_maya"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-27-grupo-maya",
            "prize": "un kit de limpieza",
            "price": "30€",
            "accounts": [
                "@grupo_maya",
                "@asevi.es"
            ],
            "date": "2025-08-27"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded56",
        "date": "2025-08-17",
        "prize": "Sorteo de una nevera portátil",
        "accounts": [
            "dulce.tentacion121"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded57",
        "date": "2025-08-17",
        "prize": "Sorteo de un iPhone 16",
        "accounts": [
            "karlamamadecuatro"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-9-1-laserxauenjaen",
            "prize": "iPhone 16 💲",
            "price": "959€",
            "accounts": [
                "@laserxauen_jaen",
                "@laserxauencordoba"
            ],
            "date": "2025-09-01"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded58",
        "date": "2025-08-17",
        "prize": "Sorteo de un secaplatos",
        "accounts": [
            "sheshu.home"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-29-sheshu-home",
            "prize": "un secaplatos",
            "price": "80€",
            "accounts": [
                "@sheshu.home"
            ],
            "date": "2025-08-29"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded59",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de perfumes",
        "accounts": [
            "yolandamaquieira"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded60",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de papelería",
        "accounts": [
            "tgm_paperlovers"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded61",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de cosmética",
        "accounts": [
            "druni_perfumerias"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-9-3-druniperfumerias",
            "prize": "2 lotes de productos Australian Gold",
            "price": "80€",
            "accounts": [
                "@druni_perfumerias"
            ],
            "date": "2025-09-03"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded62",
        "date": "2025-08-17",
        "prize": "Sorteo de un aspirador de tapicerías",
        "accounts": [
            "ufesa_oficial"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded63",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de productos de limpieza",
        "accounts": [
            "grupo_maya"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-27-grupo-maya",
            "prize": "un kit de limpieza",
            "price": "30€",
            "accounts": [
                "@grupo_maya",
                "@asevi.es"
            ],
            "date": "2025-08-27"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded64",
        "date": "2025-08-17",
        "prize": "Sorteo de una nevera portátil",
        "accounts": [
            "dulce.tentacion121"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded65",
        "date": "2025-08-17",
        "prize": "Sorteo de un iPhone 16",
        "accounts": [
            "karlamamadecuatro"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-9-1-laserxauenjaen",
            "prize": "iPhone 16 💲",
            "price": "959€",
            "accounts": [
                "@laserxauen_jaen",
                "@laserxauencordoba"
            ],
            "date": "2025-09-01"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded66",
        "date": "2025-08-17",
        "prize": "Sorteo de un secaplatos",
        "accounts": [
            "sheshu.home"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-29-sheshu-home",
            "prize": "un secaplatos",
            "price": "80€",
            "accounts": [
                "@sheshu.home"
            ],
            "date": "2025-08-29"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded67",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de perfumes",
        "accounts": [
            "yolandamaquieira"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded68",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de papelería",
        "accounts": [
            "tgm_paperlovers"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded69",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de cosmética",
        "accounts": [
            "druni_perfumerias"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-9-3-druniperfumerias",
            "prize": "2 lotes de productos Australian Gold",
            "price": "80€",
            "accounts": [
                "@druni_perfumerias"
            ],
            "date": "2025-09-03"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded70",
        "date": "2025-08-17",
        "prize": "Sorteo de un aspirador de tapicerías",
        "accounts": [
            "ufesa_oficial"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded71",
        "date": "2025-08-17",
        "prize": "Sorteo de un lote de productos de limpieza",
        "accounts": [
            "grupo_maya"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-27-grupo-maya",
            "prize": "un kit de limpieza",
            "price": "30€",
            "accounts": [
                "@grupo_maya",
                "@asevi.es"
            ],
            "date": "2025-08-27"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded72",
        "date": "2025-08-17",
        "prize": "Sorteo de una nevera portátil",
        "accounts": [
            "dulce.tentacion121"
        ],
        "status": "expired",
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded73",
        "date": "2025-08-17",
        "prize": "Sorteo de un iPhone 16",
        "accounts": [
            "karlamamadecuatro"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-9-1-laserxauenjaen",
            "prize": "iPhone 16 💲",
            "price": "959€",
            "accounts": [
                "@laserxauen_jaen",
                "@laserxauencordoba"
            ],
            "date": "2025-09-01"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded74",
        "date": "2025-08-17",
        "prize": "Sorteo de un secaplatos",
        "accounts": [
            "sheshu.home"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-29-sheshu-home",
            "prize": "un secaplatos",
            "price": "80€",
            "accounts": [
                "@sheshu.home"
            ],
            "date": "2025-08-29"
        },
        "originalDate": "2025-08-17",
        "prize_category": "otros"
    },
    {
        "id": "discarded75",
        "date": "2025-08-16",
        "prize": "un body + ranita (0-18 meses) personalizado",
        "accounts": [
            "@elescaparatedelpueblo",
            "@7coloresloja"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-16-mac_cosmetics",
            "prize": "3 lotes completos de productos de MAC COSMETICS",
            "price": "100€",
            "accounts": [
                "@druni_perfumerias"
            ],
            "date": "2025-09-02"
        },
        "originalDate": "2025-08-16",
        "prize_category": "otros"
    },
    {
        "id": "discarded76",
        "date": "2025-08-16",
        "prize": "un pack de viaje GHD (secador + plancha)",
        "accounts": [
            "@leblondbyluciasoto",
            "@lamisticaravan_axarquia"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-10-druniperfumerias-dera",
            "prize": "3 lotes (dera)",
            "price": "90€",
            "accounts": [
                "@druni_perfumerias"
            ],
            "date": "2025-08-10"
        },
        "originalDate": "2025-08-16",
        "prize_category": "otros"
    },
    {
        "id": "discarded77",
        "date": "2025-08-16",
        "prize": "un ventilador de torre Dyson Cool",
        "accounts": [
            "@bonareaoficial_cat"
        ],
        "status": "expired",
        "originalDate": "2025-08-16",
        "prize_category": "otros"
    },
    {
        "id": "discarded78",
        "date": "2025-08-16",
        "prize": "una tabla de Paddle Surf inflable",
        "accounts": [
            "@guillermocarracedo",
            "@agradocosmetic"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-17-crivit",
            "prize": "Tabla de Paddle Surf (SUP)",
            "price": "200€",
            "accounts": [
                "@crivit"
            ],
            "date": "2025-08-17"
        },
        "originalDate": "2025-08-16",
        "prize_category": "otros"
    },
    {
        "id": "discarded79",
        "date": "2025-08-16",
        "prize": "un kit de Choclinas",
        "accounts": [
            "@chocolinas_es"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-20-giveaway-chocolinas",
            "prize": "kit de Choclinas",
            "price": "30€",
            "accounts": [
                "@chocolinas_es"
            ],
            "date": "2025-09-02"
        },
        "originalDate": "2025-08-16",
        "prize_category": "otros"
    },
    {
        "id": "discarded80",
        "date": "2025-08-16",
        "prize": "3 paleteros",
        "accounts": [
            "@tiendapadelpy"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-29-giveaway-tiendapadel",
            "prize": "3 paleteros",
            "price": "150€",
            "accounts": [
                "@tiendapadelpy"
            ],
            "date": "2025-08-29"
        },
        "originalDate": "2025-08-16",
        "prize_category": "otros"
    },
    {
        "id": "discarded81",
        "date": "2025-08-16",
        "prize": "un vale de 50€ en SAGUARO SHOES!",
        "accounts": [
            "@saguaro_shoes_official",
            "@sietenfamilia"
        ],
        "status": "expired",
        "originalDate": "2025-08-16",
        "prize_category": "otros"
    },
    {
        "id": "discarded82",
        "date": "2025-08-16",
        "prize": "una ilustración personalizada",
        "accounts": [
            "@lavie.ilustraciones"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-9-13-lavie",
            "prize": "una ilustración personalizada",
            "price": "50€",
            "accounts": [
                "@lavie.ilustraciones"
            ],
            "date": "2025-09-13"
        },
        "originalDate": "2025-08-16",
        "prize_category": "otros"
    },
    {
        "id": "discarded83",
        "date": "2025-08-16",
        "prize": "un lote de novedades de LAMEL!",
        "accounts": [
            "@lamel.spain"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-9-6-lamel",
            "prize": "lote de novedades de LAMEL!",
            "price": "80€",
            "accounts": [
                "@lamel.spain"
            ],
            "date": "2025-09-06"
        },
        "originalDate": "2025-08-16",
        "prize_category": "otros"
    },
    {
        "id": "discarded84",
        "date": "2025-08-16",
        "prize": "un lote de productos para el cuidado solar de Agrado",
        "accounts": [
            "@guillermocarracedo",
            "@agradocosmetic"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-21-giveaway-agrado",
            "prize": "lote completo de productos para el cuidado solar",
            "price": "50€",
            "accounts": [
                "@guillermocarracedo",
                "@agradocosmetic"
            ],
            "date": "2025-08-21"
        },
        "originalDate": "2025-08-16",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_1",
        "date": "2025-07-23",
        "prize": "Sorteo de un iPhone 16",
        "accounts": [
            "@druni_perfumerias",
            "@vickyccruz31"
        ],
        "status": "expired",
        "originalDate": "2025-07-23",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_2",
        "date": "2025-08-20",
        "prize": "Pack de productos y 2 dorsales para la Cursa Fanny Sallés",
        "accounts": [
            "@mitjaterrassa"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-20-mitjaterrassa",
            "prize": "Pack de productos y 2 dorsales para la Cursa Fanny Sallés",
            "price": "60€",
            "accounts": [
                "@mitjaterrassa"
            ],
            "date": "2025-08-20"
        },
        "originalDate": "2025-08-20",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_3",
        "date": "2025-08-20",
        "prize": "lote de thefruitcompanyy",
        "accounts": [
            "@pprimor",
            "@puterful_es"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-20-pprimor",
            "prize": "lote de thefruitcompanyy",
            "price": "50€",
            "accounts": [
                "@pprimor",
                "@puterful_es"
            ],
            "date": "2025-08-20"
        },
        "originalDate": "2025-08-20",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_4",
        "date": "2025-08-20",
        "prize": "Un producto Roborock a elegir",
        "accounts": [
            "@roborock.es"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-20-roborockes",
            "prize": "Un producto Roborock a elegir",
            "price": "350€",
            "accounts": [
                "@roborock.es"
            ],
            "date": "2025-08-20"
        },
        "originalDate": "2025-08-20",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_5",
        "date": "2025-08-24",
        "prize": "2 packs de merchandising oficial Pirelli",
        "accounts": [
            "@pirelli.es"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-24-pirellies",
            "prize": "2 packs de merchandising oficial Pirelli",
            "price": "100€",
            "accounts": [
                "@pirelli.es"
            ],
            "date": "2025-08-24"
        },
        "originalDate": "2025-08-24",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_6",
        "date": "2025-08-31",
        "prize": "Mascarilla LED facial",
        "accounts": [
            "@salvelox_es",
            "@vicenta_58"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-24-salvelox",
            "prize": "mascarilla LED facial",
            "price": "60€",
            "accounts": [
                "@salvelox_es"
            ],
            "date": "2025-08-31"
        },
        "originalDate": "2025-08-31",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_7",
        "date": "2025-08-24",
        "prize": "lote de productos de limpieza + 1 kit",
        "accounts": [
            "@leon_airjordan",
            "@autograph_spain",
            "@jordansvinils"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-24-leon_airjordan",
            "prize": "lote de productos de limpieza + 1 kit",
            "price": "60€",
            "accounts": [
                "@leon_airjordan",
                "@autograph_spain",
                "@jordansvinils"
            ],
            "date": "2025-08-24"
        },
        "originalDate": "2025-08-24",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_8",
        "date": "2025-08-23",
        "prize": "Pack de juegos de cartas coleccionables",
        "accounts": [
            "@cartas.coleccionables"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-23-cartas",
            "prize": "Pack de juegos de cartas coleccionables 🃏",
            "price": "100€",
            "accounts": [
                "@cartas.coleccionables"
            ],
            "date": "2025-08-23"
        },
        "originalDate": "2025-08-23",
        "prize_category": "frikis"
    },
    {
        "id": "discarded_new_9",
        "date": "2025-08-15",
        "prize": "tienda de techo DODO EXPEDITION",
        "accounts": [
            "@fang.family3",
            "@dodoexpedition"
        ],
        "status": "expired",
        "originalDate": "2025-08-15",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_10",
        "date": "2025-08-21",
        "prize": "Kit Vuelta al cole",
        "accounts": [
            "@mom_elephant",
            "@coolpack.es"
        ],
        "status": "expired",
        "originalDate": "2025-08-21",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_11",
        "date": "2025-09-01",
        "prize": "televisión 4K LED de 55 pulgadas",
        "accounts": [
            "@orbiambdefabrica"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-9-1-orbiambdefabrica",
            "prize": "televisión 4K LED de 55 pulgadas",
            "price": "500€",
            "accounts": [
                "@orbiambdefabrica"
            ],
            "date": "2025-09-01"
        },
        "originalDate": "2025-09-01",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_12",
        "date": "2025-08-20",
        "prize": "Lote de maternidad",
        "accounts": [
            "@mustelaesp",
            "@koalababycare_es"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-20-mustelaesp",
            "prize": "Lote de maternidad",
            "price": "100€",
            "accounts": [
                "@mustelaesp",
                "@koalababycare_es"
            ],
            "date": "2025-08-20"
        },
        "originalDate": "2025-08-20",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_13",
        "date": "2025-08-24",
        "prize": "lote de productos Gliss & Schwarzkopf",
        "accounts": [
            "@glorys.10",
            "@gliss_es",
            "@schwarzkopfpro.spain"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-14-glorys",
            "prize": "lote de productos Gliss & Schwarzkopf",
            "price": "80€",
            "accounts": [
                "@glorys.10"
            ],
            "date": "2025-08-24"
        },
        "originalDate": "2025-08-24",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_14",
        "date": "2025-08-19",
        "prize": "zapatillas Nike",
        "accounts": [
            "@footonmars",
            "@atleetstores"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-15-atleetstores",
            "prize": "Zapatillas Nike a elegir",
            "price": "120€",
            "accounts": [
                "@atleetstores",
                "@footonmars"
            ],
            "date": "2025-08-19"
        },
        "originalDate": "2025-08-19",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_15",
        "date": "2025-08-31",
        "prize": "Ventilador a batería",
        "accounts": [
            "@einhellesp"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-31-einhellesp",
            "prize": "Ventilador a batería Einhell + Starter Kit",
            "price": "100€",
            "accounts": [
                "@einhellesp"
            ],
            "date": "2025-08-31"
        },
        "originalDate": "2025-08-31",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_16",
        "date": "2025-08-22",
        "prize": "Lote de golosinas",
        "accounts": [
            "@conarenaenlospiess",
            "@vidalgolosinas"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-18-conarenaenlospiess",
            "prize": "alfombra con formas de coral",
            "price": "60€",
            "accounts": [
                "@conarenaenlospiess",
                "@ladykora_designconfort"
            ],
            "date": "2025-08-18"
        },
        "originalDate": "2025-08-22",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_17",
        "date": "2025-08-18",
        "prize": "2 tarjetas regalo Click and Gift de 100€",
        "accounts": [
            "@mapfre_parati"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-18-mapfreparati",
            "prize": "2 tarjetas regalo Click and Gift de 100€",
            "price": "200€",
            "accounts": [
                "@mapfre_parati"
            ],
            "date": "2025-08-18"
        },
        "originalDate": "2025-08-18",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_18",
        "date": "2025-08-12",
        "prize": "4 Entradas dobles para Parque de Atracciones y Parque Warner",
        "accounts": [
            "@fostershollywood"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-13-fostergiveaway",
            "prize": "4 ENTRADAS DOBLES Parque de Atracciones y Parque Warner",
            "price": "200€",
            "accounts": [
                "@fostershollywood"
            ],
            "date": "2025-08-13"
        },
        "originalDate": "2025-08-12",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_19",
        "date": "2025-08-31",
        "prize": "Sorteo de un iPhone 16 Pro",
        "accounts": [
            "@moevegow"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-31-moevegow",
            "prize": "iPhone 16 Pro 💲",
            "price": "1219€",
            "accounts": [
                "@moeve_gow"
            ],
            "date": "2025-08-31"
        },
        "originalDate": "2025-08-31",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_20",
        "date": "2025-08-22",
        "prize": "Un pack de Ray-Ban y café",
        "accounts": [
            "@lave.vida",
            "@laurasanchezz.r"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-16-lave_vida",
            "prize": "unas Meta Ray-Ban + un pack La Ve•Vida",
            "price": "200€",
            "accounts": [
                "@lave.vida",
                "@laurasanchezz.r"
            ],
            "date": "2025-08-16"
        },
        "originalDate": "2025-08-22",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_21",
        "date": "2025-08-22",
        "prize": "Sorteo de unas zapatillas",
        "accounts": [
            "@privatesportshopes",
            "@brooksrunning"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-18-privatesportshopes",
            "prize": "zapatillas Brooks",
            "price": "120€",
            "accounts": [
                "@privatesportshopes",
                "@brooksrunning"
            ],
            "date": "2025-08-18"
        },
        "originalDate": "2025-08-22",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_22",
        "date": "2025-08-18",
        "prize": "Sorteo de una nevera portátil",
        "accounts": [
            "@magdadelroj",
            "@mirinconcito.gastronomico"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-24-garciamillan",
            "prize": "Nevera Polarbox Naranja Sorbete + Un lote de nuestros productos",
            "price": "70€",
            "accounts": [
                "@garciamillan.es",
                "@polarboxstyle_official"
            ],
            "date": "2025-08-24"
        },
        "originalDate": "2025-08-18",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_23",
        "date": "2025-08-20",
        "prize": "Pack de paella",
        "accounts": [
            "@denia.com",
            "@coloma2ferreteros"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-19-denia-paella",
            "prize": "Un paquete de paella",
            "price": "50€",
            "accounts": [
                "@denia.com"
            ],
            "date": "2025-08-19"
        },
        "originalDate": "2025-08-20",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_24",
        "date": "2025-08-19",
        "prize": "lote de productos de limpieza",
        "accounts": [
            "@el_huertico"
        ],
        "status": "expired",
        "originalDate": "2025-08-19",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_25",
        "date": "2025-08-25",
        "prize": "una tarjeta regalo de 100€",
        "accounts": [
            "@theoutletstores",
            "@desigual"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-24-mochila-outlet",
            "prize": "Tarjeta regalo de 100€",
            "price": "100€",
            "accounts": [
                "@theoutletstores",
                "@desigual"
            ],
            "date": "2025-08-24"
        },
        "originalDate": "2025-08-25",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_26",
        "date": "2025-08-22",
        "prize": "Pack de 4 juegos de mesa",
        "accounts": [
            "@maytelizondo",
            "@enpeudejocediciones"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-14-maytelizondo",
            "prize": "Juego de cartas Los Futbolísimos + Expansión + entrada doble para la película 🃏",
            "price": "45€",
            "accounts": [
                "@maytelizondo",
                "@campo4games"
            ],
            "date": "2025-08-14"
        },
        "originalDate": "2025-08-22",
        "prize_category": "frikis"
    },
    {
        "id": "discarded_new_27",
        "date": "2025-08-21",
        "prize": "Pack de paella",
        "accounts": [
            "@denia.com",
            "@coloma2ferreteros"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-19-denia-paella",
            "prize": "Un paquete de paella",
            "price": "50€",
            "accounts": [
                "@denia.com"
            ],
            "date": "2025-08-19"
        },
        "originalDate": "2025-08-21",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_28",
        "date": "2025-08-20",
        "prize": "Lote de productos de Cacao",
        "accounts": [
            "@chocolatestorras",
            "@casa_carriot"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-20-chocolate",
            "prize": "Un lote de productos de Cacao",
            "price": "50€",
            "accounts": [
                "@chocolatestorras",
                "@casa_carriot"
            ],
            "date": "2025-08-20"
        },
        "originalDate": "2025-08-20",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_29",
        "date": "2025-08-21",
        "prize": "Sorteo de una moto eléctrica",
        "accounts": [
            "@soymariborlor"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-22-un-kit-organizacion",
            "prize": "Un kit de organización",
            "price": "60€",
            "accounts": [
                "@alihogar",
                "@codiil.pt"
            ],
            "date": "2025-08-22"
        },
        "originalDate": "2025-08-21",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_30",
        "date": "2025-08-19",
        "prize": "Un viaje a París para 4 personas, 2 iPhone 16 y 5 vales de 200€",
        "accounts": [
            "@druni_perfumerias",
            "@lovyc.es"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-20-druni-viajeparis",
            "prize": "Un viaje a París para 4 personas, 2 iPhone 16 y 5 vales de 200€",
            "price": ">1000€",
            "accounts": [
                "@druni_perfumerias",
                "@lovyc.es"
            ],
            "date": "2025-08-20"
        },
        "originalDate": "2025-08-19",
        "prize_category": "viajes"
    },
    {
        "id": "discarded_new_31",
        "date": "2025-08-20",
        "prize": "10 agendas escolares",
        "accounts": [
            "@alehop_es"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-20-agenda",
            "prize": "10 agendas escolares",
            "price": "100€",
            "accounts": [
                "@alehop_es"
            ],
            "date": "2025-08-20"
        },
        "originalDate": "2025-08-20",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_32",
        "date": "2025-08-20",
        "prize": "Lote de productos de Cacao",
        "accounts": [
            "@chocolatestorras",
            "@casa_carriot"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-20-chocolate",
            "prize": "Un lote de productos de Cacao",
            "price": "50€",
            "accounts": [
                "@chocolatestorras",
                "@casa_carriot"
            ]
        },
        "originalDate": "2025-08-20",
        "prize_category": "otros"
    },
    {
        "id": "discarded_new_33",
        "date": "2025-08-20",
        "prize": "Lote de material escolar",
        "accounts": [
            "@esthersalamancamadero"
        ],
        "status": "duplicate",
        "originalGiveaway": {
            "id": "sorteo-23-lote-escolar",
            "prize": "lote material escolar",
            "price": "80€",
            "accounts": [
                "@esthersalamancamadero"
            ]
        },
        "originalDate": "2025-08-20",
        "prize_category": "otros"
    }
  
];

// Comprueba si ya hay una lista de sorteos descartados en localStorage
// Si no existe, guarda la lista inicial. Si ya existe, usa la que está guardada.
if (localStorage.getItem('discardedGiveaways') === null) {
    localStorage.setItem('discardedGiveaways', JSON.stringify(initialDiscardedGiveaways));
}

window.discardedGiveaways = JSON.parse(localStorage.getItem('discardedGiveaways')) || [];