# Pasos para crear este proyecto.

## Install astro

```
npm create astro@latest
```



## Add tailwind
[https://docs.astro.build/es/guides/integrations-guide/tailwind/](docs)

```
npx astro add tailwind
```

ó

```
npm install @astrojs/tailwind tailwindcss
```

## ~~Add daisyui~~

Not today



## Backend

**Vercel functions** para crear endpoints y que éstos hagan las llamadas a la base de datos.  De este modo no se exponen las credenciales.
Las credenciales necesarias para ejecutar el proyecto están especificadas en `sample.env`. 

**Render.com** para deployar una imagen de docker de surrealdb.  [+info](https://dsl.yurigo.dev/docker/surrealdb)

Los enpoints creados para esta iteración son:

```
GET /api/comanda - para crear una comanda
GET /api/comanda/last - para consultar la última comanda
GET /api/comanda/all - para consultar todas las comandas
```


## Hosting estático

La web está implementada con Astro y vanilla js (en un futuro con Vue).
