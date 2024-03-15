
from sqlite3 import Error
from DB_conection import DBConnection

class TableInsumos():
    """
    Clase que presenta los metodos propios para interactuar
    con la tabla INSUMOS
    """
    
    connection = DBConnection().dbconnection
    
    
    @staticmethod
    def show_table(*fields : tuple):
        
        selections = ""
        result = None 
        
        # Validar que los fields ingresados sean validos
        
        """
        if not TablaInsumos.validate_fields(fields):
            result = False
        """
        # else: 
        if len(fields) == 0:
            selections = "*" # Es decir devuelve TODOS  campos