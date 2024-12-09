const planets = [
        {
            "name": "Heliopolis-0",
            "designation": "P3X-359",
            "description": "Ice planet with harsh conditions.",
            "inhabitants": "Tollan",
            "min_temperature": -82,
            "max_temperature": 47,
            "connected_to_earth": false
        },
        {
            "name": "Chulak-1",
            "designation": "P5X-479",
            "description": "Gas giant with habitable moons.",
            "inhabitants": "Nox,Humans",
            "min_temperature": -50,
            "max_temperature": 73,
            "connected_to_earth": false
        },
        {
            "name": "Orban-2",
            "designation": "P9X-242",
            "description": "Ancient planet with historical significance.",
            "inhabitants": "Humans,Goa'uld",
            "min_temperature": -83,
            "max_temperature": 17,
            "connected_to_earth": false
        },
        {
            "name": "Chulak-3",
            "designation": "P7X-254",
            "description": "Swampy world with primitive tribes.",
            "inhabitants": "Humans,Goa'uld",
            "min_temperature": -46,
            "max_temperature": 9,
            "connected_to_earth": false
        },
        {
            "name": "K'Tau-4",
            "designation": "P3X-372",
            "description": "Swampy world with primitive tribes.",
            "inhabitants": "Tollan",
            "min_temperature": -41,
            "max_temperature": 77,
            "connected_to_earth": false
        },
        {
            "name": "Abydos-5",
            "designation": "P5X-397",
            "description": "Water planet with floating cities.",
            "inhabitants": "Uninhabited",
            "min_temperature": -84,
            "max_temperature": 49,
            "connected_to_earth": false
        },
        {
            "name": "Argos-6",
            "designation": "P1X-303",
            "description": "Ice planet with harsh conditions.",
            "inhabitants": "Replicators",
            "min_temperature": -6,
            "max_temperature": 42,
            "connected_to_earth": true
        },
        {
            "name": "Dakara-7",
            "designation": "P6X-735",
            "description": "Volcanic planet with rich mineral deposits.",
            "inhabitants": "Replicators",
            "min_temperature": -48,
            "max_temperature": 62,
            "connected_to_earth": true
        },
        {
            "name": "P3X-888-8",
            "designation": "P8X-944",
            "description": "Swampy world with primitive tribes.",
            "inhabitants": "Ancients",
            "min_temperature": -77,
            "max_temperature": 41,
            "connected_to_earth": true
        },
        {
            "name": "Tegalus-9",
            "designation": "P4X-966",
            "description": "Mountainous region with ancient ruins.",
            "inhabitants": "Replicators",
            "min_temperature": -31,
            "max_temperature": 72,
            "connected_to_earth": false
        },
        {
            "name": "Langara-10",
            "designation": "P4X-522",
            "description": "Ice planet with harsh conditions.",
            "inhabitants": "Humans,Goa'uld",
            "min_temperature": -52,
            "max_temperature": 95,
            "connected_to_earth": false
        },
        {
            "name": "Tegalus-11",
            "designation": "P3X-942",
            "description": "Desert planet,home to an early human civilization.",
            "inhabitants": "Ori,Priors",
            "min_temperature": -13,
            "max_temperature": 64,
            "connected_to_earth": false
        },
        {
            "name": "K'Tau-12",
            "designation": "P9X-739",
            "description": "Gas giant with habitable moons.",
            "inhabitants": "Jaffa,Goa'uld",
            "min_temperature": -1,
            "max_temperature": 96,
            "connected_to_earth": true
        },
        {
            "name": "Dakara-13",
            "designation": "P5X-513",
            "description": "Volcanic planet with rich mineral deposits.",
            "inhabitants": "Asgard,Humans",
            "min_temperature": -95,
            "max_temperature": 59,
            "connected_to_earth": false
        },
        {
            "name": "Vorash-14",
            "designation": "P2X-315",
            "description": "Ice planet with harsh conditions.",
            "inhabitants": "Ori,Priors",
            "min_temperature": -45,
            "max_temperature": 51,
            "connected_to_earth": false
        },
        {
            "name": "Heliopolis-15",
            "designation": "P4X-756",
            "description": "Water planet with floating cities.",
            "inhabitants": "Tollan",
            "min_temperature": -24,
            "max_temperature": 4,
            "connected_to_earth": true
        },
        {
            "name": "Erebus-16",
            "designation": "P2X-855",
            "description": "Gas giant with habitable moons.",
            "inhabitants": "Ancients",
            "min_temperature": -54,
            "max_temperature": 8,
            "connected_to_earth": true
        },
        {
            "name": "Orban-17",
            "designation": "P6X-757",
            "description": "Swampy world with primitive tribes.",
            "inhabitants": "Nox,Humans",
            "min_temperature": -19,
            "max_temperature": 49,
            "connected_to_earth": false
        },
        {
            "name": "P7J-989-18",
            "designation": "P1X-224",
            "description": "Technologically advanced planet.",
            "inhabitants": "Tollan",
            "min_temperature": -34,
            "max_temperature": 31,
            "connected_to_earth": true
        },
        {
            "name": "Dakara-19",
            "designation": "P1X-262",
            "description": "Desert planet,home to an early human civilization.",
            "inhabitants": "Humans,Goa'uld",
            "min_temperature": -3,
            "max_temperature": 54,
            "connected_to_earth": false
        },
        {
            "name": "Tegalus-20",
            "designation": "P3X-797",
            "description": "Ice planet with harsh conditions.",
            "inhabitants": "Nox,Humans",
            "min_temperature": -12,
            "max_temperature": 58,
            "connected_to_earth": false
        },
        {
            "name": "P3X-888-21",
            "designation": "P5X-130",
            "description": "Ancient planet with historical significance.",
            "inhabitants": "Tok'ra,Goa'uld",
            "min_temperature": -21,
            "max_temperature": 26,
            "connected_to_earth": true
        },
        {
            "name": "Argos-22",
            "designation": "P2X-932",
            "description": "Volcanic planet with rich mineral deposits.",
            "inhabitants": "Asgard,Humans",
            "min_temperature": -95,
            "max_temperature": 75,
            "connected_to_earth": true
        },
        {
            "name": "K'Tau-23",
            "designation": "P1X-418",
            "description": "Water planet with floating cities.",
            "inhabitants": "Tollan",
            "min_temperature": -95,
            "max_temperature": 31,
            "connected_to_earth": true
        },
        {
            "name": "Orban-24",
            "designation": "P4X-119",
            "description": "Swampy world with primitive tribes.",
            "inhabitants": "Ancients",
            "min_temperature": -51,
            "max_temperature": 80,
            "connected_to_earth": true
        },
        {
            "name": "Argos-25",
            "designation": "P3X-210",
            "description": "Gas giant with habitable moons.",
            "inhabitants": "Ori,Priors",
            "min_temperature": -54,
            "max_temperature": 33,
            "connected_to_earth": true
        },
        {
            "name": "Orban-26",
            "designation": "P4X-170",
            "description": "Technologically advanced planet.",
            "inhabitants": "Tok'ra,Goa'uld",
            "min_temperature": -73,
            "max_temperature": 80,
            "connected_to_earth": false
        },
        {
            "name": "Hanka-27",
            "designation": "P1X-483",
            "description": "Mountainous region with ancient ruins.",
            "inhabitants": "Replicators",
            "min_temperature": -65,
            "max_temperature": 47,
            "connected_to_earth": true
        },
        {
            "name": "Hanka-28",
            "designation": "P3X-598",
            "description": "Desert planet,home to an early human civilization.",
            "inhabitants": "Replicators",
            "min_temperature": -31,
            "max_temperature": 31,
            "connected_to_earth": true
        },
        {
            "name": "Argos-29",
            "designation": "P8X-734",
            "description": "Desert planet,home to an early human civilization.",
            "inhabitants": "Jaffa,Goa'uld",
            "min_temperature": -99,
            "max_temperature": 8,
            "connected_to_earth": true
        },
        {
            "name": "P7J-989-30",
            "designation": "P1X-277",
            "description": "Gas giant with habitable moons.",
            "inhabitants": "Ancients",
            "min_temperature": -21,
            "max_temperature": 6,
            "connected_to_earth": true
        },
        {
            "name": "Orban-31",
            "designation": "P2X-226",
            "description": "Forest planet,homeworld of the Jaffa.",
            "inhabitants": "Tok'ra,Goa'uld",
            "min_temperature": -16,
            "max_temperature": 65,
            "connected_to_earth": false
        },
        {
            "name": "Cimmeria-32",
            "designation": "P2X-100",
            "description": "Swampy world with primitive tribes.",
            "inhabitants": "Asgard,Humans",
            "min_temperature": -17,
            "max_temperature": 3,
            "connected_to_earth": false
        },
        {
            "name": "Argos-33",
            "designation": "P2X-238",
            "description": "Water planet with floating cities.",
            "inhabitants": "Uninhabited",
            "min_temperature": -36,
            "max_temperature": 87,
            "connected_to_earth": false
        },
        {
            "name": "P3R-233-34",
            "designation": "P7X-259",
            "description": "Mountainous region with ancient ruins.",
            "inhabitants": "Jaffa,Goa'uld",
            "min_temperature": -85,
            "max_temperature": 78,
            "connected_to_earth": true
        },
        {
            "name": "P3R-233-35",
            "designation": "P9X-206",
            "description": "Mountainous region with ancient ruins.",
            "inhabitants": "Tollan",
            "min_temperature": -46,
            "max_temperature": 49,
            "connected_to_earth": false
        },
        {
            "name": "Kheb-36",
            "designation": "P8X-116",
            "description": "Forest planet,homeworld of the Jaffa.",
            "inhabitants": "Replicators",
            "min_temperature": -66,
            "max_temperature": 17,
            "connected_to_earth": true
        },
        {
            "name": "Tegalus-37",
            "designation": "P3X-467",
            "description": "Ancient planet with historical significance.",
            "inhabitants": "Uninhabited",
            "min_temperature": -30,
            "max_temperature": 90,
            "connected_to_earth": true
        },
        {
            "name": "Erebus-38",
            "designation": "P8X-130",
            "description": "Volcanic planet with rich mineral deposits.",
            "inhabitants": "Tok'ra,Goa'uld",
            "min_temperature": -62,
            "max_temperature": 59,
            "connected_to_earth": false
        },
        {
            "name": "Edora-39",
            "designation": "P3X-548",
            "description": "Forest planet,homeworld of the Jaffa.",
            "inhabitants": "Uninhabited",
            "min_temperature": -85,
            "max_temperature": 48,
            "connected_to_earth": true
        },
        {
            "name": "Chulak-40",
            "designation": "P3X-895",
            "description": "Volcanic planet with rich mineral deposits.",
            "inhabitants": "Nox,Humans",
            "min_temperature": -63,
            "max_temperature": 56,
            "connected_to_earth": false
        },
        {
            "name": "Kheb-41",
            "designation": "P4X-250",
            "description": "Ice planet with harsh conditions.",
            "inhabitants": "Ancients",
            "min_temperature": -83,
            "max_temperature": 67,
            "connected_to_earth": true
        },
        {
            "name": "Orban-42",
            "designation": "P1X-514",
            "description": "Swampy world with primitive tribes.",
            "inhabitants": "Tollan",
            "min_temperature": -38,
            "max_temperature": 90,
            "connected_to_earth": false
        },
        {
            "name": "Abydos-43",
            "designation": "P9X-410",
            "description": "Water planet with floating cities.",
            "inhabitants": "Ori,Priors",
            "min_temperature": -52,
            "max_temperature": 74,
            "connected_to_earth": true
        },
        {
            "name": "Vorash-44",
            "designation": "P8X-721",
            "description": "Mountainous region with ancient ruins.",
            "inhabitants": "Tok'ra,Goa'uld",
            "min_temperature": -17,
            "max_temperature": 98,
            "connected_to_earth": false
        },
        {
            "name": "Tegalus-45",
            "designation": "P2X-221",
            "description": "Ice planet with harsh conditions.",
            "inhabitants": "Replicators",
            "min_temperature": -54,
            "max_temperature": 100,
            "connected_to_earth": false
        },
        {
            "name": "P3R-233-46",
            "designation": "P2X-209",
            "description": "Volcanic planet with rich mineral deposits.",
            "inhabitants": "Replicators",
            "min_temperature": -16,
            "max_temperature": 57,
            "connected_to_earth": true
        },
        {
            "name": "K'Tau-47",
            "designation": "P9X-310",
            "description": "Desert planet,home to an early human civilization.",
            "inhabitants": "Tok'ra,Goa'uld",
            "min_temperature": 0,
            "max_temperature": 67,
            "connected_to_earth": false
        },
        {
            "name": "Vorash-48",
            "designation": "P7X-795",
            "description": "Forest planet,homeworld of the Jaffa.",
            "inhabitants": "Uninhabited",
            "min_temperature": -34,
            "max_temperature": 55,
            "connected_to_earth": false
        },
        {
            "name": "Tegalus-49",
            "designation": "P1X-826",
            "description": "Desert planet,home to an early human civilization.",
            "inhabitants": "Tollan",
            "min_temperature": -33,
            "max_temperature": 69,
            "connected_to_earth": false
        },
        {
            "name": "Erebus-50",
            "designation": "P8X-664",
            "description": "Technologically advanced planet.",
            "inhabitants": "Replicators",
            "min_temperature": 0,
            "max_temperature": 70,
            "connected_to_earth": false
        },
        {
            "name": "Tegalus-51",
            "designation": "P4X-858",
            "description": "Volcanic planet with rich mineral deposits.",
            "inhabitants": "Uninhabited",
            "min_temperature": -39,
            "max_temperature": 57,
            "connected_to_earth": false
        },
        {
            "name": "Cimmeria-52",
            "designation": "P3X-159",
            "description": "Desert planet,home to an early human civilization.",
            "inhabitants": "Replicators",
            "min_temperature": -73,
            "max_temperature": 51,
            "connected_to_earth": false
        },
        {
            "name": "Tegalus-53",
            "designation": "P7X-469",
            "description": "Technologically advanced planet.",
            "inhabitants": "Replicators",
            "min_temperature": -57,
            "max_temperature": 38,
            "connected_to_earth": true
        },
        {
            "name": "Chulak-54",
            "designation": "P1X-386",
            "description": "Mountainous region with ancient ruins.",
            "inhabitants": "Tollan",
            "min_temperature": -38,
            "max_temperature": 81,
            "connected_to_earth": false
        },
        {
            "name": "Tollana-55",
            "designation": "P4X-484",
            "description": "Ice planet with harsh conditions.",
            "inhabitants": "Nox,Humans",
            "min_temperature": -7,
            "max_temperature": 9,
            "connected_to_earth": false
        },
        {
            "name": "P3R-233-56",
            "designation": "P5X-237",
            "description": "Technologically advanced planet.",
            "inhabitants": "Ori,Priors",
            "min_temperature": -95,
            "max_temperature": 6,
            "connected_to_earth": false
        },
        {
            "name": "Argos-57",
            "designation": "P9X-381",
            "description": "Ancient planet with historical significance.",
            "inhabitants": "Ancients",
            "min_temperature": -46,
            "max_temperature": 35,
            "connected_to_earth": false
        },
        {
            "name": "Hanka-58",
            "designation": "P5X-211",
            "description": "Gas giant with habitable moons.",
            "inhabitants": "Jaffa,Goa'uld",
            "min_temperature": -69,
            "max_temperature": 78,
            "connected_to_earth": false
        },
        {
            "name": "Erebus-59",
            "designation": "P5X-964",
            "description": "Technologically advanced planet.",
            "inhabitants": "Jaffa,Goa'uld",
            "min_temperature": -37,
            "max_temperature": 83,
            "connected_to_earth": true
        },
        {
            "name": "Tollana-60",
            "designation": "P2X-983",
            "description": "Ice planet with harsh conditions.",
            "inhabitants": "Nox,Humans",
            "min_temperature": -22,
            "max_temperature": 94,
            "connected_to_earth": false
        },
        {
            "name": "P7J-989-61",
            "designation": "P3X-231",
            "description": "Gas giant with habitable moons.",
            "inhabitants": "Nox,Humans",
            "min_temperature": -21,
            "max_temperature": 38,
            "connected_to_earth": false
        },
        {
            "name": "K'Tau-62",
            "designation": "P4X-262",
            "description": "Mountainous region with ancient ruins.",
            "inhabitants": "Ancients",
            "min_temperature": -48,
            "max_temperature": 41,
            "connected_to_earth": true
        },
        {
            "name": "Heliopolis-63",
            "designation": "P3X-939",
            "description": "Desert planet,home to an early human civilization.",
            "inhabitants": "Ori,Priors",
            "min_temperature": -46,
            "max_temperature": 14,
            "connected_to_earth": false
        },
        {
            "name": "Heliopolis-64",
            "designation": "P6X-923",
            "description": "Swampy world with primitive tribes.",
            "inhabitants": "Replicators",
            "min_temperature": -53,
            "max_temperature": 68,
            "connected_to_earth": true
        },
        {
            "name": "Vorash-65",
            "designation": "P7X-370",
            "description": "Water planet with floating cities.",
            "inhabitants": "Tok'ra,Goa'uld",
            "min_temperature": -7,
            "max_temperature": 60,
            "connected_to_earth": false
        },
        {
            "name": "Kheb-66",
            "designation": "P4X-469",
            "description": "Ice planet with harsh conditions.",
            "inhabitants": "Tollan",
            "min_temperature": -65,
            "max_temperature": 21,
            "connected_to_earth": true
        },
        {
            "name": "Tegalus-67",
            "designation": "P3X-862",
            "description": "Gas giant with habitable moons.",
            "inhabitants": "Nox,Humans",
            "min_temperature": -59,
            "max_temperature": 60,
            "connected_to_earth": true
        },
        {
            "name": "Argos-68",
            "designation": "P7X-878",
            "description": "Desert planet,home to an early human civilization.",
            "inhabitants": "Tok'ra,Goa'uld",
            "min_temperature": -31,
            "max_temperature": 4,
            "connected_to_earth": false
        },
        {
            "name": "Heliopolis-69",
            "designation": "P7X-223",
            "description": "Desert planet,home to an early human civilization.",
            "inhabitants": "Ori,Priors",
            "min_temperature": -4,
            "max_temperature": 44,
            "connected_to_earth": false
        },
        {
            "name": "Langara-70",
            "designation": "P6X-984",
            "description": "Volcanic planet with rich mineral deposits.",
            "inhabitants": "Humans,Goa'uld",
            "min_temperature": -100,
            "max_temperature": 42,
            "connected_to_earth": false
        },
        {
            "name": "Vorash-71",
            "designation": "P9X-851",
            "description": "Ice planet with harsh conditions.",
            "inhabitants": "Tok'ra,Goa'uld",
            "min_temperature": -41,
            "max_temperature": 28,
            "connected_to_earth": true
        },
        {
            "name": "Chulak-72",
            "designation": "P8X-514",
            "description": "Volcanic planet with rich mineral deposits.",
            "inhabitants": "Asgard,Humans",
            "min_temperature": -41,
            "max_temperature": 28,
            "connected_to_earth": false
        },
        {
            "name": "Chulak-73",
            "designation": "P6X-358",
            "description": "Water planet with floating cities.",
            "inhabitants": "Ancients",
            "min_temperature": -74,
            "max_temperature": 96,
            "connected_to_earth": false
        },
        {
            "name": "Chulak-74",
            "designation": "P9X-362",
            "description": "Desert planet,home to an early human civilization.",
            "inhabitants": "Uninhabited",
            "min_temperature": -28,
            "max_temperature": 73,
            "connected_to_earth": false
        },
        {
            "name": "Langara-75",
            "designation": "P9X-386",
            "description": "Ice planet with harsh conditions.",
            "inhabitants": "Replicators",
            "min_temperature": -91,
            "max_temperature": 65,
            "connected_to_earth": false
        },
        {
            "name": "Kheb-76",
            "designation": "P7X-895",
            "description": "Volcanic planet with rich mineral deposits.",
            "inhabitants": "Ori,Priors",
            "min_temperature": -44,
            "max_temperature": 90,
            "connected_to_earth": false
        },
        {
            "name": "Dakara-77",
            "designation": "P6X-721",
            "description": "Ice planet with harsh conditions.",
            "inhabitants": "Ori,Priors",
            "min_temperature": -77,
            "max_temperature": 5,
            "connected_to_earth": true
        },
        {
            "name": "Tollana-78",
            "designation": "P7X-419",
            "description": "Water planet with floating cities.",
            "inhabitants": "Humans,Goa'uld",
            "min_temperature": -80,
            "max_temperature": 46,
            "connected_to_earth": true
        },
        {
            "name": "Chulak-79",
            "designation": "P4X-660",
            "description": "Forest planet,homeworld of the Jaffa.",
            "inhabitants": "Replicators",
            "min_temperature": -61,
            "max_temperature": 93,
            "connected_to_earth": false
        },
        {
            "name": "Hanka-80",
            "designation": "P8X-443",
            "description": "Mountainous region with ancient ruins.",
            "inhabitants": "Tollan",
            "min_temperature": -72,
            "max_temperature": 73,
            "connected_to_earth": false
        },
        {
            "name": "P3R-233-81",
            "designation": "P6X-611",
            "description": "Desert planet,home to an early human civilization.",
            "inhabitants": "Nox,Humans",
            "min_temperature": -52,
            "max_temperature": 24,
            "connected_to_earth": false
        },
        {
            "name": "Erebus-82",
            "designation": "P8X-382",
            "description": "Desert planet,home to an early human civilization.",
            "inhabitants": "Tollan",
            "min_temperature": -4,
            "max_temperature": 2,
            "connected_to_earth": true
        },
        {
            "name": "Dakara-83",
            "designation": "P9X-283",
            "description": "Technologically advanced planet.",
            "inhabitants": "Tollan",
            "min_temperature": -81,
            "max_temperature": 25,
            "connected_to_earth": true
        },
        {
            "name": "P2X-338-84",
            "designation": "P3X-979",
            "description": "Mountainous region with ancient ruins.",
            "inhabitants": "Ori,Priors",
            "min_temperature": -88,
            "max_temperature": 61,
            "connected_to_earth": true
        },
        {
            "name": "P3R-233-85",
            "designation": "P1X-278",
            "description": "Ancient planet with historical significance.",
            "inhabitants": "Nox,Humans",
            "min_temperature": -86,
            "max_temperature": 61,
            "connected_to_earth": true
        },
        {
            "name": "Hanka-86",
            "designation": "P5X-243",
            "description": "Water planet with floating cities.",
            "inhabitants": "Tok'ra,Goa'uld",
            "min_temperature": -66,
            "max_temperature": 87,
            "connected_to_earth": false
        },
        {
            "name": "K'Tau-87",
            "designation": "P4X-148",
            "description": "Gas giant with habitable moons.",
            "inhabitants": "Ancients",
            "min_temperature": -22,
            "max_temperature": 8,
            "connected_to_earth": true
        },
        {
            "name": "Hanka-88",
            "designation": "P2X-963",
            "description": "Mountainous region with ancient ruins.",
            "inhabitants": "Replicators",
            "min_temperature": -72,
            "max_temperature": 34,
            "connected_to_earth": false
        },
        {
            "name": "Argos-89",
            "designation": "P3X-348",
            "description": "Mountainous region with ancient ruins.",
            "inhabitants": "Uninhabited",
            "min_temperature": -23,
            "max_temperature": 11,
            "connected_to_earth": false
        },
        {
            "name": "Chulak-90",
            "designation": "P9X-703",
            "description": "Water planet with floating cities.",
            "inhabitants": "Replicators",
            "min_temperature": -48,
            "max_temperature": 68,
            "connected_to_earth": true
        },
        {
            "name": "Edora-91",
            "designation": "P3X-342",
            "description": "Forest planet,homeworld of the Jaffa.",
            "inhabitants": "Ancients",
            "min_temperature": -34,
            "max_temperature": 34,
            "connected_to_earth": true
        },
        {
            "name": "Vorash-92",
            "designation": "P3X-827",
            "description": "Ice planet with harsh conditions.",
            "inhabitants": "Uninhabited",
            "min_temperature": -44,
            "max_temperature": 75,
            "connected_to_earth": true
        },
        {
            "name": "Langara-93",
            "designation": "P4X-106",
            "description": "Ancient planet with historical significance.",
            "inhabitants": "Nox,Humans",
            "min_temperature": -68,
            "max_temperature": 89,
            "connected_to_earth": false
        },
        {
            "name": "Tollana-94",
            "designation": "P7X-974",
            "description": "Water planet with floating cities.",
            "inhabitants": "Tok'ra,Goa'uld",
            "min_temperature": -40,
            "max_temperature": 60,
            "connected_to_earth": true
        },
        {
            "name": "K'Tau-95",
            "designation": "P9X-683",
            "description": "Ice planet with harsh conditions.",
            "inhabitants": "Replicators",
            "min_temperature": -69,
            "max_temperature": 21,
            "connected_to_earth": true
        },
        {
            "name": "Tegalus-96",
            "designation": "P8X-632",
            "description": "Desert planet,home to an early human civilization.",
            "inhabitants": "Asgard,Humans",
            "min_temperature": -93,
            "max_temperature": 35,
            "connected_to_earth": false
        },
        {
            "name": "Edora-97",
            "designation": "P1X-545",
            "description": "Ice planet with harsh conditions.",
            "inhabitants": "Replicators",
            "min_temperature": -60,
            "max_temperature": 44,
            "connected_to_earth": false
        },
        {
            "name": "Hanka-98",
            "designation": "P1X-237",
            "description": "Swampy world with primitive tribes.",
            "inhabitants": "Humans,Goa'uld",
            "min_temperature": -72,
            "max_temperature": 54,
            "connected_to_earth": true
        },
        {
            "name": "Edora-99",
            "designation": "P8X-284",
            "description": "Swampy world with primitive tribes.",
            "inhabitants": "Replicators",
            "min_temperature": -16,
            "max_temperature": 58,
            "connected_to_earth": false
        },
        {
            "name": "Hanka-100",
            "designation": "P5X-206",
            "description": "Swampy world with primitive tribes.",
            "inhabitants": "Tollan",
            "min_temperature": -77,
            "max_temperature": 64,
            "connected_to_earth": true
        },
        {
            "name": "Langara-101",
            "designation": "P2X-511",
            "description": "Ice planet with harsh conditions.",
            "inhabitants": "Tollan",
            "min_temperature": -61,
            "max_temperature": 17,
            "connected_to_earth": true
        },
        {
            "name": "Dakara-102",
            "designation": "P1X-696",
            "description": "Volcanic planet with rich mineral deposits.",
            "inhabitants": "Nox,Humans",
            "min_temperature": -40,
            "max_temperature": 62,
            "connected_to_earth": false
        },
        {
            "name": "Abydos-103",
            "designation": "P6X-577",
            "description": "Water planet with floating cities.",
            "inhabitants": "Jaffa,Goa'uld",
            "min_temperature": -82,
            "max_temperature": 40,
            "connected_to_earth": true
        },
        {
            "name": "Kheb-104",
            "designation": "P8X-483",
            "description": "Forest planet,homeworld of the Jaffa.",
            "inhabitants": "Ori,Priors",
            "min_temperature": -15,
            "max_temperature": 72,
            "connected_to_earth": true
        },
        {
            "name": "K'Tau-105",
            "designation": "P3X-669",
            "description": "Water planet with floating cities.",
            "inhabitants": "Asgard,Humans",
            "min_temperature": -68,
            "max_temperature": 27,
            "connected_to_earth": true
        },
        {
            "name": "Abydos-106",
            "designation": "P4X-692",
            "description": "Swampy world with primitive tribes.",
            "inhabitants": "Ori,Priors",
            "min_temperature": -77,
            "max_temperature": 17,
            "connected_to_earth": true
        },
        {
            "name": "Heliopolis-107",
            "designation": "P7X-156",
            "description": "Ice planet with harsh conditions.",
            "inhabitants": "Tollan",
            "min_temperature": -83,
            "max_temperature": 47,
            "connected_to_earth": true
        },
        {
            "name": "Heliopolis-108",
            "designation": "P9X-968",
            "description": "Mountainous region with ancient ruins.",
            "inhabitants": "Uninhabited",
            "min_temperature": -17,
            "max_temperature": 30,
            "connected_to_earth": true
        },
        {
            "name": "P2X-338-109",
            "designation": "P5X-420",
            "description": "Technologically advanced planet.",
            "inhabitants": "Replicators",
            "min_temperature": -6,
            "max_temperature": 5,
            "connected_to_earth": false
        },
        {
            "name": "Abydos-110",
            "designation": "P6X-166",
            "description": "Desert planet,home to an early human civilization.",
            "inhabitants": "Ori,Priors",
            "min_temperature": -65,
            "max_temperature": 52,
            "connected_to_earth": false
        },
        {
            "name": "Tollana-111",
            "designation": "P3X-495",
            "description": "Ice planet with harsh conditions.",
            "inhabitants": "Ancients",
            "min_temperature": -65,
            "max_temperature": 29,
            "connected_to_earth": true
        },
        {
            "name": "Orban-112",
            "designation": "P7X-568",
            "description": "Water planet with floating cities.",
            "inhabitants": "Uninhabited",
            "min_temperature": -13,
            "max_temperature": 1,
            "connected_to_earth": false
        },
        {
            "name": "Edora-113",
            "designation": "P4X-472",
            "description": "Ancient planet with historical significance.",
            "inhabitants": "Tok'ra,Goa'uld",
            "min_temperature": -34,
            "max_temperature": 15,
            "connected_to_earth": false
        },
        {
            "name": "Cimmeria-114",
            "designation": "P9X-948",
            "description": "Volcanic planet with rich mineral deposits.",
            "inhabitants": "Replicators",
            "min_temperature": -28,
            "max_temperature": 19,
            "connected_to_earth": false
        },
        {
            "name": "Kheb-115",
            "designation": "P1X-291",
            "description": "Gas giant with habitable moons.",
            "inhabitants": "Tollan",
            "min_temperature": -26,
            "max_temperature": 78,
            "connected_to_earth": false
        },
        {
            "name": "Tegalus-116",
            "designation": "P5X-466",
            "description": "Ice planet with harsh conditions.",
            "inhabitants": "Tollan",
            "min_temperature": -35,
            "max_temperature": 89,
            "connected_to_earth": false
        },
        {
            "name": "P2X-338-117",
            "designation": "P3X-265",
            "description": "Volcanic planet with rich mineral deposits.",
            "inhabitants": "Tok'ra,Goa'uld",
            "min_temperature": -13,
            "max_temperature": 22,
            "connected_to_earth": true
        },
        {
            "name": "Dakara-118",
            "designation": "P9X-628",
            "description": "Volcanic planet with rich mineral deposits.",
            "inhabitants": "Replicators",
            "min_temperature": -67,
            "max_temperature": 41,
            "connected_to_earth": true
        },
        {
            "name": "K'Tau-119",
            "designation": "P3X-180",
            "description": "Ice planet with harsh conditions.",
            "inhabitants": "Asgard,Humans",
            "min_temperature": -45,
            "max_temperature": 55,
            "connected_to_earth": false
        },
        {
            "name": "Vorash-120",
            "designation": "P1X-206",
            "description": "Forest planet,homeworld of the Jaffa.",
            "inhabitants": "Ancients",
            "min_temperature": -29,
            "max_temperature": 6,
            "connected_to_earth": true
        },
        {
            "name": "Kheb-121",
            "designation": "P9X-484",
            "description": "Volcanic planet with rich mineral deposits.",
            "inhabitants": "Ancients",
            "min_temperature": -25,
            "max_temperature": 10,
            "connected_to_earth": false
        },
        {
            "name": "P7J-989-122",
            "designation": "P9X-621",
            "description": "Forest planet,homeworld of the Jaffa.",
            "inhabitants": "Asgard,Humans",
            "min_temperature": -96,
            "max_temperature": 28,
            "connected_to_earth": false
        },
        {
            "name": "Erebus-123",
            "designation": "P5X-133",
            "description": "Technologically advanced planet.",
            "inhabitants": "Asgard,Humans",
            "min_temperature": -37,
            "max_temperature": 80,
            "connected_to_earth": true
        },
        {
            "name": "Edora-124",
            "designation": "P2X-817",
            "description": "Ice planet with harsh conditions.",
            "inhabitants": "Uninhabited",
            "min_temperature": -10,
            "max_temperature": 55,
            "connected_to_earth": true
        }
    ]