"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFolder, faFolderClosed } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import { useState } from "react";

import "../styles/nav.component.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <Link href="/"><FontAwesomeIcon icon={faHouse} /></Link>
      { open && (
        <button onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faFolderClosed} />
        </button> )}

      { open && (
        <div className="drop-menu">
          <Link href="/mi-cuenta">Mi cuenta</Link>
          <Link href="/test">Intrumentos</Link>
          <Link href="/pacientes">Pacientes</Link>
          <Link href="/kobo-test">¿Qué es Kobo Test?</Link>
          <Link href="/guia">Guía</Link>
        </div>
      )}
      
      { !open && (
        <button onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faFolder} />
        </button> )}
    </nav>
  );
}
