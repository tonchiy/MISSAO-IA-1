/*
    Este arquivo guarda as perguntas do questionário.
    perguntas é um array de objetos.
    Cada pergunta possui:
    - enunciado;
    - alternativas.

    Cada alternativa possui:
    - texto;
    - afirmacao.
*/
export const perguntas = [
    // PRIMEIRA PERGUNTA
    {
        enunciado:
            "Você encontrou uma vaga de estágio relacionada à área que deseja seguir. O que faz primeiro?",
        alternativas: [
            // Primeira alternativa
            {
                texto:
                    "Lê os requisitos e adapta o currículo à vaga.",
                afirmacao: [
                    "analisou os requisitos da vaga e destacou no currículo as experiências relacionadas.",

                    "preparou um currículo claro e direcionado para a oportunidade de estágio."
                ]
            },
            // Segunda alternativa
            {
                texto:
                    "Envia o mesmo currículo sem ler a descrição.",
                afirmacao: [
                    "percebeu que é importante conhecer a vaga antes de enviar o currículo.",

                    "aprendeu que um currículo direcionado pode apresentar melhor suas habilidades."
                ]
            }
        ]
    },
    // SEGUNDA PERGUNTA
    {
        enunciado:
            "Durante a entrevista, perguntam sobre uma habilidade que você ainda não domina. Como responde?",
        alternativas: [
            // Primeira alternativa
            {
                texto:
                    "Diz a verdade e demonstra interesse em aprender.",
                afirmacao: [
                    "respondeu com sinceridade e mostrou disposição para aprender novas habilidades.",

                    "reconheceu o que ainda precisava desenvolver e apresentou vontade de evoluir."
                ]
            },
            // Segunda alternativa
            {
                texto:
                    "Afirma que domina totalmente, mesmo sem conhecer.",
                afirmacao: [
                    "entendeu que inventar conhecimentos pode prejudicar a confiança profissional.",

                    "percebeu que a sinceridade é mais adequada do que prometer algo que não sabe fazer."
                ]
            }
        ]
    },
    // TERCEIRA PERGUNTA
    {
        enunciado:
            "No primeiro dia de estágio, você recebe uma tarefa e fica com dúvidas. Qual atitude toma?",
        alternativas: [
            // Primeira alternativa
            {
                texto:
                    "Organiza as dúvidas e pede orientação.",
                afirmacao: [
                    "registrou suas dúvidas e pediu orientação para realizar a tarefa corretamente.",

                    "procurou compreender a atividade antes de continuar o trabalho."
                ]
            },
            // Segunda alternativa
            {
                texto:
                    "Finge que entendeu e entrega de qualquer maneira.",
                afirmacao: [
                    "aprendeu que pedir ajuda no momento certo evita erros e retrabalho.",

                    "descobriu que esclarecer uma tarefa faz parte do processo de aprendizagem."
                ]
            }
        ]
    },
    // QUARTA PERGUNTA
    {
        enunciado:
            "Ao receber uma proposta de emprego CLT, qual informação você verifica?",
        alternativas: [
            // Primeira alternativa
            {
                texto:
                    "Função, salário, jornada, benefícios e condições do contrato.",
                afirmacao: [
                    "leu com atenção as condições da contratação antes de aceitar a proposta.",

                    "verificou a função, a jornada, a remuneração e os benefícios informados."
                ]
            },
            // Segunda alternativa
            {
                texto:
                    "Aceita imediatamente sem conferir os detalhes.",
                afirmacao: [
                    "percebeu que uma proposta de trabalho deve ser lida e compreendida antes da decisão.",

                    "aprendeu a conferir as condições do contrato e a esclarecer possíveis dúvidas."
                ]
            }
        ]
    },
    // QUINTA PERGUNTA
    {
        enunciado:
            "Você cometeu um erro em uma atividade da equipe. Como age?",
        alternativas: [
            // Primeira alternativa
            {
                texto:
                    "Comunica o erro e ajuda a encontrar uma solução.",
                afirmacao: [
                    "assumiu a responsabilidade pelo erro e colaborou para encontrar uma solução.",

                    "comunicou o problema com clareza e ajudou a corrigir a atividade."
                ]
            },
            // Segunda alternativa
            {
                texto:
                    "Esconde o problema e culpa outra pessoa.",
                afirmacao: [
                    "compreendeu que esconder problemas pode prejudicar toda a equipe.",

                    "aprendeu que responsabilidade e respeito são importantes no ambiente profissional."
                ]
            }
        ]
    }
];