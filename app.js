const perguntas =[ 
    {
      perguntas:"Qual a finalidade do comando 'console.log( )' em JavaScript?",
      resposta:[
        "Exibir uma mensagem de erro",
        "Imprimir dados no  console",
        "Criar uma variável",
      ],
      correta:1
    },
     {
      perguntas: "Qual é a função do operador '===' em comparações em JavaScript?",
      resposta:[
        "Comparação de valores sem considerar o tipo",
        "Atribuição de valores",
        "Comparação estrita de  valores e tipos",
      ],
      correta:2
    },
     {
      perguntas:"Como se declara uma variável em JavaScript?",
      resposta:[
        "let myVar;",
        "const myVar",
        "Todas acima estão corretas",
      ],
      correta:2
    },
     {
      perguntas:"O que é uma função em JavaScript?",
      resposta:[
        "Um tipo de dado",
        "Um bloco de código reutilizavel",
        "Uma variável",
      ],
      correta:1
    },
     {
      perguntas:"Qual a diferença entre 'let' e 'const' na declaração de variáveis? ",
      resposta:[
        "let permite reatribuições , const é imutável ", 
        "let é usado para valores constantes , const para valores mutáveis",
        "Nenhuma",
      ],
      correta:0
    },
     {
      perguntas:"O que é DOM em JavaScript?",
      resposta:[
        "Um método de criptografia",
        "Um modelo de objeto para manipular documentos HTML",
        "Uma linguagem de programação",
      ],
      correta:1
    },
     {
      perguntas:"Como se realiza uma iteração sobre os elementos de um array em JavaScript?",
      resposta:[
        "Usando a estrutura 'if-else'",
        "Com a declaração 'switch'",
        "Utilizando loops como 'for' ou 'forEach'",
      ],
      correta:2
    },
     {
      perguntas:"Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      resposta:[
        "push()",
        "add()",
        "insert()",
      ],
      correta:0
    },
     {
      perguntas:"Qual é o método usado para remover o último elemento de um array em JavaScript?",
      resposta:[
        "remove()",
        "pop()",
        "deleteLast()",
      ],
      correta:1
    },
     {
      perguntas:"Qual é a maneira correta de comentar uma linha de código em JavaScript?",
      resposta:[
        "*/",
        "##",
        "//",
      ],
      correta:2
    }
];

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas

 //document, modelar meu docuemnto para js .
//queryselector , pesquisa 
const quiz = document.querySelector('#quiz');
const templete = document.querySelector('template');

for(const item of perguntas){
  const quizItem = templete.  content.cloneNode(true);
  quizItem.querySelector('h3').textContent = item.perguntas

for(let resposta of item.resposta){
  //coloca alternativas na tela 
  const dt = quizItem.querySelector('dl dt').cloneNode(true);
  dt.querySelector('span').textContent = resposta
dt.querySelector('input').setAttribute('name','pergunta-'+ perguntas.indexOf(item)) 
dt.querySelector('input').value = item.resposta.indexOf(resposta)
dt.querySelector('input').onchange = (event) => {
  const estaCorreta = event.target.value == item.correta

  corretas.delete(item)
  if(estaCorreta){
   corretas.add(item)
  }
  mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas

} 

  quizItem.querySelector('dl').appendChild(dt)
}

//remove a resposta 'certa' da tela
quizItem.querySelector('dl dt').remove()

  //coloca a pergunta na tela 
  quiz.appendChild(quizItem);
};
 