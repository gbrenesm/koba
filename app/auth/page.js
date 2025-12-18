import { register, authenticate } from "@/services/auth";

export default function AuthPage() {
  return (
    <div>
      <h1>Auth Page</h1>
      <div className="signin">
        <form action={register}>
          <input
            name="name"
            type="text"
            placeholder="Nombre"
            required
          />
          <input
            name="lastname"
            type="text"
            placeholder="Apellido"
            required
          />
        
          <input
            name="email"
            type="email"
            placeholder="Correo"
            required
          />
        
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            required
            minLength={8}
          />
        
          <button type="submit">
            Crear cuenta
          </button>
        </form>
      </div>
      <div className="auth">
        <form action={authenticate}>
        
          <input
            name="email"
            type="email"
            placeholder="Correo"
            required
          />
        
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            required
          />
        
          <button type="submit">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
