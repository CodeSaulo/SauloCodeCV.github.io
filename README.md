# Saúl Juárez · QA Engineer

Sitio personal bilingüe (ES/EN) con modo claro/oscuro. Está hecho con HTML, CSS y JavaScript puros, sin dependencias ni proceso de build, y se publica en GitHub Pages.

## Estructura

```
index.html          → contenido en español (edítalo aquí)
js/main.js          → CONFIG (links) + traducciones al inglés
css/styles.css      → estilos
assets/             → CV en PDF y favicon
```

## Publicarlo en GitHub Pages (≈10 minutos)

1. **Crea el repositorio** en GitHub con el nombre exacto `TU-USUARIO.github.io` (por ejemplo, si tu usuario es `saujuarez`, el repo se llama `saujuarez.github.io`). Déjalo como **Public**.
2. **Sube los archivos**: en el repo, haz clic en *Add file → Upload files* y arrastra **todo el contenido** de esta carpeta (no la carpeta en sí, sino lo que tiene dentro: `index.html`, `css`, `js`, `assets`, `.nojekyll`, `README.md`). Luego haz clic en *Commit changes*.
   - Por consola:
     ```bash
     git init
     git add .
     git commit -m "Primer versión del sitio personal"
     git branch -M main
     git remote add origin https://github.com/TU-USUARIO/TU-USUARIO.github.io.git
     git push -u origin main
     ```
3. **Activa Pages**: ve a *Settings → Pages → Build and deployment*, elige *Source: Deploy from a branch*, *Branch: `main`* y la carpeta `/ (root)`, y guarda.
4. Espera 1 o 2 minutos y abre `https://TU-USUARIO.github.io`.

## Personaliza tus links

Abre `js/main.js` y llena el bloque `CONFIG`:

```js
linkedin: "https://www.linkedin.com/in/tu-perfil",
github:   "https://github.com/tu-usuario",
repos: {
  web: "https://github.com/tu-usuario/playwright-bdd-framework",
  api: "https://github.com/tu-usuario/api-testing-postman"
},
cv: { en: "assets/CV_Saul_Juarez_QA_Engineer_EN.pdf" } // opcional
```

Si un link queda vacío, el botón correspondiente se oculta solo, así que la página nunca muestra enlaces rotos.

## Editar textos

- **Español:** directamente en `index.html`.
- **Inglés:** en el objeto `EN` de `js/main.js`. Cada texto usa la misma clave `data-i18n` que en el HTML.

## Dominio propio (opcional, más adelante)

Si compras un dominio (ej. `saujuarez.dev`), ve a *Settings → Pages → Custom domain*, escríbelo y configura los registros DNS que te indique GitHub. Después activa *Enforce HTTPS*.
