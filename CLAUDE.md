# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Portafolio personal de Alexis Lerch (desarrollador FullStack, San Martín de los Andes, Neuquén). Sitio en español, hecho con Next.js 16 (App Router, Turbopack), React 19 y Tailwind CSS 3. El código es JavaScript (`.jsx`), no TypeScript.

## Comandos

- `npm run dev` — servidor de desarrollo en http://localhost:3000
- `npm run build` / `npm start` — build de producción y servidor. Es la mejor verificación: no hay tests y el build detecta errores de compilación en las 5 rutas.
- **`npm run lint` no funciona**: usa `next lint`, que se eliminó en Next 16. Además `eslint.config.mjs` solo cubre `*.{js,mjs,cjs,ts}`, no `.jsx`. No hay tests.
- Si `next dev` dice que el puerto 3000 está en uso o que no puede tomar `.next/dev/lock`, hay otro `next dev` de este proyecto corriendo: cerralo antes de arrancar uno nuevo. No corras `next build` con el servidor de desarrollo abierto (pisan la carpeta `.next`).

## Arquitectura

**Todo el contenido vive en `lib/data.jsx`** (perfil y datos de contacto, links de navegación, proyectos, habilidades, educación, experiencia, "sobre mí", servicios, pasos del proceso). Las páginas y componentes solo lo renderizan, así que casi todo cambio de texto o de proyectos se hace ahí. Contiene JSX (íconos), por eso es `.jsx`.

- **Proyectos** (`projects`): se escriben en el array `projectList` y se exportan como `projects`, donde `num` (01, 02…) se calcula solo según el orden. El orden del array es el orden en pantalla; no hace falta renumerar. `featured: true` hace que aparezcan en "Proyectos destacados" del inicio (hoy son 3). Los filtros de `/work` salen de `projectCategories`: la `category` de cada proyecto debe coincidir con una de esas, o no se podrá filtrar. Si `live` está vacío, la tarjeta no muestra el botón "Ver sitio".
- **Imágenes de proyectos**: `public/assets1/work/`. Las miniaturas se muestran con `object-cover object-top` en proporción 16:10.
- **Rutas** (`app/`): `/` (hero, destacados, stack, proceso, cierre), `/work` (grilla con filtros, client component), `/resume` (pestañas: experiencia, educación, habilidades, sobre mí), `/services`, `/contact`. `app/template.jsx` hace el fade entre páginas.
- **Formulario de contacto** (`components/ContactForm.jsx`): no hay backend; al enviar abre el cliente de correo con `mailto:`. Lee `?servicio=` de la URL (los links de `/services` lo envían), por eso `/contact` envuelve el formulario en `<Suspense>`.
- **Animaciones**: `components/Reveal.jsx` anima al cargar por defecto; con la prop `inView` espera a que el elemento entre en pantalla. Usá `inView` solo para secciones que están abajo del pliegue: lo de arriba no debe depender del scroll.

## Estilos

- Tokens en `tailwind.config.mjs`: `primary` (#1c1c22, fondo), `surface`/`surface-2` (tarjetas), `accent` (blanco suave #e4e4e9). El acento es **un solo valor**: cambiarlo ahí cambia botones, menú activo, íconos y bordes de todo el sitio. Esa paleta oscura y monocromática es intencional (se pidió un color tranquilo, no el verde neón original); el verde `#00ff99` ya no se usa.
- Fuentes: Geist (`font-sans`, texto) y JetBrains Mono (`font-mono`, títulos y etiquetas), cargadas con `next/font` en `app/layout.jsx` como variables CSS.
- Clases reutilizables (`eyebrow`, `card`, `card-hover`, `gradient-text`, `text-outline`, `bg-grid`) están en `app/globals.css`. El fondo con grilla y resplandor está en `app/layout.jsx`.
- `components/ui/` son primitivas estilo shadcn sobre Radix (button, input, textarea, tabs, sheet). `components.json` es de shadcn pero los componentes están personalizados a mano.

## Cosas a tener en cuenta

- `next.config.mjs` habilita `images.qualities: [75, 90]`. Next 16 ignora cualquier `quality` que no esté en esa lista (la foto de perfil usa 90). La optimización de imágenes está activa a propósito: antes se había desactivado y la foto se veía pixelada.
- La foto de perfil es `public/assets1/alexisperfil.jpg` (horizontal, viene de WhatsApp); `components/Photo.jsx` la recorta con `object-cover object-[53%_30%]`. El ícono de la pestaña es `app/icon.svg` (monograma "A.").
- El e-commerce MyEc (`my-e-ccomerce-alexis-lerch.vercel.app`) está caído (error 500 del servidor); por eso su proyecto no tiene `live`. Si se arregla, agregar el link en `lib/data.jsx`.
- Git: la rama es `main` y hay un único remoto (`origin`) en GitHub. Antes de trabajar conviene hacer `git fetch`: ya hubo trabajo hecho directamente en el remoto que no estaba en la copia local.
