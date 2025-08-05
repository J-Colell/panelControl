import React from 'react'
import { Link, Outlet } from 'react-router-dom'

type Props = {
  children?: React.ReactNode
}

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Panel de Control</h2>
        <ul className="space-y-2">
          <li><Link to="/" className="hover:underline">Dashboard</Link></li>
          <li><Link to="/tasks" className="hover:underline">Tareas</Link></li>
          <li><Link to="/login" className="hover:underline">Iniciar Sesión</Link></li>
          <li><Link to="/register" className="hover:underline">Registro</Link></li>
        </ul>
      </aside>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow p-4">
          <h1 className="text-2xl font-semibold text-gray-800">Bienvenido</h1>
        </header>

        {/* Contenido */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          {/* Usa Outlet si estás haciendo rutas anidadas */}
          <Outlet />

          {/* O usa children si lo llamas manualmente */}
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout