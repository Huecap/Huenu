"""
Concexion con la base de datos
"""

import sqlite3

class DBConnection:   
    """
    SINGELTON
    - Contiene la conexión a la base de datos
    """
    # Atributos de clase 
    _instance = None
    # Atributo que contiene la conexión a la base de datos
    dbconnection = None
    
    def __new__(cls):
        if not cls._instance: # Es decir no hay ninguna conexión creada
            # Crea una instancia de la clase y la guarda dentro de la variable instancia
            cls._instance = super(DBConnection, cls).__new__(cls)
            # Crea la conexión y la almacena en dbconnection
            cls.dbconnection = sqlite3.connect("base_datos.db")
        
        return cls._instance            
            
"""

Al momento de utilizar la conexión a la base de datos, como no podemos cerrarla, podemos utilizar

with DBConnection() as connection:
    # Use the connection object here
    # ...        

Esto cerrara la conexión cunado salga del bloque with 

"""