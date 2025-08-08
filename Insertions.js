// Insercion de datos a la colección "pais"
db.pais.insertMany([
  { _id: "COL", nombre: "Colombia", continente: "América del Sur" },
  { _id: "USA", nombre: "Estados Unidos", continente: "América del Norte" },
  { _id: "BRA", nombre: "Brasil", continente: "América del Sur" },
  { _id: "ARG", nombre: "Argentina", continente: "América del Sur" },
  { _id: "ESP", nombre: "España", continente: "Europa" },
  { _id: "FRA", nombre: "Francia", continente: "Europa" },
  { _id: "DEU", nombre: "Alemania", continente: "Europa" },
  { _id: "ITA", nombre: "Italia", continente: "Europa" },
  { _id: "JPN", nombre: "Japón", continente: "Asia" },
  { _id: "CHN", nombre: "China", continente: "Asia" },
  { _id: "AUS", nombre: "Australia", continente: "Oceanía" },
  { _id: "ZAF", nombre: "Sudáfrica", continente: "África" },
  { _id: "MEX", nombre: "México", continente: "América del Norte" },
  { _id: "CAN", nombre: "Canadá", continente: "América del Norte" },
  { _id: "KOR", nombre: "Corea del Sur", continente: "Asia" }
]);

// Insercion de los datos a la coleccion "delegacion"

db.delegacion.insertMany([
  { id_pais: "COL", nombre: "Delegación Colombia", fecha_creacion: new Date("2020-03-15"), id_delegacion: "delCOL37" },
  { id_pais: "USA", nombre: "Delegación Estados Unidos", fecha_creacion: new Date("2019-06-10"), id_delegacion: "delUSA82" },
  { id_pais: "BRA", nombre: "Delegación Brasil", fecha_creacion: new Date("2021-01-25"), id_delegacion: "delBRA54" },
  { id_pais: "ARG", nombre: "Delegación Argentina", fecha_creacion: new Date("2018-09-05"), id_delegacion: "delARG19" },
  { id_pais: "ESP", nombre: "Delegación España", fecha_creacion: new Date("2017-11-22"), id_delegacion: "delESP73" },
  { id_pais: "FRA", nombre: "Delegación Francia", fecha_creacion: new Date("2022-02-18"), id_delegacion: "delFRA41" },
  { id_pais: "DEU", nombre: "Delegación Alemania", fecha_creacion: new Date("2016-07-30"), id_delegacion: "delDEU96" },
  { id_pais: "ITA", nombre: "Delegación Italia", fecha_creacion: new Date("2015-05-12"), id_delegacion: "delITA28" },
  { id_pais: "JPN", nombre: "Delegación Japón", fecha_creacion: new Date("2014-08-09"), id_delegacion: "delJPN65" },
  { id_pais: "CHN", nombre: "Delegación China", fecha_creacion: new Date("2013-12-01"), id_delegacion: "delCHN77" },
  { id_pais: "AUS", nombre: "Delegación Australia", fecha_creacion: new Date("2020-04-21"), id_delegacion: "delAUS84" },
  { id_pais: "ZAF", nombre: "Delegación Sudáfrica", fecha_creacion: new Date("2019-10-16"), id_delegacion: "delZAF52" },
  { id_pais: "MEX", nombre: "Delegación México", fecha_creacion: new Date("2018-02-03"), id_delegacion: "delMEX90" },
  { id_pais: "CAN", nombre: "Delegación Canadá", fecha_creacion: new Date("2017-09-27"), id_delegacion: "delCAN13" },
  { id_pais: "KOR", nombre: "Delegación Corea del Sur", fecha_creacion: new Date("2016-01-14"), id_delegacion: "delKOR39" }
]);

// Insercion de los datos a la coleccion "atleta"

db.atleta.insertMany([
  { _id: "ATL001", nombre: "Juan Pérez", edad: 24, genero: "M", nacionalidad: "COL", id_equipo: "EQP001" },
  { _id: "ATL002", nombre: "María Gómez", edad: 22, genero: "F", nacionalidad: "COL", id_equipo: "EQP001" },
  { _id: "ATL003", nombre: "James Smith", edad: 27, genero: "M", nacionalidad: "USA", id_equipo: "EQP002" },
  { _id: "ATL004", nombre: "Emily Johnson", edad: 21, genero: "F", nacionalidad: "USA", id_equipo: "EQP002" },
  { _id: "ATL005", nombre: "Carlos Silva", edad: 29, genero: "M", nacionalidad: "BRA", id_equipo: "EQP003" },
  { _id: "ATL006", nombre: "Ana Costa", edad: 26, genero: "F", nacionalidad: "BRA", id_equipo: "EQP003" },
  { _id: "ATL007", nombre: "Luis Martínez", edad: 25, genero: "M", nacionalidad: "ARG", id_equipo: "EQP004" },
  { _id: "ATL008", nombre: "Sofía Fernández", edad: 23, genero: "F", nacionalidad: "ARG", id_equipo: "EQP004" },
  { _id: "ATL009", nombre: "Javier López", edad: 28, genero: "M", nacionalidad: "ESP", id_equipo: "EQP005" },
  { _id: "ATL010", nombre: "Lucía Sánchez", edad: 24, genero: "F", nacionalidad: "ESP", id_equipo: "EQP005" },
  { _id: "ATL011", nombre: "Pierre Dubois", edad: 30, genero: "M", nacionalidad: "FRA", id_equipo: "EQP006" },
  { _id: "ATL012", nombre: "Camille Moreau", edad: 22, genero: "F", nacionalidad: "FRA", id_equipo: "EQP006" },
  { _id: "ATL013", nombre: "Hans Müller", edad: 26, genero: "M", nacionalidad: "DEU", id_equipo: "EQP007" },
  { _id: "ATL014", nombre: "Lena Schmidt", edad: 25, genero: "F", nacionalidad: "DEU", id_equipo: "EQP007" },
  { _id: "ATL015", nombre: "Marco Rossi", edad: 28, genero: "M", nacionalidad: "ITA", id_equipo: "EQP008" },
  { _id: "ATL016", nombre: "Giulia Bianchi", edad: 24, genero: "F", nacionalidad: "ITA", id_equipo: "EQP008" },
  { _id: "ATL017", nombre: "Takumi Tanaka", edad: 23, genero: "M", nacionalidad: "JPN", id_equipo: "EQP009" },
  { _id: "ATL018", nombre: "Yui Kobayashi", edad: 21, genero: "F", nacionalidad: "JPN", id_equipo: "EQP009" },
  { _id: "ATL019", nombre: "Wei Zhang", edad: 29, genero: "M", nacionalidad: "CHN", id_equipo: "EQP010" },
  { _id: "ATL020", nombre: "Li Wang", edad: 22, genero: "F", nacionalidad: "CHN", id_equipo: "EQP010" },
  { _id: "ATL021", nombre: "Liam Brown", edad: 27, genero: "M", nacionalidad: "AUS", id_equipo: "EQP011" },
  { _id: "ATL022", nombre: "Olivia Wilson", edad: 23, genero: "F", nacionalidad: "AUS", id_equipo: "EQP011" },
  { _id: "ATL023", nombre: "Sipho Nkosi", edad: 26, genero: "M", nacionalidad: "ZAF", id_equipo: "EQP012" },
  { _id: "ATL024", nombre: "Zanele Dlamini", edad: 25, genero: "F", nacionalidad: "ZAF", id_equipo: "EQP012" },
  { _id: "ATL025", nombre: "Diego Hernández", edad: 28, genero: "M", nacionalidad: "MEX", id_equipo: "EQP013" },
  { _id: "ATL026", nombre: "Valeria Ramírez", edad: 24, genero: "F", nacionalidad: "MEX", id_equipo: "EQP013" },
  { _id: "ATL027", nombre: "Noah Anderson", edad: 22, genero: "M", nacionalidad: "CAN", id_equipo: "EQP014" },
  { _id: "ATL028", nombre: "Emma Clark", edad: 21, genero: "F", nacionalidad: "CAN", id_equipo: "EQP014" },
  { _id: "ATL029", nombre: "Hyun Park", edad: 25, genero: "M", nacionalidad: "KOR", id_equipo: "EQP015" },
  { _id: "ATL030", nombre: "Jiwoo Kim", edad: 23, genero: "F", nacionalidad: "KOR", id_equipo: "EQP015" },
  { _id: "ATL031", nombre: "Felipe Morales", edad: 24, genero: "M", nacionalidad: "COL", id_equipo: "EQP016" },
  { _id: "ATL032", nombre: "Isabella Torres", edad: 22, genero: "F", nacionalidad: "COL", id_equipo: "EQP016" },
  { _id: "ATL033", nombre: "Patrick Miller", edad: 28, genero: "M", nacionalidad: "USA", id_equipo: "EQP017" },
  { _id: "ATL034", nombre: "Sophia Davis", edad: 25, genero: "F", nacionalidad: "USA", id_equipo: "EQP017" },
  { _id: "ATL035", nombre: "Rafael Oliveira", edad: 26, genero: "M", nacionalidad: "BRA", id_equipo: "EQP018" },
  { _id: "ATL036", nombre: "Fernanda Lima", edad: 23, genero: "F", nacionalidad: "BRA", id_equipo: "EQP018" },
  { _id: "ATL037", nombre: "Matías Suárez", edad: 27, genero: "M", nacionalidad: "ARG", id_equipo: "EQP019" },
  { _id: "ATL038", nombre: "Camila Pereyra", edad: 22, genero: "F", nacionalidad: "ARG", id_equipo: "EQP019" },
  { _id: "ATL039", nombre: "Andrés Navarro", edad: 24, genero: "M", nacionalidad: "ESP", id_equipo: "EQP020" },
  { _id: "ATL040", nombre: "Paula Castro", edad: 21, genero: "F", nacionalidad: "ESP", id_equipo: "EQP020" },
  { _id: "ATL041", nombre: "Hugo Girard", edad: 29, genero: "M", nacionalidad: "FRA", id_equipo: "EQP021" },
  { _id: "ATL042", nombre: "Amélie Petit", edad: 23, genero: "F", nacionalidad: "FRA", id_equipo: "EQP021" },
  { _id: "ATL043", nombre: "Lukas Weber", edad: 25, genero: "M", nacionalidad: "DEU", id_equipo: "EQP022" },
  { _id: "ATL044", nombre: "Mia Keller", edad: 22, genero: "F", nacionalidad: "DEU", id_equipo: "EQP022" },
  { _id: "ATL045", nombre: "Antonio Ricci", edad: 28, genero: "M", nacionalidad: "ITA", id_equipo: "EQP023" }
]);

// Insercion de los datos a la coleccion "disciplina"

db.disciplina.insertMany([
  { _id: "ATH", nombre: "Atletismo" },
  { _id: "SWI", nombre: "Natación" },
  { _id: "GYM", nombre: "Gimnasia Artística" },
  { _id: "BOX", nombre: "Boxeo" },
  { _id: "JUD", nombre: "Judo" },
  { _id: "WRE", nombre: "Lucha" },
  { _id: "CYC", nombre: "Ciclismo" },
  { _id: "ROW", nombre: "Remo" },
  { _id: "ARC", nombre: "Tiro con Arco" },
  { _id: "FEN", nombre: "Esgrima" },
  { _id: "TAE", nombre: "Taekwondo" },
  { _id: "WEI", nombre: "Levantamiento de Pesas" },
  { _id: "SAI", nombre: "Vela" },
  { _id: "SUR", nombre: "Surf" },
  { _id: "BAS", nombre: "Baloncesto" }
]);

// Insercion de los datos a la coleccion "equipo"

db.equipo.insertMany([
  { id_equipo: "EQ01", nombre: "Rápidos del Caribe", atletas: ["A01","A02","A03","A04"], id_disciplina: "ATH", id_delegacion: "delCOL37" },
  { id_equipo: "EQ02", nombre: "Trotamundos Elite", atletas: ["A05","A06"], id_disciplina: "ATH", id_delegacion: "delUSA82" },

  { id_equipo: "EQ03", nombre: "Tiburones Azules", atletas: ["A07","A08","A09"], id_disciplina: "SWI", id_delegacion: "delBRA54" },
  { id_equipo: "EQ04", nombre: "Delfines Dorados", atletas: ["A10","A11","A12","A13"], id_disciplina: "SWI", id_delegacion: "delARG19" },

  { id_equipo: "EQ05", nombre: "Aéreos Dorados", atletas: ["A14"], id_disciplina: "GYM", id_delegacion: "delESP73" },
  { id_equipo: "EQ06", nombre: "Saltadores del Sol", atletas: ["A15","A16","A17"], id_disciplina: "GYM", id_delegacion: "delFRA41" },

  { id_equipo: "EQ07", nombre: "Puños de Acero", atletas: ["A18","A19","A20"], id_disciplina: "BOX", id_delegacion: "delDEU96" },
  { id_equipo: "EQ08", nombre: "Guantes de Oro", atletas: ["A21","A22"], id_disciplina: "BOX", id_delegacion: "delITA28" },

  { id_equipo: "EQ09", nombre: "Samuráis del Tatami", atletas: ["A23","A24"], id_disciplina: "JUD", id_delegacion: "delJPN65" },
  { id_equipo: "EQ10", nombre: "Maestros del Judo", atletas: ["A25","A26","A27"], id_disciplina: "JUD", id_delegacion: "delCHN77" },

  { id_equipo: "EQ11", nombre: "Ruedas de Fuego", atletas: ["A28","A29"], id_disciplina: "CYC", id_delegacion: "delAUS84" },
  { id_equipo: "EQ12", nombre: "Pedal de Hierro", atletas: ["A30","A31","A32"], id_disciplina: "CYC", id_delegacion: "delZAF52" },

  { id_equipo: "EQ13", nombre: "Remeros del Sol", atletas: ["A33","A34","A35"], id_disciplina: "ROW", id_delegacion: "delMEX90" },
  { id_equipo: "EQ14", nombre: "Vikingos del Lago", atletas: ["A36","A37"], id_disciplina: "ROW", id_delegacion: "delCAN13" },

  { id_equipo: "EQ15", nombre: "Flechas Doradas", atletas: ["A38","A39","A40"], id_disciplina: "ARC", id_delegacion: "delKOR39" },
  { id_equipo: "EQ16", nombre: "Arqueros del Viento", atletas: ["A41","A42"], id_disciplina: "ARC", id_delegacion: "delCOL37" },

  { id_equipo: "EQ17", nombre: "Espadas Legendarias", atletas: ["A43"], id_disciplina: "FEN", id_delegacion: "delUSA82" },
  { id_equipo: "EQ18", nombre: "Filo de Acero", atletas: ["A44","A45"], id_disciplina: "FEN", id_delegacion: "delBRA54" },

  { id_equipo: "EQ19", nombre: "Dragones del Taekwondo", atletas: ["A01","A03","A05"], id_disciplina: "TAE", id_delegacion: "delARG19" },
  { id_equipo: "EQ20", nombre: "Patadas de Acero", atletas: ["A07","A09"], id_disciplina: "TAE", id_delegacion: "delESP73" },

  { id_equipo: "EQ21", nombre: "Titanes del Hierro", atletas: ["A11","A13"], id_disciplina: "WEI", id_delegacion: "delFRA41" },
  { id_equipo: "EQ22", nombre: "Levantadores del Sol", atletas: ["A15","A17","A19"], id_disciplina: "WEI", id_delegacion: "delDEU96" },

  { id_equipo: "EQ23", nombre: "Velas al Viento", atletas: ["A21","A23"], id_disciplina: "SAI", id_delegacion: "delITA28" },
  { id_equipo: "EQ24", nombre: "Navegantes del Norte", atletas: ["A25","A27","A29"], id_disciplina: "SAI", id_delegacion: "delJPN65" },

  { id_equipo: "EQ25", nombre: "Olas Imparables", atletas: ["A31","A33"], id_disciplina: "SUR", id_delegacion: "delCHN77" },
  { id_equipo: "EQ26", nombre: "Surfistas del Alba", atletas: ["A35","A37","A39"], id_disciplina: "SUR", id_delegacion: "delAUS84" },

  { id_equipo: "EQ27", nombre: "Canasteros Élite", atletas: ["A41","A43"], id_disciplina: "BAS", id_delegacion: "delZAF52" },
  { id_equipo: "EQ28", nombre: "Reyes del Triple", atletas: ["A45","A02","A04"], id_disciplina: "BAS", id_delegacion: "delMEX90" },

  { id_equipo: "EQ29", nombre: "Atletas Sin Fronteras", atletas: ["A06","A08"], id_disciplina: "ATH", id_delegacion: "delCAN13" },
  { id_equipo: "EQ30", nombre: "Corredores del Tiempo", atletas: ["A10","A12","A14"], id_disciplina: "ATH", id_delegacion: "delKOR39" }
]);

// Insercion de los datos a la coleccion "competencia"

db.competencias.insertMany([
  { id_competencia: "COMP01", disciplina_id: "ATH", fecha: new Date("2025-08-01"), participantes: ["EQ01", "EQ02"] },
  { id_competencia: "COMP02", disciplina_id: "ATH", fecha: new Date("2025-08-03"), participantes: ["EQ29", "EQ30"] },
  { id_competencia: "COMP03", disciplina_id: "SWI", fecha: new Date("2025-08-01"), participantes: ["EQ03", "EQ04"] },
  { id_competencia: "COMP04", disciplina_id: "GYM", fecha: new Date("2025-08-02"), participantes: ["EQ05", "EQ06"] },
  { id_competencia: "COMP05", disciplina_id: "BOX", fecha: new Date("2025-08-02"), participantes: ["EQ07", "EQ08"] },
  { id_competencia: "COMP06", disciplina_id: "JUD", fecha: new Date("2025-08-03"), participantes: ["EQ09", "EQ10"] },
  { id_competencia: "COMP07", disciplina_id: "CYC", fecha: new Date("2025-08-04"), participantes: ["EQ11", "EQ12"] },
  { id_competencia: "COMP08", disciplina_id: "ROW", fecha: new Date("2025-08-04"), participantes: ["EQ13", "EQ14"] },
  { id_competencia: "COMP09", disciplina_id: "ARC", fecha: new Date("2025-08-05"), participantes: ["EQ15", "EQ16"] },
  { id_competencia: "COMP10", disciplina_id: "FEN", fecha: new Date("2025-08-05"), participantes: ["EQ17", "EQ18"] },
  { id_competencia: "COMP11", disciplina_id: "TAE", fecha: new Date("2025-08-06"), participantes: ["EQ19", "EQ20"] },
  { id_competencia: "COMP12", disciplina_id: "WEI", fecha: new Date("2025-08-06"), participantes: ["EQ21", "EQ22"] },
  { id_competencia: "COMP13", disciplina_id: "SAI", fecha: new Date("2025-08-07"), participantes: ["EQ23", "EQ24"] },
  { id_competencia: "COMP14", disciplina_id: "SUR", fecha: new Date("2025-08-07"), participantes: ["EQ25", "EQ26"] },
  { id_competencia: "COMP15", disciplina_id: "BAS", fecha: new Date("2025-08-08"), participantes: ["EQ27", "EQ28"] }
]);

// insercion de los datos a la coleccion "resultados"
db.resultados.insertMany([
  { id_resultado: "RES01", id_competencia: "COMP01", id_equipo: "EQ01", resultado: "Ganó", medalla: "Oro" },
  { id_resultado: "RES02", id_competencia: "COMP01", id_equipo: "EQ02", resultado: "Perdió" },

  { id_resultado: "RES03", id_competencia: "COMP02", id_equipo: "EQ29", resultado: "Ganó", medalla: "Oro" },
  { id_resultado: "RES04", id_competencia: "COMP02", id_equipo: "EQ30", resultado: "Perdió" },

  { id_resultado: "RES05", id_competencia: "COMP03", id_equipo: "EQ03", resultado: "Perdió" },
  { id_resultado: "RES06", id_competencia: "COMP03", id_equipo: "EQ04", resultado: "Ganó", medalla: "Oro" },

  { id_resultado: "RES07", id_competencia: "COMP04", id_equipo: "EQ05", resultado: "Perdió" },
  { id_resultado: "RES08", id_competencia: "COMP04", id_equipo: "EQ06", resultado: "Ganó", medalla: "Oro" },

  { id_resultado: "RES09", id_competencia: "COMP05", id_equipo: "EQ07", resultado: "Ganó", medalla: "Oro" },
  { id_resultado: "RES10", id_competencia: "COMP05", id_equipo: "EQ08", resultado: "Perdió" },

  { id_resultado: "RES11", id_competencia: "COMP06", id_equipo: "EQ09", resultado: "Perdió" },
  { id_resultado: "RES12", id_competencia: "COMP06", id_equipo: "EQ10", resultado: "Ganó", medalla: "Oro" },

  { id_resultado: "RES13", id_competencia: "COMP07", id_equipo: "EQ11", resultado: "Ganó", medalla: "Oro" },
  { id_resultado: "RES14", id_competencia: "COMP07", id_equipo: "EQ12", resultado: "Perdió" },

  { id_resultado: "RES15", id_competencia: "COMP08", id_equipo: "EQ13", resultado: "Perdió" },
  { id_resultado: "RES16", id_competencia: "COMP08", id_equipo: "EQ14", resultado: "Ganó", medalla: "Oro" },

  { id_resultado: "RES17", id_competencia: "COMP09", id_equipo: "EQ15", resultado: "Ganó", medalla: "Oro" },
  { id_resultado: "RES18", id_competencia: "COMP09", id_equipo: "EQ16", resultado: "Perdió" },

  { id_resultado: "RES19", id_competencia: "COMP10", id_equipo: "EQ17", resultado: "Perdió" },
  { id_resultado: "RES20", id_competencia: "COMP10", id_equipo: "EQ18", resultado: "Ganó", medalla: "Oro" },

  { id_resultado: "RES21", id_competencia: "COMP11", id_equipo: "EQ19", resultado: "Ganó", medalla: "Oro" },
  { id_resultado: "RES22", id_competencia: "COMP11", id_equipo: "EQ20", resultado: "Perdió" },

  { id_resultado: "RES23", id_competencia: "COMP12", id_equipo: "EQ21", resultado: "Perdió" },
  { id_resultado: "RES24", id_competencia: "COMP12", id_equipo: "EQ22", resultado: "Ganó", medalla: "Oro" },

  { id_resultado: "RES25", id_competencia: "COMP13", id_equipo: "EQ23", resultado: "Ganó", medalla: "Oro" },
  { id_resultado: "RES26", id_competencia: "COMP13", id_equipo: "EQ24", resultado: "Perdió" },

  { id_resultado: "RES27", id_competencia: "COMP14", id_equipo: "EQ25", resultado: "Perdió" },
  { id_resultado: "RES28", id_competencia: "COMP14", id_equipo: "EQ26", resultado: "Ganó", medalla: "Oro" },

  { id_resultado: "RES29", id_competencia: "COMP15", id_equipo: "EQ27", resultado: "Ganó", medalla: "Oro" },
  { id_resultado: "RES30", id_competencia: "COMP15", id_equipo: "EQ28", resultado: "Perdió" }
]);

// Insercion de los datos a la coleccion "historial"

db.historial.insertMany([
  { id_historial: "HIS01", id_competencia: "COMP01", id_equipo: "EQ01", id_delegacion: "delCOL37", id_disciplina: "ATH", resultado: "Ganó", medalla: "Oro" },
  { id_historial: "HIS02", id_competencia: "COMP01", id_equipo: "EQ02", id_delegacion: "delUSA82", id_disciplina: "ATH", resultado: "Perdió" },
  { id_historial: "HIS03", id_competencia: "COMP02", id_equipo: "EQ29", id_delegacion: "delCAN13", id_disciplina: "ATH", resultado: "Ganó", medalla: "Oro" },
  { id_historial: "HIS04", id_competencia: "COMP02", id_equipo: "EQ30", id_delegacion: "delKOR39", id_disciplina: "ATH", resultado: "Perdió" },
  { id_historial: "HIS05", id_competencia: "COMP03", id_equipo: "EQ03", id_delegacion: "delBRA54", id_disciplina: "SWI", resultado: "Perdió" },
  { id_historial: "HIS06", id_competencia: "COMP03", id_equipo: "EQ04", id_delegacion: "delARG19", id_disciplina: "SWI", resultado: "Ganó", medalla: "Oro" },
  { id_historial: "HIS07", id_competencia: "COMP04", id_equipo: "EQ05", id_delegacion: "delESP73", id_disciplina: "GYM", resultado: "Perdió" },
  { id_historial: "HIS08", id_competencia: "COMP04", id_equipo: "EQ06", id_delegacion: "delFRA41", id_disciplina: "GYM", resultado: "Ganó", medalla: "Oro" },
  { id_historial: "HIS09", id_competencia: "COMP05", id_equipo: "EQ07", id_delegacion: "delDEU96", id_disciplina: "BOX", resultado: "Ganó", medalla: "Oro" },
  { id_historial: "HIS10", id_competencia: "COMP05", id_equipo: "EQ08", id_delegacion: "delITA28", id_disciplina: "BOX", resultado: "Perdió" },
  { id_historial: "HIS11", id_competencia: "COMP06", id_equipo: "EQ09", id_delegacion: "delJPN65", id_disciplina: "JUD", resultado: "Perdió" },
  { id_historial: "HIS12", id_competencia: "COMP06", id_equipo: "EQ10", id_delegacion: "delCHN77", id_disciplina: "JUD", resultado: "Ganó", medalla: "Oro" },
  { id_historial: "HIS13", id_competencia: "COMP07", id_equipo: "EQ11", id_delegacion: "delAUS84", id_disciplina: "CYC", resultado: "Ganó", medalla: "Oro" },
  { id_historial: "HIS14", id_competencia: "COMP07", id_equipo: "EQ12", id_delegacion: "delZAF52", id_disciplina: "CYC", resultado: "Perdió" },
  { id_historial: "HIS15", id_competencia: "COMP08", id_equipo: "EQ13", id_delegacion: "delMEX90", id_disciplina: "ROW", resultado: "Perdió" },
  { id_historial: "HIS16", id_competencia: "COMP08", id_equipo: "EQ14", id_delegacion: "delCAN13", id_disciplina: "ROW", resultado: "Ganó", medalla: "Oro" },
  { id_historial: "HIS17", id_competencia: "COMP09", id_equipo: "EQ15", id_delegacion: "delKOR39", id_disciplina: "ARC", resultado: "Ganó", medalla: "Oro" },
  { id_historial: "HIS18", id_competencia: "COMP09", id_equipo: "EQ16", id_delegacion: "delCOL37", id_disciplina: "ARC", resultado: "Perdió" },
  { id_historial: "HIS19", id_competencia: "COMP10", id_equipo: "EQ17", id_delegacion: "delUSA82", id_disciplina: "FEN", resultado: "Perdió" },
  { id_historial: "HIS20", id_competencia: "COMP10", id_equipo: "EQ18", id_delegacion: "delBRA54", id_disciplina: "FEN", resultado: "Ganó", medalla: "Oro" },
  { id_historial: "HIS21", id_competencia: "COMP11", id_equipo: "EQ19", id_delegacion: "delARG19", id_disciplina: "TAE", resultado: "Ganó", medalla: "Oro" },
  { id_historial: "HIS22", id_competencia: "COMP11", id_equipo: "EQ20", id_delegacion: "delESP73", id_disciplina: "TAE", resultado: "Perdió" },
  { id_historial: "HIS23", id_competencia: "COMP12", id_equipo: "EQ21", id_delegacion: "delFRA41", id_disciplina: "WEI", resultado: "Perdió" },
  { id_historial: "HIS24", id_competencia: "COMP12", id_equipo: "EQ22", id_delegacion: "delDEU96", id_disciplina: "WEI", resultado: "Ganó", medalla: "Oro" },
  { id_historial: "HIS25", id_competencia: "COMP13", id_equipo: "EQ23", id_delegacion: "delITA28", id_disciplina: "SAI", resultado: "Ganó", medalla: "Oro" },
  { id_historial: "HIS26", id_competencia: "COMP13", id_equipo: "EQ24", id_delegacion: "delJPN65", id_disciplina: "SAI", resultado: "Perdió" },
  { id_historial: "HIS27", id_competencia: "COMP14", id_equipo: "EQ25", id_delegacion: "delCHN77", id_disciplina: "SUR", resultado: "Perdió" },
  { id_historial: "HIS28", id_competencia: "COMP14", id_equipo: "EQ26", id_delegacion: "delAUS84", id_disciplina: "SUR", resultado: "Ganó", medalla: "Oro" },
  { id_historial: "HIS29", id_competencia: "COMP15", id_equipo: "EQ27", id_delegacion: "delZAF52", id_disciplina: "BAS", resultado: "Ganó", medalla: "Oro" },
  { id_historial: "HIS30", id_competencia: "COMP15", id_equipo: "EQ28", id_delegacion: "delMEX90", id_disciplina: "BAS", resultado: "Perdió" }
]);




