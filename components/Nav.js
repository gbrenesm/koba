"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFolder, faFolderClosed } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";
import "../styles/nav.component.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <Link href="/"><FontAwesomeIcon icon={faHouse} /></Link>
        <button onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={open ? faFolderClosed : faFolder} />
        </button>
      </nav>

      {open && (
        <div className="drop-menu">
          <h3>Inicio</h3>
          <Link href="/mi-cuenta">Mi cuenta</Link>
          <Link href="/instrumentos">Instrumentos disponibles</Link>
          <Link href="/generador">Generador de instrumentos</Link>
          <Link href="/guardados">Instrumentos guardados</Link>
          <Link href="/aplicacion">Aplicación</Link>
          <Link href="/evaluacion">Evaluación</Link>
          <Link href="/examinados">Examinados</Link>
          <hr />
          <Link href="/kobo-test">Qué es Koba Test</Link>
          <Link href="/guia">¿Cómo usar KobaTest?</Link>
          <Link href="/contacto">Contacto y dudas</Link>
          <Link href="/privacidad">Aviso de privacidad y uso de datos</Link>
        </div>
      )}
    </>
  );
}