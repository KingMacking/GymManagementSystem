# [_**SISTEMA DE ADMINISTRACION DE GIMNASIO**_](https://gym-system-management.netlify.app/main "Live app")

<p align='center'>
    🏋🏻‍♀️¡Visualiza la app haciendo click en la imagen!🏋🏻‍♀️
</p>
<p align='center'>
    <a href="https://kingdom-store.netlify.app/"><img height="80"src="https://github.com/KingMacking/GymManagementSystem/blob/public-branch/src/assets/logo-default.svg"></a>
</p>

## Web app para administación de gimnasios

La app esta hecha en base a que cualquier gimnasio pueda utilizarla de manera simple y practica, ofreciendo una oportunidad de crecimiento.

- Administración de clientes 🙋🏻‍♂️
- Registro de pagos 💸
- Manejo de planes de clientes 📕
- Control de las asistencias del dia 📗

## Features

- **Engagement:** Existen distintos llamados a la acción para que un cliente nuevo se contacte en inicie su entrenamiento en el gimnasio.
- **Dashboard:** Panel de control para la administración completamente funcional, el cual permite agergar clientes, eliminarlos, registrar pagos, controlar las asistencias del dia, controlas los planes de los clientes y ver deudores.

## Probar la app

Para poder probar al 100% la aplicación, accediendo al panel de administración, se debe pasar por una autenticación la cual es manejada por firebase, asi como el resto de datos.
Para poder loguearse como administrador se deben utilizar los siguentes datos:
- Email: admin@admin.com
- Password: admin1234

A su vez, como medida extra de seguridad la aplicación posee una comprobación de roles del usuario que inicia sesión.
Es decir, si nos logueamos desde un usuario que no posee el rol de administrador, la app nos mostrara un error.
Para testear esto se pueden utilizar los siguentes datos:
- Email: user@user.com
- Password: user1234

## Tecnologias Utilizadas
### _Lenguajes_
<p align='center'>
    <img height="30"src="https://github.com/MikeCodesDotNET/ColoredBadges/blob/master/svg/dev/languages/html.svg">
    <img height="30"src="https://github.com/MikeCodesDotNET/ColoredBadges/blob/master/svg/dev/languages/css3.svg">
    <img height="30"src="https://github.com/MikeCodesDotNET/ColoredBadges/blob/master/svg/dev/languages/js.svg">
    <img height="30"src="https://github.com/MikeCodesDotNET/ColoredBadges/blob/master/svg/dev/languages/sass.svg">
</p>

### _Frameworks_
<p align='center'>
    <img height="30"src="https://github.com/MikeCodesDotNET/ColoredBadges/blob/master/svg/dev/frameworks/react.svg">
    <img height="30"src="https://github.com/MikeCodesDotNET/ColoredBadges/blob/master/svg/dev/frameworks/bootstrap.svg">
</p>

### _Librerias_
- [UI Balls - Loaders] - Distintos loaders utiles a la hora de mostrar una carga.
- [yup] - Validador de datos en tiempo real, util para validar datos de formularios.
- [react-hook-form] - Creador de formularios faciles de validar y amigables con la performance de la app.
- [react-toastify] - Notificaciones emergentes, utiles a la hora de mostrar al usuario la ejecucion de distintas acciones.
- [react-router-dom] - Creacion de rutas dentro de una misma app, util para una navegacion dentro del sitio sin necesidad de recargar el mismo.


## Instalación
1. Clonar el repositorio
```sh
git clone https://github.com/KingMacking/GymManagementSystem
```
2. Instalar las dependencias desde NPM
```sh
npm i
```
3. Montar el proyecto en local
```sh
npm run dev
```
## Preview

![Site_Preview](https://imgur.com/myBoqQi.png "Site preview")
![Site_Preview](https://imgur.com/Aj4YKYE.png "Site preview")
![Site_Preview](https://imgur.com/UhkfGOf.png "Site preview")
![Site_Preview](https://imgur.com/sWhY2Da.png "Site preview")
![Site_Preview](https://imgur.com/MzM3xYR.png "Site preview")

## Licencia
Distribuido bajo la licencia MIT.

   [UI Balls - Loaders]: <https://uiball.com/loaders/>
   [yup]: <https://github.com/jquense/yup>
   [react-hook-form]: <https://react-hook-form.com/>
   [react-toastify]: <https://fkhadra.github.io/react-toastify/introduction>
   [react-router-dom]: <https://reactrouter.com/en/main>
   
