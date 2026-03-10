# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev       # Start dev server at localhost:3000

# Build (requires legacy OpenSSL due to webpack4)
npm run build     # NODE_OPTIONS=--openssl-legacy-provider next build

# Lint (auto-fixes)
npm run lint      # eslint . --fix
```

There are no tests configured in this project.

## Known Issues & Fixes Applied

### Bugs corregidos
- `Auth.js`: doble barra en import `@firebase//mapUserData` → `@firebase/mapUserData`
- `mapUserData.js`: usaba `user.xa` (propiedad interna no documentada) → ahora usa `user.getIdToken()` async; también `photoUrl` → `photoURL`
- `useUser.js` y `Auth.js`: actualizados para `await` el `mapUserData` async
- `userCookies.js`: `cookies.set('auth', user)` no serializa objetos → `JSON.stringify(user)`
- `Product.js`: variable CSS `--color-valery` no definida (ahora definida en style.css); `text-decoraton` → `text-decoration`
- `disclaimer.js`: `text-decoraton` → `text-decoration`; textos corregidos ("uan forma" → "una forma", "interesé" → "interesa")
- `Dashboard.js`: typo `'on clomplete'` → `'on complete'`
- `api/products/[id].js`: faltaba check `doc.exists` antes de `doc.data()`
- `_document.js`: `lang="en"` → `lang="es"`

### Bugs pendientes (requieren refactor mayor)
- `db.js`: `getAllProductsRealTime` está rota — `onSnapshot` no es async, retorna unsubscribe en vez de datos. No se usa en ningún lugar.
- `Product.js` usa `useUser` en cada tarjeta → crea N listeners de Firebase por N productos. Pasar `user` como prop sería más eficiente.
- Cookie de auth no es `httpOnly` (limitación de js-cookie en cliente).
- `Map.js` usa `NEXT_PUBLIC_FIREBASE_APP_KEY` como Google Maps key (incorrecto — necesita su propia API key de Maps).

## Architecture

This is a **Next.js 11** e-commerce app ("Valery Tienda") using **Firebase** as the backend (Firestore for data, Firebase Auth for authentication). It uses webpack 4 (not 5), which is why `NODE_OPTIONS=--openssl-legacy-provider` is required for builds.

### Path Aliases

Defined in `jsconfig.json`:
- `@components/*` → `components/*`
- `@firebase/*` → `firebase/*`
- `@utils/*` → `utils/*`

### Firebase Layer (`firebase/`)

- `firebase.js` — initializes Firebase client SDK from `NEXT_PUBLIC_*` env vars; call `initFirebase()` before using any Firebase service
- `db.js` — Firestore CRUD operations for the `products` collection (`getAllProducts`, `addProducts`, `updateProduct`, `deleteProduct`)
- `useUser.js` — React hook that manages auth state; syncs Firebase ID token with a cookie; redirects unauthenticated users to `/`
- `userCookies.js` — cookie helpers for persisting user session
- `mapUserData.js` — maps Firebase user object to a plain data shape
- `admin.js` — server-side Firebase Admin SDK for token verification (used in API routes); uses `FIREBASE_PRIVATE_KEY` and `FIREBASE_CLIENT_EMAIL` env vars

### Pages & API Routes

- `pages/index.js` — home page; fetches all products from Firestore client-side; uses `useUser` hook for auth gating; renders `Profile` or `Welcome` based on auth state
- `pages/login.js` — login page using `react-firebaseui`
- `pages/location.js` — Google Maps page using `@react-google-maps/api`
- `pages/dashboard.js` (via `components/Dashboard`) — admin dashboard for product management
- `pages/api/products/index.js` — REST endpoint; calls `getAllProducts()` from Firestore
- `pages/api/products/[id].js` — REST endpoint for individual product operations

### Component Structure

Each component lives in its own folder under `components/`. All pages are wrapped in `Layout` (Navbar + Footer) via `pages/_app.js`. Styling uses Next.js scoped `<style jsx>` blocks and a global `public/style.css`.

### Environment Variables

Client-side (prefix `NEXT_PUBLIC_`): `FIREBASE_APP_KEY`, `FIREBASE_AUTH_DOMAIN`, `FIREBASE_PROJECT_ID`, `FIREBASE_STORAGE_BUCKET`, `FIREBASE_MESSAGING_SENDER_ID`, `FIREBASE_APP_ID`, `FIREBASE_MEASUREMENT_ID`

Server-side only: `FIREBASE_PRIVATE_KEY`, `FIREBASE_CLIENT_EMAIL`
