import { createInterpretations } from '@/services/interpretations';

export default async function AnswerTestPage({ params }) {
  const { client_id } = await params;
  
  //const response = await createInterpretations(client_id, 'ba17444a-c3b0-4412-b81c-162e4d14f26c');
  
  return <h2>client_id: {client_id}</h2>;
}