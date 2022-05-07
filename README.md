# csv-manager-api
API para el cargado de archivos csv.

Está hecha en Nodejs y MongoDB como base de datos (Debe asegurarse de tenerlos instalados).
En el caso de MongoDB deben asegurarse de tenerlo en START.

## Configuración inicial

### Configurar el .env

Estas son las variables de entorno que se van a utilizar en el proyecto. Para configurar solo es poner estas variables en un archivo que se llame ``.env`` en la raíz del proyecto:

``SECRET_KEY = "PRUEBA_SECRET"`` (Es la clave que utiliza JWT para configurar los token)

``EXPIRES_TIME = 86400`` (El tiempo de expiración del token en segundos)

``PORT = 7000`` (El puerto por el que se va a ejecutar el servidor)

``CONECTION_URL = "mongodb://localhost:27017/csvmanager"`` (La url de conección a MongoDB)


### Listo para correr el proyecto:

Una vez asegurarse de tener Nodejs se procede a poner los siguientes comando en la terminal situado en la raiz del proyecto:

``npm install`` (Se instalarian todos los paquetes necesarios)

``npm start`` (Iniciaría el proyecto)

## Fin

### Si hizo todo de la manera correcta, le debe salir esto en la terminal:


Init Router

Server listing on port 7000

DB is connected

The initial configuration is done



