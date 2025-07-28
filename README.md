

# Expo Navigation App

Este proyecto es parte del curso de **React Native + Expo** de Fernando Herrera.

Es una app de ejemplo creada con Expo, React Native, NativeWind y Expo Router. Permite navegar entre productos y ver detalles individuales, usando rutas dinámicas y fuentes personalizadas.

## Características principales

- Navegación con Expo Router (incluye rutas dinámicas como `/products/[id]`)
- Fuentes personalizadas (Work Sans en varios grosores)
- Estilos con Tailwind CSS y NativeWind
- Tipos de color personalizados en Tailwind (`primary`, `secondary`, `tertiary`)
- Ejemplo de store local de productos

## Estructura del proyecto

```
app/
  _layout.tsx         # Layout principal y carga de fuentes
  index.tsx           # Redirección a /products/index
  (stack)/products/
    index.tsx         # Listado de productos
    [id].tsx          # Detalle de producto
assets/
  fonts/              # Fuentes Work Sans
  images/             # Imágenes y logos
store/
  products.store.ts   # Store local de productos
```

## Instalación y uso

1. Instala dependencias:
   ```sh
   npm install
   ```
2. Inicia el proyecto:
   ```sh
   npx expo start
   ```
3. Escanea el QR con la app Expo Go o ejecuta en un emulador.

## Personalización de estilos
- Los colores y fuentes están configurados en `tailwind.config.js`.
- Puedes usar clases como `text-primary`, `text-secondary`, `font-work-black`, etc.

## Notas
- Si agregas nuevas fuentes, recuerda cargarlas en `_layout.tsx` y declararlas en Tailwind.
- Las rutas deben ser exactas en los componentes de navegación (`/products/index` en vez de `/products` si usas TypeScript estricto).

---

Hecho con ❤️ usando Expo, React Native y NativeWind.
