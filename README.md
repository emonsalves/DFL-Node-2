# DFL-Node-2 <br>
<br>
Descripción <br>
<br>
La escuela de música “E-Sueño” está motivando a sus estudiantes de canto a presentarse en vivo y se puso en contacto con el restaurante del sector para utilizar su tarima e iniciar un
calendario de presentaciones. Para conocer y gestionar las canciones que cantarán sus estudiantes, la escuela contrató a un desarrollador freelance para la creación de una
aplicación tipo CRUD. <br>
<br>
En este desafío deberás desarrollar un servidor con Express que utilice el módulo File System para agregar, modificar y eliminar canciones almacenadas en un JSON local llamado repertorio.json.
El servidor deberá disponibilizar las siguientes rutas: <br>
<br>
● POST /canciones : Recibe los datos correspondientes a una canción y la agrega al repertorio. <br>
● GET /canciones : Devuelve un JSON con las canciones registradas en el repertorio. <br>
● PUT /canciones/:id : Recibe los datos de una canción que se desea editar y la actualiza manipulando el JSON local. <br>
● DELETE /canciones/:id : Recibe por queryString el id de una canción y la elimina del repertorio. <br>
<br>
Tienes a disposición un Apoyo Desafío - Mi Repertorio con la aplicación cliente que se muestra en la siguiente imagen, lista para el consumo de estas rutas, por lo que deberás
enfocarte solo en el desarrollo backend. <br>
<br>
Requerimientos <br>
<br>
1. Levantar un servidor local usando Express Js <br>
2. Devolver una página web como respuesta a una consulta GET <br>
3. Ofrecer diferentes rutas con diferentes métodos HTTP que permitan las operaciones CRUD de datos alojados en un archivo JSON local <br>
4. Manipular los parámetros obtenidos en la URL <br>
5. Manipular el payload de una consulta HTTP al servidor <br>
