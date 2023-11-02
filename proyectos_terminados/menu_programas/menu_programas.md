# Menu Programas 

> Pequeño script en bash que muestra un menú de opciónes con distintos programas o ejecutables configurados por el usuario 

#### Modo de uso:
> Dentro del script "menu" existe una plantilla por defecto la cual contiene campos a ser rellenados:
> - <nombre_programa> = Aca debemos colocar el nombre de programa a ejecutar (El nombre indicado es el que nos muestra por consola el script una vez ejecutado el programa)
> - <ruta_programa> = Debemos indicar la ruta del archvio que deseamos ejecutar en cuestion

```bash
        #n)  
        #    # Ejecutar Pharo 
        #    bandera=1 
        #    programa= <nombre_programa>
        #    <ruta_programa>  > /dev/null 2>&1 &
        #;;
```