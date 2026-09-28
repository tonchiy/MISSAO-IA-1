/*
    Importa a função aleatorio que está
    no arquivo aleatorio.js.
*/
import { aleatorio } from "./aleatorio.js";
/*
    Importa o vetor perguntas que está
    no arquivo perguntas.js.
*/
import { perguntas } from "./perguntas.js";
/*
    Localiza os elementos existentes
    no documento HTML.
*/
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const novamenteBtn = document.querySelector(".novamente-btn");
const introducao = document.querySelector(".introducao");
/*
    atual guarda o número da pergunta
    que está sendo apresentada.
    A primeira posição de um vetor é zero.
*/
let atual = 0;
/*
    historiaFinal guardará todas as frases
    sorteadas durante o questionário.
*/
let historiaFinal = "Durante sua preparação profissional, você ";
/*
    Função responsável por apresentar
    as perguntas e criar os botões.
*/
function mostraPergunta() {
    /*
        Verifica se todas as perguntas
        já foram respondidas.
    */
    if (atual >= perguntas.length) {
        mostraResultado();
        // Encerra a execução da função.
        return;
    }
    /*
        Recupera a pergunta que está
        armazenada na posição atual.
    */
    const perguntaAtual = perguntas[atual];
    // Apresenta o enunciado na página.
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    /*
        Limpa os botões da pergunta anterior
        antes de criar os novos botões.
    */
    caixaAlternativas.textContent = "";
    /*
        Percorre todas as alternativas
        da pergunta atual.
    */
    perguntaAtual.alternativas.forEach((alternativa) => {
            /*
                Cria um novo elemento button.
            */
            const botaoAlternativa = document.createElement("button");
            /*
                Coloca o texto da alternativa
                dentro do botão.
            */
            botaoAlternativa.textContent = alternativa.texto;
            /*
                Define o que acontecerá quando
                o usuário clicar no botão.
            */
            botaoAlternativa.addEventListener("click",() => {
                    respostaSelecionada(alternativa);
                }
            );
            /*
                Coloca o botão dentro da
                caixa de alternativas.
            */
            caixaAlternativas.appendChild(
                botaoAlternativa
            );
        }
    );
}
/*
    Esta função recebe a alternativa
    escolhida pelo usuário.
*/
function respostaSelecionada(
    opcaoSelecionada
) {
    /*
        Envia a lista de afirmações para
        a função aleatorio.
        A função retorna somente uma frase.
    */
    const afirmacaoEscolhida = aleatorio(opcaoSelecionada.afirmacao);
    /*
        Acrescenta a frase sorteada
        à história final.
    */
    historiaFinal += afirmacaoEscolhida + " ";
    // Avança para a próxima pergunta.
    atual++;
    // Apresenta a próxima pergunta.
    mostraPergunta();
}
/*
    Função executada depois que todas
    as perguntas forem respondidas.
*/
function mostraResultado() {
    // Remove a pergunta da tela.
    caixaPerguntas.textContent = "";
    // Remove os botões da tela.
    caixaAlternativas.textContent = "";
    // Esconde o texto de introdução.
    introducao.style.display = "none";
    // Mostra a caixa do resultado.
    caixaResultado.style.display = "block";
    // Apresenta a história final.
    textoResultado.textContent = historiaFinal;
}
/*
    Função usada para reiniciar
    o questionário.
*/
function jogarNovamente() {
    // Volta para a primeira pergunta.
    atual = 0;
    // Limpa e reinicia a história.
    historiaFinal = "Durante sua preparação profissional, você ";
    // Mostra novamente o texto inicial.
    introducao.style.display = "block";
    // Esconde o resultado anterior.
    caixaResultado.style.display = "none";
    // Apresenta a primeira pergunta.
    mostraPergunta();
}
/*
    Quando o botão Jogar novamente for
    clicado, executa jogarNovamente.
*/
novamenteBtn.addEventListener("click", jogarNovamente);
/*
    Chama a função pela primeira vez
    para apresentar a primeira pergunta.
*/
mostraPergunta();