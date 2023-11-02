#!/bin/bash

# Programa para abrir otros programas y poder seguir usando la termina
op=1

while test $op != 0
do
    echo -e '\n --- Programas A Ejecutar--- \n'
    echo '1) -----'
    echo '2) -----'
    echo '3) -----'
    echo '4) -----'
    echo '5) -----'
    echo '6) -----'
    echo '0) Salir'
    read -p '¿Qué programa desea ejecutar?: ' op
    programa='Programa'
    bandera=0
    case $op in
        #  ---- Plantilla para agregar nuevas opciones---- 
        #1)  
        #    # Ejecutar Programa 
        #    bandera=1 
        #    programa= <nombre_programa>
        #    <ruta_programa>  > /dev/null 2>&1 &
        #;;

        #  ---- Plantilla para agregar nuevas opciones---- 
        #n)  
        #    # Ejecutar Programa
        #    bandera=1 
        #    programa= <nombre_programa>
        #    <ruta_programa>  > /dev/null 2>&1 &
        #;;

        0) 
            echo '--- Adios, buenas tardes ---'
            ;;
        *) 
            echo -e '\n >>> No existe esa opción <<< '
            ;;
            
    esac

    if [ $op != 0 ] && [ $bandera != 0 ]
    then    
        echo 
        echo
        echo -e '\n --- '$programa' se esta ejecutando ---'
        echo
        echo
        disown 
        bandera=0
    fi
done
