import { Conhecimento, Conhecimentos, TopicosEstudados } from "./constant";

/**
 * Função que converte o texto bruto de uma lei/estatuto em um Objeto Estruturado
 * @param {string} textoBruto - O texto da lei copiado e colado
 * @returns {object} - O objeto estruturado
 */
type TextoLei = {
    [titulo: string]: {
        descricao: string;
        capitulos: {
            [capitulo: string]: {
                descricao: string;
                artigos: {
                    [artigo: string]: Array<string>
                }
            }
        }
    };
}
/* 
function converterTextoParaObjeto(textoBruto:string): TextoLei {

} */
// O título começar com "TÍTULO" seguido de um número romano e o nome do título em letras maiúsculas
// E acaba no próximo título ou no final do texto
/* function extrairTitulosTextoBruto(textoBruto:string): string[] {
    const regexTitulo = /TÍTULO\s+([IVXLCDM]+)\s+([A-Z\s]+)/g;
    const titulos = [];
    let match;

    return titulos;
}

function extrairCapitulosDoTitulo(titulo:string): string[] {
    const regexCapitulo = /CAPÍTULO\s+([IVXLCDM]+)\s+([A-Z\s]+)/g;
    const capitulos = [];
    let match;
}
// O artigo pode começar com "Art." ou "Parágrafo único." 
function extrairArtigosDoCapitulo(capitulo:string): {artigo: string, texto: string}[] {
    const regexArtigo = /(Art\.\s*\d+|Parágrafo único\.)\s*(.*?)(?=(Art\.\s*\d+|Parágrafo único\.|$))/gs;
    const artigos = [];
    let match;
}

function gerarCronogramaEstudo(conhecimentos: Conhecimentos, pesoConhecimento: { [key: string]: '0' | '1' | '2' | '3' }): Array<string> {
    //gera um cronograma de estudo baseado nos conhecimentos e seus pesos
    // 
} */
export function calcularProgressoEstudo(conhecimentos: Conhecimentos, topicosEstudados: TopicosEstudados[]): {
        gerais:{
            [disciplina: string]: {
                quantidadeTotal: number;
                quantidadeEstudada: number;
            }
        };
        praca:{
            [disciplina: string]: {
                quantidadeTotal: number;
                quantidadeEstudada: number;
            }
        }
        oficial: {
            [disciplina: string]: {
                quantidadeTotal: number
                quantidadeEstudada: number
                }
                }
                ;
        total: number;
        totalEstudado: number;
    }{
    const progresso: {
        gerais:{
            [disciplina: string]: {
                quantidadeTotal: number;
                quantidadeEstudada: number;
            }
        };
        praca:{
            [disciplina: string]: {
                quantidadeTotal: number;
                quantidadeEstudada: number;
            }
        }
        oficial: {
            [disciplina: string]: {
                quantidadeTotal: number
                quantidadeEstudada: number
                }
                }
                ;
        total: number;
        totalEstudado: number;
    } = {
        totalEstudado: 0,
        total: 0,
        praca: {},
        oficial: {},
        gerais: {}
    }
    getChaves(conhecimentos).forEach((categoria) => {
        getChaves(conhecimentos[categoria]).forEach((disciplina) => {
            progresso[categoria][disciplina] = {
                quantidadeTotal: 0,
                quantidadeEstudada: 0
            }
            conhecimentos[categoria][disciplina].conteudos.forEach((topico) => {
                if ( typeof topico === 'string') {
                    progresso[categoria][disciplina].quantidadeTotal+=1
                    progresso.total++;
                    if (topicosEstudados.some((t) => t.nome === topico)) {
                        progresso[categoria][disciplina].quantidadeEstudada+=1
                        progresso.totalEstudado++;
                    }
                }
                else {
                 topico.subConteudos.forEach((subTopico) => {
                    progresso[categoria][disciplina].quantidadeTotal+=1
                    progresso.total++;
                    if (topicosEstudados.some((t) => t.nome === subTopico)) {
                        progresso[categoria][disciplina].quantidadeEstudada+=1
                        progresso.totalEstudado++;
                    }
                    })   
                }
            })
        })
    })
    return progresso;
}
function getChaves<T extends object>(obj: T): Array<keyof T> {
  return Object.keys(obj) as Array<keyof T>;
}
export async function recuperarTopicosEstudados(idUsuario: string): Promise<TopicosEstudados[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/topicos_estudados/${idUsuario}`);
    if (!response.ok) {
        throw new Error('Erro ao recuperar os tópicos estudados');
    }
    const data = await response.json();
    return data.topicos_estudados || [];
}
export async function atualizarTopicosEstudados(idUsuario: string, topicosEstudados: TopicosEstudados[]): Promise<void> {
    console.log('Atualizando tópicos estudados para o usuário:', process.env.NEXT_PUBLIC_URL, idUsuario, topicosEstudados);
    const response = await fetch(`/api/topicos_estudados/${idUsuario}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: idUsuario, topicos_estudados: topicosEstudados })
    });
    console.log('Resposta da API:', response);
    if (!response.ok) {
        throw new Error('Erro ao atualizar os tópicos estudados');
    }
}
/* export { converterTextoParaObjeto }; */