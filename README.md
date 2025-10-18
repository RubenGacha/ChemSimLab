# ChemSimLab

Es una aplicación educativa diseñada para simular reacciones químicas orgánicas en un entorno visual e interactivo.

Permite a los usuarios experimentar con reactivos, observar resultados y aprender sobre energía, equilibrio y productos químicos de manera dinámica.

---

## 🚀 Objetivo del proyecto

Este proyecto busca combinar:
- **Aprendizaje de React + Spring Boot**
- **Visualización interactiva de procesos químicos**
- **Educación científica asistida por tecnología**

---

## 🧩 Características principales

- Mezclar **reactivos orgánicos** y ver resultados simulados.
- Mostrar **precipitados, color, energía liberada o absorbida**.
- Visualización de **energía de reacción y equilibrio químico**.
- Animaciones 2D del laboratorio (frascos, tubos, burbujas).
- Base de datos con **reacciones orgánicas comunes**.
- Backend con lógica de simulación realista.

---

## ⚙️ Tecnologías utilizadas

| Área | Tecnología | Función |
|------|-------------|----------|
| **Frontend** | React, Vite, TailwindCSS, Framer Motion | Interfaz, animaciones y visualización. |
| **Backend** | Spring Boot (Java 17+) | Motor de simulación química. |
| **Base de Datos** | SQLite | Almacenamiento de datos químicos. |
| **Comunicación** | REST API (JSON) | Conexión frontend ↔ backend. |
| **Opcional** | Python + Flask | Procesos de cálculo o IA química. |

---

## 🧱 Estructura del proyecto

```bash
ChemSimLab/
├── backend/   # Spring Boot (Maven Wrapper)
├── frontend/  # React + Vite + Tailwind + Framer Motion
├── .gitignore # Ignora artefactos comunes
├── LICENSE
└── README.md
```

---

## ✅ Requisitos previos

- `Node.js` LTS (incluye `npm`).
- `Java` 17 o superior.
- Opcional: `winget` (Windows) para instalación rápida.

---

## 🧭 Instalación rápida

- Windows (winget):
  - `winget install --id OpenJS.NodeJS.LTS -e`
  - Verificar: `node -v`, `npm -v`, `java -version`

---

## ▶️ Cómo iniciar

- Frontend (Vite):
  - `cd frontend`
  - `npm install`
  - `npm run dev`
  - Abre `http://localhost:5173/`

- Backend (Spring Boot):
  - `cd backend`
  - Windows: `mvnw.cmd spring-boot:run`
  - Linux/macOS: `./mvnw spring-boot:run`
  - Salud API: `GET http://localhost:8080/api/health` → `ok`

---

## 🔧 Desarrollo

- Frontend: TailwindCSS ya configurado (`tailwind.config.js`, `postcss.config.js`).
- Animaciones: `framer-motion` instalado y usado en `src/App.jsx`.
- Backend: proyecto generado con Maven Wrapper y devtools para recarga.
- Endpoint de salud: `src/main/java/com/chemsimlab/backend/HealthController.java`.

---

## 📚 Siguientes pasos sugeridos

- Definir modelo de datos para reacciones (entidades y DTOs).
- Añadir endpoints: mezclar reactivos, energía de reacción y equilibrio.
- Configurar CORS para `http://localhost:5173` cuando el frontend consuma API.
- Integrar SQLite y repositorios (Spring Data JPA).
- Añadir tests unitarios y de integración.

---

## 📝 Notas

- `.gitignore` raíz cubre artefactos de `frontend` y `backend`.
- Si `npm` falla por políticas de PowerShell, ejecuta `"C:\\Program Files\\nodejs\\npm.cmd"`.
- El backend usa `devtools` y reinicia automáticamente ante cambios.