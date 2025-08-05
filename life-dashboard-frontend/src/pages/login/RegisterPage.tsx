import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../../services/login/authService'




function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault()
try {
    await register(name, email, password)
    navigate('/') // Redirige al dashboard
} catch (err) {
    setError('Credenciales incorrectas')
}
}

return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow rounded w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}

export default RegisterPage