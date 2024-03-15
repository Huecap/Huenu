import sqlite3
from DB_conection import DBConnection

conexion = DBConnection().dbconnection # Conexión con la base de datos 
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
caracteristicas = "Radio 12 cm"

# Insertando valores en la tabla 
cursor.execute("INSERT INTO insumos (nombre, estado, precio, material, caracteristicas) VALUES (?, ?, ? ,? ,?)", (nombre, estado, precio, material, caracteristicas))
conexion.commit()

# Extrayendo los valores de la tabla (TODOS los valores)
cursor.execute("SELECT * FROM insumos")
resultados = cursor.fetchall()


# Resultados = Lista de tuplas
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