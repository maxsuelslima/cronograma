import Home from "./Components/Home";
import { recuperarTopicosEstudados } from "./utils";

export default async function HomePage() {
  const topicosEstudados = await recuperarTopicosEstudados('1');
  return (
    <Home topicosEstudados={topicosEstudados} />
  )
}