def indice_caracter(alfabeto, lista):
    string = ""
    for n in lista:
        string += alfabeto[n]
    return string

def des_encriptar(alfabeto, texto):
    posiciones = []
    for caracter in texto:
        if caracter != "\n":
            posicion = alfabeto.index(caracter)
            posiciones.append(posicion)
    textos = []
    for n in range(0,len(alfabeto)):
        lista_suma = map(lambda x: (x+n)%len(alfabeto),posiciones)
        nuevo = indice_caracter(alfabeto, lista_suma)
        textos.append(nuevo)
    return textos
        
def leer_archivo(archivo):
    with open(archivo ,'r') as file:
        texto = file.read()
    return texto    


def menu():
    print(" --- Descifrado cesar ---")
    archivo = input('Ingrese el archivo que desea descifrar: ')
    texto = leer_archivo(archivo)
    alfabeto = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'á','é', 'í', 'ó', 'ú', ',', '.', ' ']
    
    print("-------------------")
    print("Texto utilizado:")
    print("-------------------")
    print(texto)
    print("-------------------")
    print("Alfabeto utilizado: ")
    print(alfabeto)
  # alfabeto =  alfabeto = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    textos = des_encriptar(alfabeto, texto)
    cont = 1
    for n in textos: 
        print("-------------------")
        print("Texto:", str(cont), n)
        cont+=1
    print("-------------------")
    
if __name__ == "__main__":
    menu()