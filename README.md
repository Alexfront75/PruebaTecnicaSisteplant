# PruebaTecnicaSisteplant
Desarrollo para prueba técnica

El proyecto está divido en tres partes : 

-BBDD en Mongo desde un contenedor de Docker (https://platzi.com/tutoriales/1533-mongodb-basico/4930-instalar-mongo-db-usando-docker/)
-El front end desarrolado con VUE.js alojado en la carpeta 'SistePlant/'
-El back end desarrollado en Node,js es una API alojada en la carpeta 'SistePlantServer/'

Los endpoint tanto de la API como de los test de e2e están harcodeados por lo que se debe mantener las aplicaciones funcionando en los puertos ahora descritos =>
  -Front End : 5173
  -Back End : 3000
  -MongoDb : 27017

 Para la creación de la MongoDb  seguimos los pasos  (https://platzi.com/tutoriales/1533-mongodb-basico/4930-instalar-mongo-db-usando-docker/) y creamos una base de datos nueva llamada 'Tasks' y dentro de ella una coleccion 'Task' donde guardaremos los datos.


 La aplicación SistePlant está formada por dos componentes con variable reactivas que permiten la incorporación de tareas, la edición de su estado y su eliminacíon  mediante una API con sus metódos CRUD desarrollados.  
