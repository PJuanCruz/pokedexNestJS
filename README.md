<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Instalar dependencias
```
npm install
```
3. Instalar Nest CLI
```
npm i -g @nestjs/cli
```

4. Levantar la base de datos
```
docker-compose up -d
```

5. Configurar el archivo ```.env.example``` con las variables correspondientes y renombar la copia a ```
.env```

7. Ejecutar la aplicación en desarrollo:
```
npm run start:dev
```

8. Reconstruir la base de datos con la semilla
```
[GET] http://localhost:3000/api/v1/seed
```

## Stack usado
* Docker
* MongoDB
* Nest