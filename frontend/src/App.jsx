import { motion } from 'framer-motion'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="p-6 shadow bg-white">
        <h1 className="text-2xl font-bold">ChemSimLab</h1>
        <p className="text-sm text-slate-600">Frontend listo: Vite + Tailwind + Framer Motion</p>
      </header>
      <main className="p-6">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-lg p-4 border bg-white shadow-sm"
        >
          <p>Bienvenido al laboratorio virtual.</p>
        </motion.div>
      </main>
    </div>
  )
}

export default App
