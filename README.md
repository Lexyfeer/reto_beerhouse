# De que va está aplicación
Es un sitio que muestra 2 formularios uno para que se registre un aspirante a adoptar un gato y otro para que registren algún gato para que sea adoptado.
# Instrucciiones para utilizar esta aplicación

1. Copiar link para clonar el repositorio.
2. Abrir la terminal y clonar el repositorio en la carpeta deseada mediante el comando `git clone (link copiado del repositorio)`.
3. Abrir el proyecto en tu editor de código.
4. Mediante la terminal entrar a la carpeta del repositorio que acabas de clonar.
5. Asegurate de estar en la branch main/master y ejecutar el codigo `npm start` ó `yarn start`.
6. Listo se abrirá el proyecto en localhost.

O también puedes ver este proyecto en el siguiente Link desplegado en github pages [https://lexyfeer.github.io/reto_beerhouse/](https://lexyfeer.github.io/reto_beerhouse/).

# Arquitectura del sitio
Este sitio esta desarrollado con React JS, utilizando Hooks para el manejo de estado y fetch para hacer la petición a la API, css y para la parte de responsive se utilizo flexbox.

El sitio tiene una carpeta principal llamada 'src' que contiene las siguientes carpetas:
- 'components' : (tiene el componente de los formularios que se usan dentro de la aplicación).
- 'assets/images' : (contiene nuestro background de la aplicación).



Tenemos un archivo principal que es el de index.js es el que provee nuestro componente App (que contiene toda nuestra aplicación), que a su vez tiene dentro el componente Formularios que renderiza dinamicamente un formulario u otro dependiendo el id del mismo.

  * Formularios: Aquí se realiza la petición GET y POST a la API para mostrar el formulario correspondiente y para enviar la información respectiva de cada uno. 
  


