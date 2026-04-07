import '../styles/home.page.css';
import Link from "next/link";

export default async function Home() {
  
  return (
    <main>
     <div className="left-panel">
      <svg className="blob" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <g className="blob-svg">
                <path fill="#c07830" d="M200,60
                  C260,50 330,90 350,150
                  C370,210 340,290 290,330
                  C240,370 150,370 100,330
                  C50,290 40,200 70,140
                  C100,80 140,70 200,60Z
                "/>
                <path fill="#b06820" d="
                  M200,80
                  C250,65 310,110 330,165
                  C350,220 320,300 270,335
                  C220,370 140,360 95,315
                  C50,270 55,185 85,130
                  C115,75 150,95 200,80Z
                " opacity="0.6"/>
                <path fill="#d08840" d="
                  M200,100
                  C245,90 295,130 310,180
                  C325,230 300,305 255,335
                  C210,365 145,350 110,305
                  C75,260 85,190 110,145
                  C135,100 155,110 200,100Z
                " opacity="0.4"/>
              </g>
            </svg>
          </div>
      <div className="right-panel">
        <div className="brand">
          <span className="brand-kobo">Kobo</span>
          <span className="brand-test">Test</span>
        </div>
        <p className="subtitle">Evaluación psicosocial</p>
        <div className="buttons">
          <Link href="/instrumentos" className='btn btn-primary'>Conoce nuestros instrumentos</Link>
          <Link href="/instrumentos/generador" className='btn btn-secondary'>Genera un instrumento nuevo</Link>
        </div>
      </div>
    </main>
  );
}
