'use client';

import { useState, useRef } from "react";
import disciplinas, { TopicosEstudados } from "../constant";
import { atualizarTopicosEstudados, calcularProgressoEstudo } from "../utils";
import BarraProgresso from "./BarraProgresso";
import CalendarioEstudosSemanal from "./CalendarioEstudosSemanal";
import ListaConhecimentos from "./ListaConhecimentos";
import CalendarioEstudosMensalDisplay from "./CalendarioEstudosMensal";


export default function Home({
    topicosEstudados
}:{
    topicosEstudados: TopicosEstudados[]
}) {
console.log('Atualizando tópicos estudados para o usuário:', process.env, topicosEstudados);

  const [topicosEstudadosState, setTopicosEstudadosState] = useState<TopicosEstudados[]>(topicosEstudados);
  const calendarioEstudosMensalRef = useRef<{
    setMesSelecionado: (mes: string) => void;
    setAnoSelecionado: (ano: string) => void;
  }>(
    {
        setMesSelecionado: () => {},
        setAnoSelecionado: () => {}
    }
  );
  const calendarioEstudosSemanalRef = useRef<{
        setMesSelecionado: (mes: string) => void;
        setAnoSelecionado: (ano: string) => void;
        setSemanaSelecionada: (semana: string) => void;
  }>(
    {
        setSemanaSelecionada: () => {},
        setAnoSelecionado: () => {},
        setMesSelecionado: () => {}
    }
  );
  const progresso = calcularProgressoEstudo(disciplinas, [
    ...topicosEstudadosState
  ]);
  const progressoAtual = Math.round(progresso.totalEstudado / progresso.total * 100);
  async function handleTopicoClick(topico: string) {
    const isAlreadyChecked = topicosEstudadosState.some(t => t.nome === topico);
    let updatedTopicos: TopicosEstudados[];
    if (isAlreadyChecked) {
      updatedTopicos = topicosEstudadosState.filter(t => t.nome !== topico);
    } else {
      updatedTopicos = [...topicosEstudadosState, { nome: topico, dataTermino: new Date().toISOString() }];
    }
    atualizarTopicosEstudados('1', updatedTopicos);
    setTopicosEstudadosState(updatedTopicos);
  }
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          Progresso estudos CBMAL
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Progresso atual: {progressoAtual}%
        </h2>

        <BarraProgresso progresso={progressoAtual} />
        <div className="w-full">
          <CalendarioEstudosMensalDisplay ref={calendarioEstudosMensalRef} />
          <CalendarioEstudosSemanal ref={calendarioEstudosSemanalRef} />
          <ListaConhecimentos conhecimentos={disciplinas} topicosEstudados={topicosEstudadosState} onClick={handleTopicoClick} />
        </div>
      </main>
    </div>
  );
}
