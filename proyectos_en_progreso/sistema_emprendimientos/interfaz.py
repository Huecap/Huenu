from insumos import Insumo

def main():
    op = 1
    menu = " --- Menu de opciones ---"
    while op != "0":
        print(menu)
        op = input('Ingrese la opción que desea: ')
        
    print("--- Adios ---")

if __name__ == "__main__":
    main()