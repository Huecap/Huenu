# Ia - Generativa en Front - End

## BEM (Block - Element - Modifier)

Metodología - Convención para nombrar clases en CSS 
- Block: Entidad independiente y significativa por si misma `header` `menu`, `container`
- Element: Parte de un bloque que tiene significado en conjunto de ese bloque `menu_item` , `header_logo`
- Modifier: Una variación o extensión de un bloque `menu--hidden` `menu__item--active`

> Esto permite que al momento de declarar las clases, al ser específicas es menos probables que se superponga una con otra 

**Ejemplo**
```HTML
<div class="card">
    <img src="..." alt="..." class="card__image">
    <h2 class="card__title">Título</h2>
    <p class="card__description">Descripción aquí.</p>
    <button class="card__button card__button--primary">Haz clic aquí</button>
</div>
```
## WAI-ARIA
Web Accessibility Initiative - Accessible Rich Internet Applications
> Accessible Rich Internet Applications

Existen diferentes tipos de atributos ARIA, cada uno con una función específica:

- Roles: Definen el tipo de elemento, como un botón, un menú, un cuadro de diálogo, etc.
- Estados: Describen el estado actual de un elemento, como si está activado, desactivado, expandido o colapsado.
- Propiedades: Definen las características de un elemento, como si tiene un menú desplegable asociado o si es requerido.

## Conceptos Importantes
- Importante la utilización de etiquetas semánticas 
- Utilización de herramientas de accesibilidad 

##  Etiquetas semánticas HTML 
### Etiquetas básicas de HTML 
``` HTML
<header>

<main>

<footer>

<section>
```

## Google Lighthouse 
Herramienta que nos permite observar si nuestra página cumple con ciertos criterios de calidad y nos da un feedback del mismo.
- Rendimineto
- Accesibilidad
- Prácticas recomendadas