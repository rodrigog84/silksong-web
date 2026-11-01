# silksong-web

Sitio informativo en español sobre **Hollow Knight: Silksong** (fan site, sin afiliación con Team Cherry).

## Stack

- React 18 + Vite 5 + TypeScript
- React Router 6 (rutas del lado del cliente)
- Sin base de datos ni backend: el contenido vive en `src/data/`
- Arte 100 % original en CSS/SVG

## Páginas

| Ruta | Sección |
| --- | --- |
| `/` | Inicio |
| `/historia` | Historia y lore |
| `/personajes` | Personajes y jefes (búsqueda y filtros) |
| `/herramientas` | Herramientas, objetos y crestas (búsqueda y filtros) |
| `/guias` | Guías por zona y progresión |
| `/secretos` | Trucos y secretos |
| `/estrategias` | Estrategias contra jefes |

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run build    # compila a dist/
npm run preview  # sirve el build
```

## Despliegue en Vercel

Importa el repositorio en Vercel; detecta Vite automáticamente (build `npm run build`, salida `dist`).
`vercel.json` reescribe todas las rutas a `index.html` para que funcionen las rutas del cliente.
