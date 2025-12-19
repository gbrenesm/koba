
import { notFound } from "next/navigation";
import { questionsTests } from "@/services/questions";


export default async function AnswerTestPage({ params }) {
  const { test_id } = await params;
  const test = await questionsTests(test_id);

  if (!test) notFound();
  
  return (
    <div>
      <h1>Título{test.title}</h1>
    </div>
  );
}
