// Consulta de atletas orgullosamente colombianos
db.atleta.find({ nacionalidad: "COL" })

// Equipos que tienen la disciplina de Atletismo
db.equipo.find({ id_disciplina: "ATH" })

// Paises que pertenecen al continente de "America del sur"
db.pais.find({ continente: "America del sur" })

// Consulta de atletas masculinos
db.atleta.find({ genero: "M" })

// Atletas femeninas
db.atleta.find({ genero: "F" })

// Consulta de competencias con fecha "2025-08-04"
db.historial.find({fecha: new Date("2025-08-04")})

// Consulta de equipos que ganaron medalla de oro
db.competencia.find({ medalla: "Oro" })