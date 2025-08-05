// Iniciar sesión
export async function login(email: string, password: string): Promise<string> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    throw new Error('Error de login')
  }

  const data = await response.json()
  // Guarda el token en localStorage o en un estado global
  localStorage.setItem('token', data.token)
  return data.token
}

// Registro
export async function register(name: string, email: string, password: string): Promise<string> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  })

  if (!response.ok) {
    throw new Error('Error de registro')
  }

  const data = await response.json()
  // Guarda el token en localStorage o en un estado global
  localStorage.setItem('token', data.token)
  return data.token
}

// Verifica si el usuario está autenticado
export function isAuthenticated(): boolean {
  return !!localStorage.getItem('token')
}

// Cierra sesión
export function logout() {
  localStorage.removeItem('token')
}

