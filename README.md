# Mapa Vivo Comunitario — prototipo web interactivo

Proyecto académico de innovación social, inspirado en el **Mapa Vivo Comunitario** de Sincelejo, Sucre.

> **Importante:** este software es un **prototipo digital demostrativo**. El producto principal descrito en el proyecto es un mapa físico modular de madera, construido con las comunidades. La versión digital muestra la metodología, pero no demuestra por sí misma que el mapa físico ya esté construido, probado o validado comercialmente.

## Lo que permite hacer

- Visualizar un territorio ilustrado con casas, árboles, vías, arroyo, cancha y parque.
- Seleccionar una ficha de territorio, recursos, actores, fortalezas, problemáticas o propuestas.
- Hacer clic en el mapa para agregar la ficha con título, descripción y autor opcional.
- Seleccionar y editar fichas existentes, o eliminarlas.
- Filtrar categorías, buscar fichas y consultar un panel de resultados.
- Cambiar el nombre de la comunidad.
- Guardar automáticamente en **localStorage** del navegador (sin cuenta ni internet una vez instalada).
- Exportar e importar un respaldo **JSON** y utilizar la función de impresión/PDF del navegador para el resumen.
- Cargar datos de ejemplo o comenzar con un mapa vacío.
- Consultar los tres encuentros de la metodología y el prototipo de madera original.

## Requisitos

- Node.js 20.19+ o 22.12+ y npm.
- Un navegador moderno (Chrome, Edge o Firefox).

## Ejecutarlo en Windows (PowerShell)

Abre una terminal en la carpeta `mapa-vivo-web` y ejecuta:

```powershell
npm install
npm run dev
```

Abre la dirección que muestra Vite, normalmente **http://localhost:5173**.

Para generar la versión de producción:

```powershell
npm run build
npm run preview
```

La carpeta `dist/` contiene los archivos de la web para publicar en un hosting estático. En **Vercel**, importa el repositorio y selecciona Vite (build command `npm run build`, output `dist`).

Si PowerShell impide ejecutar `npm.ps1` por la política de scripts, usa `npm.cmd install` y `npm.cmd run dev`. No es necesario cambiar la política de ejecución.

## Demostración de 3 minutos

1. Presenta el mapa inicial, aclarando que son datos ficticios de demostración.
2. Selecciona **Problemática** en el menú izquierdo, haz clic sobre una calle y agrega `Inundaciones por lluvia`.
3. Selecciona **Fortaleza**, haz clic cerca del parque y agrega `Espacio para encuentros comunitarios`.
4. Selecciona **Propuesta**, haz clic cerca del arroyo y agrega `Jornada de limpieza con la Junta`.
5. Entra a **Resultados** para mostrar cómo las ideas se organizan por tipo.
6. Exporta el JSON y explica que el próximo paso sería probarlo con habitantes reales.

## Qué decir sobre el estado de madurez

El documento de trabajo establece **TRL 3, BRL 2 y CRL 2** en el estado inicial. Un prototipo web funcional añade evidencia de funcionamiento digital en entorno controlado; **no equivale automáticamente a TRL 4 del producto físico**, y tampoco valida BRL o CRL sin cotizaciones, pruebas y entrevistas reales.

## Alcance y privacidad

Esta es una demo de un solo navegador: **no hay base de datos, login, sincronización entre personas ni geolocalización real**. El almacenamiento local puede perderse si borras los datos del navegador; exporta respaldos JSON. Evita recopilar datos personales sensibles durante las pruebas. El mapa ilustrado es conceptual, no es una representación cartográfica de calles reales.

## Estructura

```text
mapa-vivo-web/
├── index.html
├── package.json
├── public/
│   ├── logo.png
│   └── prototipo.png
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
└── README.md
```

## Tecnologías

React + Vite + SVG + CSS. No se usa React Konva: para la versión demostrativa la interacción con fichas se implementa directamente en SVG, reduciendo dependencias.

El diseño y componentes interactivos son propios de este prototipo. Las imágenes de logo y maqueta son las aportadas por el proyecto.

## Subir el proyecto a GitHub usando CMD

Entra en esta carpeta desde CMD y ejecuta (sustituye `TU_USUARIO` y `NOMBRE_REPOSITORIO`):

```cmd
git init
git branch -M main
git add .
git commit -m "feat: prototipo web Mapa Vivo Comunitario"
git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPOSITORIO.git
git push -u origin main
```

**Antes de los comandos:** crea en GitHub un repositorio **vacío** (sin README ni `.gitignore`) con el nombre que prefieras. Si ya existe un repositorio con historial, no repitas `git init` ni sobrescribas su historial; debes integrar el código con cuidado.

**No subas** `node_modules/`, `dist/` ni archivos `.env`: están incluidos en `.gitignore`.

### Activar la publicación en GitHub Pages

1. En tu repositorio abre **Settings → Pages**.
2. En **Build and deployment**, elige **GitHub Actions** como fuente.
3. Abre **Actions**, comprueba el flujo llamado *Publicar en GitHub Pages* y, si hace falta, ejecuta **Run workflow**.
4. Una vez finalizado correctamente, abre el enlace publicado: `https://TU_USUARIO.github.io/NOMBRE_REPOSITORIO/` (en un repositorio de proyecto público típico).

Cada vez que hagas `git push` a `main`, se volverá a construir y publicar el sitio. La ruta base del sitio se configura automáticamente a partir del nombre real del repositorio, sin tener que editar manualmente las imágenes.

### Actualizar el repositorio después

```cmd
git add .
git commit -m "chore: actualiza el prototipo"
git push
```

### Nota de seguridad y funcionamiento

GitHub Pages publica **el frontend**, no una base de datos. La información que agregue cada visitante queda exclusivamente en **su propio navegador** (`localStorage`): los cambios no se comparten entre visitantes ni se sincronizan automáticamente. Esta página es una demostración, no una plataforma comunitaria multiusuario. No coloques secretos en el código frontend ni subas datos privados de personas reales.
