import { recuperarDadosUsuario } from "./api/topicos_estudados/[idUsuario]/route";
import Home from "./Components/Home";
import { recuperarTopicosEstudados } from "./utils";

export default async function HomePage() {
  const topicosEstudados = await recuperarDadosUsuario('1');
  return (
    <Home topicosEstudados={topicosEstudados} />
  )
}