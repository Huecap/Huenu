import sqlite3

conexion = sqlite3.connect("base_datos.db")
cursor = conexion.cursor()

cursor.execute(''' CREATE TABLE IF NOT EXISTS insumos
               (id INTEGER PRIMARY KEY,
               nombre TEXT,
               estado TEXT,
               precio FLOAT,
               material TEXT,
               caracteristicas TEXT
               )''')

nombre = "Posa vasos"
estado = "Disponible"
precio = 450.00
material = "Madera"
caracteristicas = "Radio 10 cm"
# Insertando valores en la tabla 
cursor.execute("INSERT INTO insumos (nombre, estado, precio, material, caracteristicas) VALUES (?, ?, ? ,? ,?)", (nombre, estado, precio, material, caracteristicas))
conexion.commit()

cursor.execute("SELECT * FROM insumos")
resultados = cursor.fetchall()

for fila in resultados:
    print(fila)


cursor.close()
conexion.close()
"""
        self._codigo = None
        self._nombre = nombre
        self._estado = "Disponible"
        self._precio = precio
        self._material = material
        self._caracteristicas = caracteristicas"""