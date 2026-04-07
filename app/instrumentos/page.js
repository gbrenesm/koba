import '../../styles/instrument.page.css'
import { getPublicTests } from "@/services/tests";
import InstrumentCard from '@/components/InstrumentCard';


export default async function Instrumentos() {
  const tests = await getPublicTests();
  console.log("Tests", tests)
  return (
    <>
    <header className='instruments-header'>
      <h1>Biblioteca de instrumentos</h1>
      <h2>Navega entre instrumentos ya disponibles, guarda, envía, aplica y revisa los resultados.</h2>
      
    </header>
    <main className='instruments-main'>
      {tests.map((test, index) => (
        <InstrumentCard
          key={test.id}
          test={test}
          index={index}
        />
      ))}
    </main>
    </>
  );
}