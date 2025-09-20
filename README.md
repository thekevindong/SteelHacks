Campus Capacity & Accessibility Dashboard
This project aims to improve the experience of students, staff, and visitors at the University of Pittsburgh by providing real-time insights into how full different campus buildings are. Using data from sources such as 25Live and the Pitt CSC API, the system will estimate occupancy levels based on class schedules, events, and building data.



✨ Features

  -📊 Real-time & Predictive Occupancy
  Estimates how “full” each building is using class/event data and machine-learning models.
  
  -♿ Accessibility Overlay
  Highlights ramps, elevators, quiet rooms, accessible restrooms, and more.
  
  -🔍 Smart Recommendations
  Suggests study or meeting spaces based on user needs (e.g., quiet, accessible, uncrowded).
  
  -📱 Responsive Design
  Works smoothly on desktop, tablet, and mobile.


  Frontend

  -React and Vite

-------
reactboiler explaination
# React + Vite + Express Boilerplate
---

## 🏗️ High-Level Structure

```
project-root/
├── client/              → React frontend
│   ├── index.html       → Entry HTML for Vite
│   ├── src/             → React components, pages, hooks
│   └── ...              → Tailwind, assets, etc.
│
├── server/              → Express backend
│   ├── index.ts         → Main server entry (starts API + serves frontend)
│   ├── routes/          → API route definitions (e.g., /api/users, /api/auth)
│   ├── vite.ts          → Custom integration: attaches Vite dev server in dev mode
│   └── ...              → Middleware, database, etc.
│
├── dist/                → Production build output
│   ├── index.js         → Bundled server
│   └── client/          → Built frontend (static files)
│
├── vite.config.ts       → Config for Vite (frontend bundler/dev server)
├── tsconfig.json        → TypeScript settings
├── package.json         → Scripts + dependencies
└── ...
```

---

## ⚙️ How it Works

### 1. **Frontend (client)**

* Uses **React + Vite** for fast dev experience.
* You run it with `vite` (`npm run dev:client`).
* In development:

  * Served from Vite on port `5173` (with hot reload).
* In production:

  * Vite builds static files → put in `/dist/client`.
  * Express serves these static files.

---

### 2. **Backend (server)**

* Built with **Express**.
* Entry point is `server/index.ts`.
* Responsibilities:

  * Parse JSON + URL-encoded requests.
  * Attach routes (from `./routes`).
  * Serve API responses at `/api/...`.
  * Handle errors globally.
  * In development → integrate with Vite (`setupVite`).
  * In production → serve built static frontend (`serveStatic`).
* Starts an HTTP server with:

  ```ts
  server.listen(port, "127.0.0.1", () => {
    log(`serving on port ${port}`);
  });
  ```

---

### 3. **Special Middleware**

In `server/index.ts` you have a **logging middleware**:

* Captures requests to `/api/...`.
* Times them.
* Logs method, path, status, duration, and (truncated) JSON response.

That’s useful for debugging and profiling.

---

### 4. **Vite Integration (`server/vite.ts`)**

* In dev mode: Express doesn’t serve React directly.
* Instead, Express **injects Vite’s dev server** so you get hot reloading.
* In prod mode: `serveStatic()` serves the prebuilt React app from `/dist`.

This way, you don’t need two separate servers in production — Express handles both API + frontend.

---

### 5. **Scripts**

From `package.json`:

* `npm run dev` → runs **server + client** concurrently.
* `npm run build` → builds frontend with Vite + bundles backend with esbuild.
* `npm start` → runs production build (Express serves static + API).
* `npm run db:push` → pushes schema to DB via Drizzle ORM.

---

## 🔄 Request Flow

**Development mode (your current setup):**

1. Browser → `http://localhost:5173` (Vite dev server).
2. React code → proxies API calls to Express server (`http://localhost:5000/api/...`).
3. Express handles API → DB / auth / logic → JSON response.

**Production mode:**

1. Browser → `http://localhost:5000`.
2. Express serves static frontend (`dist/client/index.html`).
3. React app bootstraps.
4. API calls → same Express server (`/api/...`).

So in production, you only need to deploy **one server process**.

---

✅ In short:

* **`client/`** → your React frontend (user interface).
* **`server/`** → your Express backend (API + serving frontend).
* **Vite** handles frontend builds & hot reload.
* **Express** unifies everything (API + serving static React in prod).
