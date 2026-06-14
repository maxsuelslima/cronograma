"use client";
import { FC, Ref, useEffect, useState } from "react";
import Pager from "./Pager";

type CalendarioEstudosMensalProps = {
  cronograma?: {
    [ano: string]: {
      [mes: string]: {
        [dia: string]: string[];
      };
    };
  };
  mesSelecionado?: string;
  anoSelecionado?: string;
  ref: Ref<{
    setMesSelecionado: (mes: string) => void;
    setAnoSelecionado: (ano: string) => void;
  }>;
}

const CalendarioEstudosMensalDisplay: FC<CalendarioEstudosMensalProps> = ({
  cronograma = {},
  mesSelecionado = "4",
  anoSelecionado = "2026",
  ref
}: CalendarioEstudosMensalProps) => {

  const [mesSelecionadoState, setMesSelecionadoState] = useState(mesSelecionado);
  const [anoSelecionadoState, setAnoSelecionadoState] = useState(anoSelecionado);
const arrayDias: Array<{ ano: string; mes: string; dia: string }> =
    gerarArrayDias(mesSelecionadoState, anoSelecionadoState);
  const mesSelecionadoPorExtenso = new Date(
    parseInt(anoSelecionadoState),
    parseInt(mesSelecionadoState) - 1,
  ).toLocaleString("pt-BR", { month: "long" });
  useEffect(() => {
    if (ref && typeof ref === "object" && "current" in ref) {
      ref.current = {
      setMesSelecionado: (mes: string) => {
        setMesSelecionadoState(mes);
      },
      setAnoSelecionado: (ano: string) => {
        setAnoSelecionadoState(ano);
      }
    };
    }
  }, [mesSelecionado, anoSelecionado, setMesSelecionadoState, setAnoSelecionadoState, ref]);

  return (
    <div className="w-full mt-8">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        <Pager
          content={`${mesSelecionadoPorExtenso} ${anoSelecionadoState}`}
          onNext={() => {
            const novoMes = (parseInt(mesSelecionadoState) % 12) + 1;
            const novoAno =
              parseInt(anoSelecionadoState) + (novoMes === 1 ? 1 : 0);
            setMesSelecionadoState(novoMes.toString());
            setAnoSelecionadoState(novoAno.toString());
          }}
          onPrevious={() => {
            const novoMes = ((parseInt(mesSelecionadoState) - 2 + 12) % 12) + 1;
            const novoAno =
              parseInt(anoSelecionadoState) - (novoMes === 12 ? 1 : 0);
            setMesSelecionadoState(novoMes.toString());
            setAnoSelecionadoState(novoAno.toString());
          }}
        />
      </h2>
      <div className="grid grid-cols-7 gap-4">
        {Array.from({ length: 7 }, (_, i) => (
          <div
            key={i}
            className="text-center font-semibold text-gray-600 dark:text-gray-400"
          >
            {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"][i]}
          </div>
        ))}
        {arrayDias.map((item, index) => {
          const topicos = cronograma[item.ano]?.[item.mes]?.[item.dia] || [];
          const isMesAtual =
            item.mes === mesSelecionadoState && item.ano === anoSelecionadoState;
          return (
            <div
              key={index}
              className={`p-2 border rounded ${isMesAtual ? "bg-white" : "bg-gray-100 text-gray-400"}`}
            >
              <div className="text-sm font-bold mb-1">{item.dia}</div>
              <TopicoDia topicos={topicos} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

function gerarArrayDias(mesSelecionado: string, anoSelecionado: string) {
  const arrayRaw: Array<{
    ano: string;
    mes: string;
    dia: string;
    topicos: string[];
  }> = Array.from({ length: 42 }).map(() => ({
    ano: "",
    mes: "",
    dia: "",
    topicos: [],
  }));
  const indexPrimeiroDiaMesAtual = new Date(
    parseInt(anoSelecionado),
    parseInt(mesSelecionado) - 1,
    1,
  ).getDay();
  const quantidadeDiasMesAnterior =
    mesSelecionado === "1"
      ? new Date(parseInt(anoSelecionado) - 1, 12, 0).getDate()
      : new Date(
          parseInt(anoSelecionado),
          parseInt(mesSelecionado) - 1,
          0,
        ).getDate();
  const quantidadeDiasMes = new Date(
    parseInt(anoSelecionado),
    parseInt(mesSelecionado),
    0,
  ).getDate();
  const arrayDias = arrayRaw.map((item, index) => {
    if (index < indexPrimeiroDiaMesAtual) {
      return {
        ano:
          mesSelecionado === "1"
            ? (parseInt(anoSelecionado) - 1).toString()
            : anoSelecionado,
        mes:
          mesSelecionado === "1"
            ? "12"
            : (parseInt(mesSelecionado) - 1).toString(),
        dia: (
          quantidadeDiasMesAnterior -
          indexPrimeiroDiaMesAtual +
          index +
          1
        ).toString(),
      };
    } else if (index < indexPrimeiroDiaMesAtual + quantidadeDiasMes) {
      return {
        ano: anoSelecionado,
        mes: mesSelecionado,
        dia: (index - indexPrimeiroDiaMesAtual + 1).toString(),
      };
    } else {
      return {
        ano:
          mesSelecionado === "12"
            ? (parseInt(anoSelecionado) + 1).toString()
            : anoSelecionado,
        mes:
          mesSelecionado === "12"
            ? "1"
            : (parseInt(mesSelecionado) + 1).toString(),
        dia: (
          index -
          indexPrimeiroDiaMesAtual -
          quantidadeDiasMes +
          1
        ).toString(),
      };
    }
  });
  return arrayDias;
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
};
export default CalendarioEstudosMensalDisplay;
