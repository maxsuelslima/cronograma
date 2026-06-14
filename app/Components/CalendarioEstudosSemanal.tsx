'use client';
import {  FC, Ref, useEffect, useState } from "react";
import Pager from "./Pager";

type CalendarioEstudosSemanalProps = {
    cronograma?: {
        [ano: string]: {
            [mes: string]: {
                [dia: string]: string[];
            }
        }
    }
    mesSelecionado?: string;
    anoSelecionado?: string;
    semanaSelecionada?: string;
    ref: Ref<{
        setMesSelecionado: (mes: string) => void;
        setAnoSelecionado: (ano: string) => void;
        setSemanaSelecionada: (semana: string) => void;
    } >;
}
const cronogramaExemplo = {}

const CalendarioEstudosSemanalDisplay: FC<CalendarioEstudosSemanalProps> = (({ cronograma = cronogramaExemplo, mesSelecionado = "4", anoSelecionado ="2026", semanaSelecionada = "1", ref }) => {
    const ArrayDiasPorExtenso = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const [mesSelecionadoState, setMesSelecionadoState] = useState(mesSelecionado);
    const [anoSelecionadoState, setAnoSelecionadoState] = useState(anoSelecionado);
    const [semanaSelecionadaState, setSemanaSelecionadaState] = useState(semanaSelecionada);
    const {arrayDias, quantidadeSemanasMesSelecionado }: { arrayDias: Array<{ ano:string, mes:string, dia: string }>, quantidadeSemanasMesSelecionado: number } = gerarArrayDias(mesSelecionadoState, anoSelecionadoState, semanaSelecionadaState);
    function setMesSelecionado(mes: string) {
        setMesSelecionadoState(mes);
    }
    function setAnoSelecionado(ano: string) {
        setAnoSelecionadoState(ano);
    }
    function setSemanaSelecionada(semana: string) {
        setSemanaSelecionadaState(semana);
    }
    useEffect(() => {
        if (ref && typeof ref === "object" && "current" in ref) {
            ref.current = { setMesSelecionado, setAnoSelecionado, setSemanaSelecionada };
        }
    }, [ref]);
    function handlePrevious() {
        if (semanaSelecionadaState === "1") {
            if (mesSelecionadoState === "1") {
                setMesSelecionadoState("12");
                const quantidadeSemanasMesAnterior = gerarArrayDias("12", (parseInt(anoSelecionadoState) - 1).toString(), "1").quantidadeSemanasMesSelecionado;
                setSemanaSelecionadaState(quantidadeSemanasMesAnterior.toString());
                setAnoSelecionadoState((parseInt(anoSelecionadoState) - 1).toString());
            }
            else {
                const quantidadeSemanasMesAnterior = gerarArrayDias((parseInt(mesSelecionadoState) - 1).toString(), anoSelecionadoState, "1").quantidadeSemanasMesSelecionado;
                setSemanaSelecionadaState(quantidadeSemanasMesAnterior.toString());
                setMesSelecionadoState((parseInt(mesSelecionadoState) - 1).toString());
            }
        }
        else {
            setSemanaSelecionadaState((parseInt(semanaSelecionadaState) - 1).toString());
        }
    }
    function handleNext() {
        const quantidadeSemanasMesSelecionado = gerarArrayDias(mesSelecionadoState, anoSelecionadoState, "1").quantidadeSemanasMesSelecionado;
        console.log({ semanaSelecionadaState, quantidadeSemanasMesSelecionado });
        if (semanaSelecionadaState === quantidadeSemanasMesSelecionado.toString()) {
            if( semanaSelecionadaState === quantidadeSemanasMesSelecionado.toString()) {
                if (mesSelecionadoState === "12") {
                    setMesSelecionadoState("1");
                    setSemanaSelecionadaState("1");
                    setAnoSelecionadoState((parseInt(anoSelecionadoState) + 1).toString());
                }
                else {
                    setMesSelecionadoState((parseInt(mesSelecionadoState) + 1).toString());
                    setSemanaSelecionadaState("1");
                }
            }   
        }
        else {
            setSemanaSelecionadaState((parseInt(semanaSelecionadaState) + 1).toString());
        }
    }
    const mesSelecionadoPorExtenso = new Date(
        parseInt(anoSelecionadoState),
        parseInt(mesSelecionadoState) - 1,
    ).toLocaleString("pt-BR", { month: "long" });
    return (
    <div className="w-full mt-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            <Pager
                content={`Semana ${semanaSelecionadaState} de ${mesSelecionadoPorExtenso} de ${anoSelecionadoState}`}
                onPrevious={handlePrevious}
                onNext={handleNext}
            />
        </h2>
        <div className="grid grid-cols-7 gap-4">
            {ArrayDiasPorExtenso.map((diaSemana, i) => (
                <div key={i} className="text-sm font-bold text-center text-gray-500">
                    {diaSemana}
                </div>
            ))}
            {arrayDias.map((item, index) => {
                const topicos = cronograma[item.ano as keyof typeof cronograma]?.[item.mes]?.[item.dia] ?? [];
                const isSemanaAtual = item.mes === mesSelecionadoState && item.ano === anoSelecionadoState;
                return (
                    <div key={index} className={`p-2 border rounded ${isSemanaAtual ? "bg-white" : "bg-gray-100 text-gray-400"}`}>
                        <div className="text-sm font-bold mb-1">{item.dia}</div>
                        <TopicoDia topicos={topicos} />
                    </div>
                )
            }
            )}
        </div>
    </div>
    );
});
CalendarioEstudosSemanalDisplay.displayName = "CalendarioEstudosSemanalDisplay";
function gerarArrayDias(mesSelecionado: string, anoSelecionado: string, semanaSelecionada: string):{
    arrayDias: Array<{ ano:string, mes:string, dia: string }>;
    quantidadeSemanasMesSelecionado: number;
} {
    console.log({ mesSelecionado, anoSelecionado, semanaSelecionada });
    const diasNoMes: Array<{
        dia: string;
        diaSemana: number;
    }> = Array.from({ length: new Date(parseInt(anoSelecionado), parseInt(mesSelecionado), 0).getDate() }, (_, i) => {
        const dia = (i + 1).toString();
        const diaSemana = new Date(parseInt(anoSelecionado), parseInt(mesSelecionado) - 1, i + 1).getDay();
        return { dia, diaSemana };
    });
    const indexPrimeiroDomingo = diasNoMes.findIndex(dia => dia.diaSemana === 0);
    const arrayResto = [...diasNoMes.slice(indexPrimeiroDomingo), ...diasNoMes.slice(0, indexPrimeiroDomingo)];
    const quantidadeSemanasMesSelecionado = Math.floor(arrayResto.length / 7);
    const semanasMesSelecionado = Array.from({ length: quantidadeSemanasMesSelecionado }, (_, i) => arrayResto.slice(i * 7, (i + 1) * 7));
    const semanaSelecionadaIndex = parseInt(semanaSelecionada) - 1;
    const semanaSelecionadaDias = semanasMesSelecionado[semanaSelecionadaIndex] || [];

    const arrayDias = semanaSelecionadaDias.map(diaInfo => ({ ano: anoSelecionado, mes: mesSelecionado, dia: diaInfo.dia }));
    console.log(arrayDias);
    return {
        arrayDias,
        quantidadeSemanasMesSelecionado
    };
}
const TopicoDia = ({ topicos }: { topicos: string[] }) => {
    return (
        <ul className="text-xs">
            {topicos.map((topico, idx) => (
                <li key={idx} className="bg-blue-100 text-blue-800 px-1 rounded mb-1">
                    {topico}
                </li>
            ))}
        </ul>
    );
}
export default CalendarioEstudosSemanalDisplay;