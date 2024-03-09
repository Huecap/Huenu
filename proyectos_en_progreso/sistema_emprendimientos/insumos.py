
from HR_validaciones import validar_entero, validar_flotante

class Insumo:
    """
    Clase que representa los distintos tipos de insumos disponibles
    """
    
    def __init__(self, nombre, precio, material, caracteristicas) -> None:
        self._codigo = None
        self._nombre = nombre
        self._estado = "Disponible"
        self._precio = precio
        self._material = material
        self._caracteristicas = caracteristicas
        
    
    ## Getters ## 
    
    @property
    def codigo(self) -> int:
        """
        :return: Devuelve el codigo del insumo
        :rtype: int
        """
        return self._codigo
        
    @property
    def nombre(self) -> str:
        """
        :return: Devuelve el nombre del producto 
        :rtype: str
        """
        return self._nombre
    
    @property
    def estado(self) -> str:
        """
        :return: Devuelve el estado del insumo
        :rtype: str
        """
        return self._estado
    
    @property
    def precio(self) -> bool:
        """
        :return: Devuelve el precio del insumo
        :rtype: bool
        """
        return self._precio
    
    @property
    def material(self) -> str:
        """
        :return: Devuelve el material 
        :rtype: str
        """
        return self._material
    
    @property
    def caracteristicas(self) -> str:
        """
        :return: Devuelve las caracteristicas del insumo
        :rtype: str
        """
        return self._caracteristicas
    
    ## Setters ## 
    @codigo.setter
    def codigo(self, codigo: int):
        if validar_entero(codigo):
            self._codigo = int(codigo)

    @nombre.setter
    def nombre(self, nombre: str):
        self._nombre = nombre
        
    @precio.setter
    def precio(self, precio : float):
        if validar_flotante(precio):
            self._precio = float(precio)
    
    @material.setter
    def material(self, material : str):
        self._material = str(material)
        
    @caracteristicas.setter
    def caracteristicas(self, caracteristicas : str):
        self._caracteristicas == caracteristicas


    def estado_disponible(self):
        self._estado = "Disponible"
        
    def estado_usado(self):
        self._estado = "Usado"
    
    def __str__(self) -> str:
        m = f"Codigo: {self._codigo} - Nombre: {self._nombre} - Estado: {self._estado}"
        m += f"\nPrecio de compra: ${self._precio} \nCaracteristicas: \n{self._caracteristicas} "
        return m
    
if __name__ == "__main__":
    posa_vaso = Insumo("Posa Vasos", 400, "Madera", "- Radio: 10 cm \n- Grosor: 5 mm")
    print(posa_vaso)

