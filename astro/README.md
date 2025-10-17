
# Mi sitio elegante:

Este proyecto consiste en prácticar control de versiones a través de Github utilizando ramas y colaborando con los compañeros a través de Pull Request.

## Enlace a layout elegido: 

Enlace al layout elegido: https://www.elegantthemes.com/layouts/simple/simple-home-page/live-demo


## Captura de pantalla: 

! [Captura de pantalla del proyecto] (img/Captura.JPG)

## Ramas utilizadas: 

Se ha trabajado principalmente en tres ramas:

main (principal): Se utilizo al principio del proyecto para trabajar en la organización del directorio.

maquetar: se utilizó para realizar los cambios relacionados con el documento JS hasta que se utilizo merge y se fusionó con main. Finalmente se eliminó.

modificar: resto de modificaciones del proyecto, principalmente HTML y CSS. 

## Fork a un compañero: 

Se realizo un Pull Request al compañero Jorge añadiendo comentarios identificativos en el HTML. 


! [Captura del Pull Request] (img/pull.jpg)

## Enlace a la publicación: 

https://lyuva20.github.io/mi_sitio_elegante/


# Mi sitio elegante - rama Astro. 


Para llevar a cabo este proyecto se ha creado una nueva rama llamada "astro" y se ha mantenido la rama "main" como principal y renombrada como "main-legacy".

En esta nueva rama se ha inicializado un proyecto astro con los siguientes elementos: 

## Layout principal: 

En este archivo se define la estructura principal del sitio web incluyendo componentes globales y aplicando los estilos del proyecto. También recibe astro.props como datos dinámicos para personalizar el contenido de cada página. 

## Componentes con props:

Entre los componentes que conforman las partes reutilizables de la web, hay varios en los que se han utilizado props: 

### Banner.astro: 

Muestra un bloque al final con un título, un parrado y un botón para las páginas home y shop. 

### Header.astro:

Se ha utilizado para todas las páginas menos home, por lo que se ha tenido que incluir con un condicional para que detecte que se han introducido los props para que se utilice en la página. 

### Head.astro: 

Define dinamicamente el contenido de title y description asegurando el SEO básico. 

## Imagenes y enlaces: 

Se ha habilitado la precarga a nivel de enlace en el componente nav. Además, se ha utilizado la etiqueta <Image> y loading="lazy" para el iframe.

## Transiciones: 

El proyecto utiliza transiciones de página con astro:transitions lo que permite cambiar entre rutas sin recargar completamente el sitio. 

## Enlace a la publicación (Neocities):

 https://lyuva20.neocities.org/blog/

