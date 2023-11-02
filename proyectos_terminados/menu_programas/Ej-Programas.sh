#!/bin/bash

# Programa para abrir otros programas y poder seguir usando la termina
op=1

while test $op != 0
do
    echo -e '\n --- Programas A Ejecutar--- \n'
    echo '1) Obsidian'
    echo '2) Visual Studio'
    echo '3) Brave'
    echo '4) Pharo Launcher'
    echo '5) -----'
    echo '6) -----'
    echo '0) Salir'
    read -p '¿Qué programa desea ejecutar?: ' op
    programa='Programa'
    bandera=0
    case $op in
        1)
            bandera=1
            programa='Obsidian'
            # Ejecutar Obsidian
           ./Programas/Obsidian-1.4.13.AppImage > /dev/null 2>&1 &
            ;;
        2) 
            # Ejecutar Visual 
            bandera=1
            programa='Visual Studio Code'
            /usr/share/code/bin/code > /dev/null 2>&1 &
            ;;
        3) 
            # Ejecutar Brave 
            bandera=1
            programa='Brave'
            /opt/brave.com/brave/brave > /dev/null 2>&1 &
            ;;
        4) 
            # Ejecutar Pharo 
            bandera=!
            programa='Pharo Launcher'
            ~/Programas/pharolauncher/pharo-launcher  > /dev/null 2>&1 &
            ;;
        
        #  ---- Plantilla para agregar nuevas opciones---- 
        #n)  
        #    # Ejecutar Pharo 
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
