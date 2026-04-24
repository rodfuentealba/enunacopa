# 🍷 En Una Copa
## Private Wine Tasting Experience

> Portfolio digital multilenguaje para **Camilo Chávez**, Sommelier Internacional certificado WSET 3.
> Diseñado y desarrollado por [Rodolfo Fuentealba](https://rodfuentealba.com).

Una experiencia web que reemplaza el PDF estático por un portfolio digital inmersivo — diferencial real dentro del ecosistema sommelier en Chile y Latinoamérica.

El concepto **"En Una Copa"** es geográficamente escalable: _Chile en una Copa_, _El Norte en una Copa_, _Italia en una Copa_ — el mismo sitio, distintos territorios.

---

## Stack

| Tecnología | Rol |
|---|---|
| [Astro 6](https://astro.build) | Framework principal + routing i18n nativo |
| [React 19](https://react.dev) | Componentes interactivos (islands) |
| [Tailwind CSS 4](https://tailwindcss.com) | Sistema visual |
| [GSAP 3](https://gsap.com) | Animaciones y transiciones |
| [TypeScript](https://www.typescriptlang.org) | Tipado estático |

**Tipografías:** Allison · Alexandria · Faustina — Google Fonts

---

## Estructura prevista

```
src/
├── components/
│   ├── layout/        # Navbar, Footer
│   └── sections/      # Hero, Project, Sommelier, Services...
├── i18n/
│   ├── es.json        # Español (idioma base)
│   ├── en.json        # English
│   └── pt.json        # Português
├── layouts/
│   └── Layout.astro   # Layout base con dark mode y meta tags
├── pages/
│   └── index.astro    # Entrada → /es por defecto
└── styles/
    └── global.css     # Design tokens y variables CSS
```

---

## Multilenguaje

El sitio soporta tres idiomas vía i18n nativo de Astro 6.
El contenido vive en `src/i18n/{lang}.json` — sin dependencias externas.

| Idioma | Ruta | Estado |
|---|---|---|
| Español | `/es` | 🟡 En desarrollo |
| English | `/en` | ⚪ Pendiente |
| Português | `/pt` | ⚪ Pendiente |

---

## Secciones

| # | Sección | Descripción |
|---|---|---|
| — | **Loader** | Animación de entrada + transición GSAP hacia Hero |
| 1 | **Hero** | Tagline + fondo inmersivo |
| 2 | **Project** | Concepto y zona geográfica |
| 3 | **Sommelier** | Biografía y certificaciones |
| 4 | **Jobs** | Marcas — "Confiaron en mí" |
| 5 | **Services** | Tiers de experiencia con precios |
| 6 | **Partners** | Agencias, Hoteles, B2B |
| 7 | **Colab** | CTA de colaboración |
| 8 | **Contact** | Formulario + RRSS |

---

## Desarrollo local

```bash
git clone https://github.com/rodfuentealba/enunacopa.git
cd enunacopa
npm install
npm run dev
# → http://localhost:4321
```

**Node requerido:** `>=22.12.0`

```bash
npm run build    # Build de producción → ./dist/
npm run preview  # Preview del build local
```

---

## Roadmap

### `main` — Base ✅
- [x] Astro 6 + React + Tailwind + GSAP instalados
- [x] i18n configurado (es / en / pt)
- [x] README

### `feat/hero` — En progreso
- [ ] Layout base + design tokens
- [ ] Navbar con scroll spy, dark mode y selector de idioma
- [ ] Hero con tipografía y fondo

### Futuras ramas
- `feat/sections` — Project, Sommelier, Jobs, Services, Partners
- `feat/contact` — Formulario de contacto
- `feat/loader` — Loader animado con transición GSAP (último paso)
- `feat/i18n` — Carpetas `/en` y `/pt` con traducciones

---

## Autor

**Rodolfo Fuentealba** — Diseño y desarrollo web
[rodfuentealba.com](https://rodfuentealba.com) · [GitHub](https://github.com/rodfuentealba)

---

## Cliente

**Camilo Chávez** — Sommelier Internacional · WSET 3
[LinkedIn](https://www.linkedin.com/in/camilo-ch%C3%A1vez-ram%C3%ADrez-2b060a94/) · Instagram: [@camilocram](https://instagram.com/camilocram)

---

© 2026 Rodolfo Fuentealba para Camilo Chávez. Todos los derechos reservados.
