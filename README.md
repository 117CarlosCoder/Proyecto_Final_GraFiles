# Proyecto_Final_GraFiles

# Instalación

## Instalación con Docker

1. **Primer Paso: Instalar Docker**

   Primero, instala Docker desde la página oficial: [https://www.docker.com/](https://www.docker.com/)

2. **Segundo Paso: Clonar el repositorio**

   Clona el siguiente repositorio: 

   ```bash
   git clone https://github.com/117CarlosCoder/Proyecto_Final_GraFiles

3. **Tercer Paso: Clonar repositorios adicionales**
Al clonar el repositorio anterior, ingresa dentro de la carpeta principal `/Proyecto_Final_GraFiles`. Estando dentro de esta carpeta, clona los dos repositorios siguientes:

	```bash
	git clone https://github.com/117CarlosCoder/Frontend_Vue_GraFiles
	git clone https://github.com/117CarlosCoder/Backend_Spring_GraFiles
	```

	La estructura de carpetas debe ser la siguiente:
	```bash
	.
	├── Backend
	├── Backend_Spring_GraFiles
	├── Documentos
	├── Frontend
	└── Frontend_Vue_GraFiles
	```
4. **Cuarto Paso: Reemplazar carpetas**
    
    Reemplaza el contenido de la carpeta `Backend` con el de `Backend_Spring_GraFiles`, y el de la carpeta `Frontend` con `Frontend_Vue_GraFiles`.
5. **Quinto Paso: Ejecutar Docker Compose**
    
    Abre una terminal y ejecuta el siguiente comando:
    ```bash
    docker compose up -d
    ```
	Esto creará un compose en Docker con el nombre `proyecto_final_grafiles`, el cual se ejecutará con el mismo comando. Si no hay ningún conflicto con la creación y ejecución del compose, podrás acceder a `localhost` en el puerto 8081.

- **Deberías ver lo siguiente:**


6. **Sexto Paso: Cargar información en la base de datos**
Para poder iniciar sesión, necesitas cargar la información en la base de datos usando MongoDB. Ejecuta `mongosh` y conéctate usando este comando:
	 ```bash
    mongosh --port 27018
    ```
    Después, ejecuta el siguiente comando para cargar la base de datos con 3 usuarios para usar la aplicación:
	 ```bash
	load("./Documentos/Script.js");
    ```
    -   El script se encuentra en la carpeta `Documentos` por si necesitas modificar o agregar datos.
    
7. **Séptimo Paso: Iniciar sesión**
    
    Para iniciar sesión en la aplicación, usa los siguientes usuarios y contraseñas:

	1. Usuario: carlos117, Contraseña: 1234
	2. Usuario: daniel, Contraseña: 1234
	3. Usuario: anyi, Contraseña: 1234
	
## Instalación sin Docker

1.  **Primer Paso: Clonar los repositorios**
    
    Clona los siguientes repositorios en la misma carpeta:
    ```bash
    git clone https://github.com/117CarlosCoder/Frontend_Vue_GraFiles
	git clone https://github.com/117CarlosCoder/Backend_Spring_GraFiles

    ```
2. **Segundo Paso: Instalar dependencias del frontend**
Asegúrate de tener instalado `npm`. Dentro del proyecto del frontend Vue, ejecuta el siguiente comando:

	```bash
	npm install

    ```
    Cuando termine, ejecuta:
	```bash
	npm run dev

    ```
-  Esto iniciará la aplicación en `localhost` en el puerto 3000.
    
3.  **Tercer Paso: Iniciar el backend**
    
    Usa un IDE compatible con Spring. Si utilizas IntelliJ IDEA, actualiza la versión de Java para este proyecto a la versión 21. IntelliJ automáticamente hará los cambios, y solo necesitarás ejecutar el `main` para iniciar la API en el puerto 8080.

