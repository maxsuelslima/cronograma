import { FC } from "react";
import { Conhecimento, Conhecimentos, Disciplinas, ListaSubConteudos, TopicosEstudados } from "../constant";

const ListaConhecimentos:FC<{conhecimentos: Conhecimentos, topicosEstudados: TopicosEstudados[], onClick: (topico: string) => void}> = ({conhecimentos, topicosEstudados, onClick}) => {
    
    
    return (
        <div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Conhecimentos Gerais</h3>
                <ListaConhecimentosComponent onClick={onClick} conhecimentos={conhecimentos['gerais']} topicosEstudados={topicosEstudados} />
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2 mt-6">Conhecimentos Específicos Oficial</h3>
                <ListaConhecimentosComponent onClick={onClick} conhecimentos={conhecimentos['oficial']} topicosEstudados={topicosEstudados} />
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2 mt-6">Conhecimentos Específicos Praça</h3>
                <ListaConhecimentosComponent onClick={onClick} conhecimentos={conhecimentos['praca']} topicosEstudados={topicosEstudados} />
        </div>
    )
}
const ListaConhecimentosComponent:FC<{conhecimentos: Conhecimento, topicosEstudados: TopicosEstudados[], onClick: (topico: string) => void}> = ({conhecimentos, topicosEstudados, onClick}) => {
    return (
        <div>
            {
                Object.entries(conhecimentos).map(([disciplina, topicos]) => (
                    <div key={disciplina} className="mb-4">
                        <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-1">{topicos.titulo}</h4>
                        <ListaConteudos conhecimentos={topicos.conteudos} topicosEstudados={topicosEstudados} onClick={onClick} />
                    </div>
                ))
            }
        </div>
    )
}
const ListaConteudos:FC<{conhecimentos: Disciplinas['conteudos'], topicosEstudados: TopicosEstudados[], onClick: (topico: string) => void}> = ({conhecimentos, topicosEstudados, onClick}) => {
    if (!conhecimentos) return null;
    if( !Array.isArray(conhecimentos) ) return null;
    if(conhecimentos.length === 0) return <p className="text-gray-500 dark:text-gray-400">Nenhum conteúdo disponível</p>;
    return (
        <ul className="list-disc list-inside">
            {conhecimentos.map((conteudo, index) => {
                if (typeof conteudo === 'string') {
                    const isChecked = topicosEstudados.some(topico => topico.nome === conteudo);
                    return <ListItem key={index} topico={conteudo} isChecked={isChecked} onClick={onClick} />;
                }
                return <SubListaTopicos key={index} conhecimentos={conteudo} topicosEstudados={topicosEstudados} onClick={onClick} />; // ou lidar com outros tipos de conteúdo, se necessário
            })}
        </ul>
    )
}
const SubListaTopicos:FC<{conhecimentos: ListaSubConteudos, topicosEstudados: TopicosEstudados[], onClick: (topico: string) => void}> = ({conhecimentos, topicosEstudados, onClick}) => {
    return (
        <div>
            <h5 className="text-md font-medium text-gray-600 dark:text-gray-400 mb-1">{conhecimentos.titulo}</h5>
            <ul className="list-disc list-inside ml-4">
                {conhecimentos.subConteudos.map((subConteudo, index) =>{
                    const isChecked = topicosEstudados.some(topico => topico.nome === subConteudo);
                    return <ListItem key={index} topico={subConteudo} isChecked={isChecked} onClick={onClick} />
                })}
            </ul>
        </div>
    )
}

const ListItem:FC<{topico: string, isChecked: boolean, onClick: (topico: string) => void}> = ({topico, isChecked, onClick}) => {
    return (
        <li onClick={() => onClick(topico)} className={`cursor-pointer ${isChecked ? 'text-green-500 dark:text-green-200 line-through opacity-50' : 'text-gray-700 dark:text-gray-300'}`}>
            {topico}
        </li>
    )
}
export default ListaConhecimentos;