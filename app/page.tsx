'use client';
import { useRef } from "react";
import BarraProgresso from "./Components/BarraProgresso";
import CalendarioEstudos from "./Components/CalendarioEstudosMensal";
import CalendarioEstudosSemanal from "./Components/CalendarioEstudosSemanal";
import ListaConhecimentos from "./Components/ListaConhecimentos";
import disciplinas from "./constant";

export default function Home() {
  const progressoAtual = 75; 
  const calendarioEstudosMensalRef = useRef<HTMLDivElement>(null);
  const calendarioEstudosSemanalRef = useRef<{
    setSemanaSelecionada: (semana: string) => void
    setAnoSelecionado: (ano: string) => void
    setTopicosSemana: (topicos: string[]) => void
  }>(null);

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
          <CalendarioEstudos ref={calendarioEstudosMensalRef} />
          <CalendarioEstudosSemanal ref={calendarioEstudosSemanalRef} />
          <ListaConhecimentos conhecimentos={disciplinas} />
        </div>
      </main>
    </div>
  );
}