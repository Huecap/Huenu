"""
    Modulo que contiene codigo para la creación de las tablas:
    - Insumo
"""

from sqlite3 import Error
from DB_conection import DBConnection


def create_tables(verbose=False):
    connection = DBConnection().dbconnection
    cursor = connection.cursor()
    state = ''
    
    
    try:
        cursor.execute("""
                    CREATE TABLE IF NOT EXISTS insumos
               (id INTEGER PRIMARY KEY,
               nombre TEXT,
               estado TEXT,
               precio FLOAT,
               material TEXT,
               caracteristicas TEXT)
                       """)
        state = " --- Insumos table has been created succesfully ---"
    except Error as error:
        state = f"Error {error} - The table was not created"
    
    cursor.close()
    connection.commit()
    
    # Utilizamos el Verbose para poder tener un control de lo que mostramos o no por pantalla
    if verbose:
        print(state)

if __name__ == "__main__":
    state = create_tables(verbose=True)
    
    nombre = "Posa vasos"
    estado = "Disponible"
    precio = 450.00
    material = "Madera"
    caracteristicas = "Radio 12 cm"

    conexion = DBConnection().dbconnection
    cursor = conexion.cursor()
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