![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?logo=html5&logoColor=white&style=for-the-badge)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E&style=for-the-badge)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?logo=bootstrap&logoColor=white&style=for-the-badge)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB&style=for-the-badge)
![NPM ](https://img.shields.io/badge/NPM-%23000000.svg?logo=npm&logoColor=white&style=for-the-badge)
![Node.js ](https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white&style=for-the-badge)
![React](https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB&style=for-the-badge)

# DFL-Node-2
## Descripción
La escuela de música "E-Sueño" está motivando a sus estudiantes de canto a presentarse en vivo y se puso en contacto con el restaurante del sector para utilizar su tarima e iniciar un calendario de presentaciones. Para conocer y gestionar las canciones que cantarán sus estudiantes, la escuela contrató a un desarrollador freelance para la creación de una aplicación tipo CRUD.

En este desafío deberás desarrollar un servidor con Express que utilice el módulo File System para agregar, modificar y eliminar canciones almacenadas en un JSON local llamado repertorio.json.

El servidor deberá disponibilizar las siguientes rutas:

POST /canciones: Recibe los datos correspondientes a una canción y la agrega al repertorio.
GET /canciones: Devuelve un JSON con las canciones registradas en el repertorio.
PUT /canciones/:id: Recibe los datos de una canción que se desea editar y la actualiza manipulando el JSON local.
DELETE /canciones/:id: Recibe por queryString el id de una canción y la elimina del repertorio.

Tienes a disposición un Apoyo Desafío - Mi Repertorio con la aplicación cliente que se muestra en la siguiente imagen, lista para el consumo de estas rutas, por lo que deberás enfocarte solo en el desarrollo backend.

## Requerimientos
- Levantar un servidor local usando Express Js
- Devolver una página web como respuesta a una consulta GET
- Ofrecer diferentes rutas con diferentes métodos HTTP que permitan las operaciones CRUD de datos alojados en un archivo JSON local
- Manipular los parámetros obtenidos en la URL
- Manipular el payload de una consulta HTTP al servidor

## Instalación

```$npm install
$npm install
```

## Levantar Server

```$npm run dev
$npm run dev
```

## Sitio Web Server
```
http://localhost:3000/
```
