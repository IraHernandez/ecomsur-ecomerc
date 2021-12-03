# Prueba tecnica Front Ecomsur 2021

## Instalar y Correr la aplicación

Instalar :

1. En la carpeta `front` de la aplicacion correr:
   `npm install react-router-dom@5.1.0`,`npm install redux`,`npm install --save styled-components` y `npm install react-redux`.

La aplicación está compuesta de un servidor Express y una instalación básica de Create-React-App (CRA). Todo está configurado para correr con un solo comando

`npm run start`

Para correr el servirdor del backend, primero debes ingresar en la carpeta `banckend` y luego digita el siguiente comando:
`node server.js`

Esto correrá ambas aplicaciones (Express y CRA) al mismo tiempo.

- CRA se encuentra en:
  `http://localhost:3000/`
 y se ve de la siguiente forma:
 ![Running app](/running-app.png)

- El servidor se encuentra en:
  `http://localhost:5000/`

- La lista de productos se encuentra:
  `http://localhost:5000/api/products`

- Puedes encontrar cada producto por su ID:
  `http://localhost:5000/api/products/1`

- Las imágenes se encuentran en:|
  `http://localhost:5000/images/{{nombre-de-la-imagen}}`

#### Descriopciòn Ecommerce:
Es una aplicacciòn web, basada en React, con un poco de inspiraciòn en el diseño de la tienda de apple, tomando en cuenta la filosofía "Mobile-First Responsive Design".Es una tienda virtual Tech, en el cual se puede agregar productos al carrito de compra y de puede eliminar tambien. Cada items del producto tiene su propia informaciòn como su imagen, precio, despcriòn.

