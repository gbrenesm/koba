import { newTest } from "@/services/tests"

export default function NewTestPage() {
  return (
    <div>
      <h1>Añadir prueba</h1>
      <div className="signin">
        <form action={newTest}>
          <input
            name="title"
            type="text"
            placeholder="Nombre de la prueba"
            required
          />
          <input
            name="nombre"
            type="text"
            placeholder="Nombre del autor"
            required
          />
          <input
            name="apellido"
            type="text"
            placeholder="Apellido del autor"
            required
          />
        
          <input
            name="editorial"
            type="text"
            placeholder="Editorial"
            required
          />
        
          <input
            name="lugar"
            type="text"
            placeholder="Lugar"
            required
          />
        
          <input
            name="year"
            type="number"
            placeholder="Año"
            required
            minLength={4}
          />
          
          <select name="license_type">
            <option value="public" selected>Pública</option>
            <option value="paid">Paga</option>
            <option value="private">Privada</option>
          </select>
          
          <input
            name="year"
            type="number"
            placeholder="Año"
            required
            minLength={4}
          />
          
          <input
            name="construct"
            type="text"
            placeholder="Constructo"
            required
            minLength={4}
          />
          
        
          <button type="submit">
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
}
