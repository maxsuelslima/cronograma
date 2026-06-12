import { FC } from "react";
import { Conhecimento, Conhecimentos, Disciplinas, ListaSubConteudos } from "../constant";

const ListaConhecimentos:FC<{conhecimentos: Conhecimentos}> = ({conhecimentos}) => {
    
    
    return (
        <div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Conhecimentos Gerais</h3>
                <ListaConhecimentosComponent conhecimentos={conhecimentos['gerais']} />
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2 mt-6">Conhecimentos Específicos Oficial</h3>
                <ListaConhecimentosComponent conhecimentos={conhecimentos['oficial']} />
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2 mt-6">Conhecimentos Específicos Praça</h3>
                <ListaConhecimentosComponent conhecimentos={conhecimentos['praca']} />
        </div>
    )
}
const ListaConhecimentosComponent:FC<{conhecimentos: Conhecimento}> = ({conhecimentos}) => {
    return (
        <div>
            {
                Object.entries(conhecimentos).map(([disciplina, topicos]) => (
                    <div key={disciplina} className="mb-4">
                        <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-1">{topicos.titulo}</h4>
                        <ListaConteudos conhecimentos={topicos.conteudos} />
                    </div>
                ))
            }
        </div>
    )
}
const ListaConteudos:FC<{conhecimentos: Disciplinas['conteudos']}> = ({conhecimentos}) => {
    if (!conhecimentos) return null;
    if( !Array.isArray(conhecimentos) ) return null;
    if(conhecimentos.length === 0) return <p className="text-gray-500 dark:text-gray-400">Nenhum conteúdo disponível</p>;
    return (
        <ul className="list-disc list-inside">
            {conhecimentos.map((conteudo, index) => {
                if (typeof conteudo === 'string') {
                    return <li key={index} className="text-gray-700 dark:text-gray-300">{conteudo}</li>;
                }
                return <SubListaTopicos key={index} conhecimentos={conteudo} />; // ou lidar com outros tipos de conteúdo, se necessário
            })}
        </ul>
    )
}
const SubListaTopicos:FC<{conhecimentos: ListaSubConteudos}> = ({conhecimentos}) => {
    return (
        <div>
            <h5 className="text-md font-medium text-gray-600 dark:text-gray-400 mb-1">{conhecimentos.titulo}</h5>
            <ul className="list-disc list-inside ml-4">
                {conhecimentos.subConteudos.map((subConteudo, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">{subConteudo}</li>
                ))}
            </ul>
        </div>
    )
}
export default ListaConhecimentos;