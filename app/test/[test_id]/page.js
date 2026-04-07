import '../../../styles/test.page.css';
import { notFound } from "next/navigation";
import { sectionsTest } from '@/services/sections';
import { questionsBySection } from '@/services/questions';
import TestClient from './test-client';

export default async function AnswerTestPage({ params }) {
  const { test_id } = await params;
  
  // Obtener datos del servidor
  const { test, sections } = await sectionsTest(test_id);
  
  const { questions } = await questionsBySection(sections[0].id);

  if (!test) notFound();
  
  // Pasar datos al Client Component
  return <TestClient
    test={test}
    sections={sections}
    testId={test_id}
    allQuestions={questions}
  />;
}