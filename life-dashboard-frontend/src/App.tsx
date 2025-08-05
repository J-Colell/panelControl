import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout'
import LoginPage from './pages/login/LoginPage' // 👈 Aquí lo importas
import RegisterPage from './pages/login/RegisterPage' // 👈 Aquí lo importas

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Rutas públicas */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Rutas protegidas (dentro del layout) */}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={
            <div>
              <h1 className="text-3xl font-bold text-indigo-600">Life Dashboard</h1>
              <p className="mt-2 text-gray-700">Tu panel personal de control</p>
            </div>
          } />
          <Route path="tasks" element={<p>Tareas (a implementar)</p>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
