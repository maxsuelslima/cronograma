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

function converterTextoParaObjeto(textoBruto:string): TextoLei {

}
// O título começar com "TÍTULO" seguido de um número romano e o nome do título em letras maiúsculas
// E acaba no próximo título ou no final do texto
function extrairTitulosTextoBruto(textoBruto:string): string[] {
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
}
export function calcularProgressoEstudo(conhecimentos: Conhecimentos, topicosEstudados: TopicosEstudados[]): {
    progressoGeral: number;
    progressoPraca: Record<string, number>;
    progressoOficial: Record<string, number>;
} {
    let quantidadeTotal = 0;
    let quantidadeEstudada = 0;
    let quantidadePracaTotal = 0;
    let quantidadePracaEstudada = 0;
    let quantidadeOficialTotal = 0;
    let quantidadeOficialEstudada = 0;
    

}
export { converterTextoParaObjeto };