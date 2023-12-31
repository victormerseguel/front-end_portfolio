const prefix = "https://victormerseguel.com/projects/";

const highlightsDB = [
  {
    id: 1,
    title: "Portfólio Videomaker",
    titleEn: "Videomaker Portfolio",
    description: `<p>Este é um projeto criado para o meu antigo trabalho como videomaker.</p>
                  <p>A criação dele foi feita em HTML, CSS e JavaScript pela simplicidade que o projeto exigia, pela otimização de SEO e pela praticidade.</p>
                  <p>Este projeto a principio foi criado de maneira desordenada, com conhecimentos básicos em cada uma das linguagens. Na verdade comecei a estudar mesmo, depois da criação deste projeto, porque, por mais que eu tenha um perfil autodidata que me permite realizar muitas coisas, sei que a técnica e o conhecimento correto são muito importante.</p>
                  <p>Depois que adquiri conhecimento, decidi refatorar o código, simplificando e aplicando boas práticas, que me permitiram estudar e atestar minha própria evolução. O resultado e a evolução deste projeto podem ser vistos no repositório do github que pode ser acessado pelo botão ao lado (ou acima, dependendo do dispositivo que esteja acessando :)</p>
                  <p>O conceito é de uma Single Page, mas que é totalmente manipulada por JavaScript, criando a sensação de navegação entre páginas e interatividade.</p>
                  `,
    descriptionEn: `<p>This is a project created for my previous job as a videomaker. Its development was done in HTML, CSS, and JavaScript due to the simplicity required by the project, SEO optimization, and convenience.</p>
                    <p>Initially, this project was created in a somewhat disorganized manner, with basic knowledge of each of the languages. In fact, I began to study in earnest after creating this project because, despite having a self-taught profile that allows me to accomplish many things, I understand that proper technique and knowledge are very important.</p>
                    <p>After acquiring knowledge, I decided to refactor the code, simplifying it and applying best practices, which allowed me to study and assess my own progress. The result and evolution of this project can be seen in the GitHub repository, which can be accessed through the button on the side (or above, depending on the device you are using).</p>
                    <p>The concept is that of a Single Page, but it is entirely manipulated by JavaScript, creating the sensation of navigating between pages and interactivity.</p>
                    `,
    icons: {
      html: true,
      css: true,
      javascript: true,
      react: false,
    },
    thumb: "project-portfolio.jpg",
    projectURL: prefix + "videomaker-portfolio",
    githubURL: "https://github.com/victormerseguel/victor-portfolio",
  },
  {
    id: 3,
    title: "iPhone 14 - Page Clone",
    titleEn: "iPhone 14 - Page Clone",
    description: `<p>Reconhecidamente pelo design e pela ótima experiência que a Apple oferece para seus usuários, decidi recriar com finalidades de estudo a página do iPhone 14 (o mais recente à época). Apesar de ser uma página basicamente estática, haviam alguns desafios que achei interessante de encarar. O primeiro é a harmonia entre os elementos contidos na página, uma forma de entender e estudar conceitos de programação em cima de referências de grandes empresas, o segundo foi a tentativa de criar, com pouco conhecimento e sem a ajuda de nenhuma biblioteca, um carrossel infinito que pode ser visto mais ao final da página. Com elementos que rodam independente uns dos outros e com interatividade com o mouse e controle do usuário. </p>
                  <p>O propósito foi chegar o mais próximo possível da referência, mas alguns elementos precisaram ser substituídos e adaptados como as fontes utilizadas e a supressão de algumas sessões.</p>
                  `,
    descriptionEn: `<p>Widely recognized for its design and the excellent user experience Apple offers, I decided to recreate, for study purposes, the page of the iPhone 14 (the latest at the time). Although it's a mostly static page, there were some challenges that I found interesting to tackle. The first one was achieving harmony among the elements on the page, a way to understand and study programming concepts based on references from major companies. The second challenge was attempting to create, with limited knowledge and without the use of any libraries, an infinite carousel that can be seen further down the page. With elements that rotate independently of each other and with interactivity with the mouse and user control.</p>
                    <p>The goal was to get as close as possible to the reference, but some elements needed to be replaced and adapted, such as the fonts used and the removal of some sections.</p>
                    `,
    icons: {
      html: true,
      css: true,
      javascript: true,
      react: false,
    },
    thumb: "project-iphone14.jpg",
    projectURL: prefix + "iphone14-clone",
    githubURL: "https://github.com/victormerseguel/iphone14_clone",
  },
  {
    id: 2,
    title: "Página de Captura",
    titleEn: "Landing Page",
    description: `<p>Este projeto é uma landing page simples, mas que neste portfólio se destaca por toda a criação ter sido realizada por mim; desde o design até o deploy.</p>
                  <p>Originalmente este trabalho foi realizado dentro de um projeto maior todo construído em React, mas que, por questões de confidencialidade, foi recriado para poder ser exibido.</p>
                  <p>A opção de faze-lo em React se deu pela possibilidade de criar as sessões separadas permitindo a reorganização de forma simples de acordo com os testes de tráfego e análises de comportamentos de visitas.</p>
                  `,
    descriptionEn: `<p>This project is a simple landing page, but it stands out in this portfolio because all the creation was done by me, from design to deployment.</p>
                    <p>Originally, this work was done within a larger project entirely built in React. However, due to confidentiality reasons, it was recreated for display purposes.</p>
                    <p>The choice to do it in React was made because it allowed for the creation of separate sections, enabling easy reorganization based on traffic testing and visitor behavior analysis.</p>
                    `,
    icons: {
      html: true,
      css: true,
      javascript: true,
      react: true,
    },
    thumb: "project-fabuloso.jpg",
    projectURL: prefix + "o-fabuloso-mundo",
    githubURL: "https://github.com/victormerseguel/o-fabuloso-mundo",
  },
  {
    id: 4,
    title: "Animação",
    titleEn: "Animation",
    description: `<p>Este projeto faz parte dos meu estudo em Programação Criativa, onde, por meio de JavaScript, formas e automação, são criadas animações e peças de arte digital.</p>
                  <p>É um trabalho muito divertido e desafiador que originalmente utiliza Canvas Sketch Util em sua criação mas que para este portfólio foi recriado em Vanilla JavaScript para que pudesse ser feito seu Deploy diretamente em código, sem que precisasse ser convertido em vídeo. </p>
                  <p>Para além da criação das formas, este projeto conta com uma adaptação aos diferentes tamanhos de tela, sendo recriado e gerando pontos proporcionais a cada tamanho, mantendo sempre sua harmonia visual, independente do dispositivo que esteja sendo utilizado.</p>
                  `,
    descriptionEn: `<p>This project is part of my studies in Creative Programming, where, through JavaScript, shapes, and automation, animations and digital art pieces are created. </p>
                    <p>It is a very fun and challenging work that originally uses Canvas Sketch Util in its creation, but for this portfolio, it was recreated in Vanilla JavaScript so that it could be deployed directly as code, without needing to be converted into a video.</p>
                    <p>In addition to creating shapes, this project adapts to different screen sizes, being recreated and generating proportional points for each size, always maintaining its visual harmony, regardless of the device being used.</p>
                    `,
    icons: {
      html: true,
      css: true,
      javascript: true,
      react: false,
    },
    thumb: "project-sketch1.jpg",
    projectURL: prefix + "sketch01",
    githubURL: "https://github.com/victormerseguel/sketch01",
  },
];

const allProjectsDB = [
  {
    id: 4,
    title: "Calculadora IMC em React",
    titleEn: "IMC Calculator in React",
    description: `<p>Este projeto foi realizado de duas maneiras diferentes, uma em Vanilla JavaScript e outro em React.js.</p>
                  <p>O propósito deste trabalho foi exercitar e estudar as semelhanças e diferenças de tecnologias semelhantes e as funcionalidades do uso de Libs e Frameworks.</p>
                  <p>Os pontos de foco do projeto foram a manipulação de estados de inputs com validações básicas, a lógica do cálculo, o retorno à partir de uma base de dados e a estilização de acordo com o resultado obtido.</p>
                  <p>É um projeto bastante simples, mas muito interessante para exercitar conceitos básicos e o funcionamento das tecnologias.</p>
                  `,
    descriptionEn: `<p>This project was carried out in two different ways, one in Vanilla JavaScript and the other in React.js.</p>
                    <p>The purpose of this work was to exercise and study the similarities and differences between similar technologies and the functionalities of using libraries and frameworks.</p>
                    <p>The project's focus points were the manipulation of input states with basic validations, the logic of calculations, fetching data from a database, and styling according to the obtained results.</p>
                    <p>It is a rather simple project but very interesting for practicing basic concepts and understanding how these technologies work.</p>
    `,
    icons: {
      html: true,
      css: true,
      javascript: true,
      react: true,
    },
    thumb: "project-imc.jpg",
    projectURL: prefix + "imc-react",
    githubURL: "https://github.com/victormerseguel/imc_calculator_react",
  },
  {
    id: 3,
    title: "Login do Instagram - Page Clone",
    titleEn: "Instagram Login - Page Clone",
    description: `<p>Este projeto tem como finalidade o estudo e análise de interfaces para estudar não apenas o código em si (que neste caso é bastante simples), mas também conceitos de design como cores, disposições, tamanhos etc., visto que o estudo a partir de interfaces de grandes empresas proporciona o contato com trabalho de grandes profissionais e as melhores práticas existentes no mercado.</p>
                  <p>Neste trabalho especificamente o foco está no HTML e CSS, com uma pequena	 inserção JavaScript para criar a mudança de tela do telefone afim de reproduzir a animação original da época.</p>
                  `,
    descriptionEn: `<p>The purpose of this project is to study and analyze interfaces, not only for the code itself (which, in this case, is quite simple) but also for design concepts such as colors, layouts, sizes, and so on. Studying interfaces from major companies provides exposure to the work of top professionals and the best practices in the industry.</p>
                    <p>In this particular project, the focus is on HTML and CSS, with a small amount of JavaScript added to create the phone screen change in order to reproduce the original animation from that time.</p>
                    `,
    icons: {
      html: true,
      css: true,
      javascript: true,
      react: false,
    },
    thumb: "project-instagram.jpg",
    projectURL: prefix + "instagram-login",
    githubURL: "https://github.com/victormerseguel/instagram_login_clone",
  },
  {
    id: 1,
    title: "Quiz DEV",
    titleEn: "Quiz DEV",
    description: `<p>Este projeto foi criado em React e, apesar da possibilidade de utilizar RouterDOM, neste optou-se por trabalhar com renderização condicional por meio de um Custom Hook que gerencia os estados de um useReducer além de prover um contexto a partir do hook useContext.</p>
    <p>O objetivo deste trabalho foi exercitar os conhecimentos em React à partir dos Hooks e explorar suas possibilidades.</p>
    <p>Além disso, o Quiz proporciona a possibilidade de escolha entre 3 temas, com ajudas para cada questão, opções renderizadas em ordem aleatória, representação visual de acertos e erros, contagem de acertos e um resultado final. Tudo de forma dinâmica baseado em um arquivo de dados que contem um array de objetos com todas as informações necessárias.</p>`,
    descriptionEn: `<p>This project was created in React, and despite the option to use RouterDOM, it was chosen to work with conditional rendering through a Custom Hook that manages the states of a useReducer and provides a context through the useContext hook.</p>
    <p>The goal of this work was to exercise knowledge in React using Hooks and explore their possibilities. </p>
    <p>Additionally, the Quiz offers the choice of 3 themes, with hints for each question, options rendered in random order, visual representation of correct and incorrect answers, score counting, and a final result. All dynamically based on a data file that contains an array of objects with all the necessary information.</p>
    `,
    icons: {
      html: true,
      css: true,
      javascript: true,
      react: true,
    },
    thumb: "project-quiz.jpg",
    projectURL: prefix + "quiz-dev",
    githubURL: "https://github.com/victormerseguel/quiz_app_react",
  },
  // {
  //   title: "Memories - Full Stack",
  //   titleEn: "Memories - Full Stack",
  //   description: "",
  //   descriptionEn: "",
  //   icons: {
  //     html: true,
  //     css: true,
  //     javascript: true,
  //     react: true,
  //   },
  //   thumb: "project-iphone14.jpg",
  //   projectURL: prefix + "",
  //   githubURL: "https://github.com/victormerseguel/memories_fullstack",
  //   videoSRC: "",
  // },
  // {
  //   id: 2,
  //   title: "Countdown",
  //   titleEn: "Countdown",
  //   description: `<p>Este é um projeto clássico que cria uma contagem regressiva à partir de dados mockados no programa, mas como existe um foco especial no Front-End, ele conta com a possibilidade do usuário poder personalizar título do evento, data, tema, imagem de fundo a partir de uma url.</p>
  //   <p>Foram utilizados diversos hooks neste projeto bem como a utilização do RouterDOM, da ContextAPI além de custos looks.</p>
  //   <p>Como diferencial e incremento do projeto, o próximo passo é adicionar a funcionalidade à Local Storage para que os dados persistam no navegador do usuário e não se percam no fechamento da página.</p>`,
  //   descriptionEn: `<p>This is a classic project that creates a countdown based on mocked data in the program, but with a special focus on Front-End, it allows the user to customize the event title, date, theme, and background image from a URL.</p>
  //   <p>Several hooks were used in this project, as well as the use of RouterDOM, ContextAPI, and custom hooks. </p>
  //   <p>As an enhancement, the next step is to add functionality to Local Storage so that the data persists in the user's browser and doesn't get lost when the page is closed.</p>
  //   `,
  //   icons: {
  //     html: true,
  //     css: true,
  //     javascript: true,
  //     react: true,
  //   },
  //   thumb: "project-countdown.jpg",
  //   projectURL: prefix + "countdown",
  //   githubURL: "https://github.com/victormerseguel/countdown_react",
  // },
  {
    id: 6,
    title: "Gerador de Senhas",
    titleEn: "Password Generator",
    description: `<p>Este é um formulário simples, que simula um formulário de inscrição onde o usuário deve cadastrar seus dados e criar uma senha, porém, há uma lógica neste programa que cria um gerador de senhas aleatórias de forma automática para auxiliar o usuário. </p>
    <p>Mas este gerador de senhas tem a possibilidade de customização, permitindo ao usuário selecionar a quantidade de caracteres que comporão a senha, se existirão letras e/ou números e/ou caracteres especiais, tornando assim o projeto mais completo e complexo em sua lógica. </p>
    <p>Além disso, há também um botão para que possa ser copiada a senha gerada para facilitar sua utilização.</p>`,
    descriptionEn: `<p>This is a simple form that simulates a registration form where the user must enter their data and create a password. However, there is logic in this program that automatically generates a random password to assist the user.</p>
    <p>This password generator has the possibility of customization, allowing the user to select the quantity of characters that will compose the password, whether there will be letters and/or numbers and/or special characters, making the project more comprehensive and complex in its logic.</p>
    <p>Additionally, there is a button to copy the generated password to facilitate its use.</p>
    `,
    icons: {
      html: true,
      css: true,
      javascript: true,
      react: false,
    },
    thumb: "project-password.jpg",
    projectURL: prefix + "password-generator",
    githubURL: "https://github.com/victormerseguel/password-generator",
  },
  {
    id: 9,
    title: "Gerador de QR Code",
    titleEn: "QR Code Generator",

    description: `<p>Este trata-se de um dos primeiros projetos de JavaScripts que tive a oportunidade de criar com o intuito de estudada e praticar suas funcionalidades. Ele se integra a uma API que, a partir de um texto inserido em um input, que pode ser uma mensagem ou mesmo uma url, gera um QR Code.</p>
    <p>É simples, mas bastante interessante!</p>`,
    descriptionEn: `<p>This is one of the first JavaScript projects I had the opportunity to create in order to study and practice its functionalities. It integrates with an API that, based on text entered in an input, which can be a message or even a URL, generates a QR Code. </p>
    <p>It is simple but quite interesting!</p>
    `,
    icons: {
      html: true,
      css: true,
      javascript: true,
      react: false,
    },
    thumb: "project-qrcode.jpg",
    projectURL: prefix + "qrcode-generator",
    githubURL: "https://github.com/victormerseguel/password-generator",
  },
  // {
  //   title: "Party-Time",
  //   titleEn: "Party-Time",
  //   description: "",
  //   descriptionEn: "",
  //   icons: {
  //     html: true,
  //     css: true,
  //     javascript: true,
  //     react: true,
  //   },
  //   thumb: "project-partytime.jpg",
  //   projectURL: prefix + "",
  //   githubURL: "https://github.com/victormerseguel/party_time",
  //   videoSRC: "",
  // },
  {
    id: 7,
    title: "Gerador de Box-Shadow",
    titleEn: "Box-Shadow Generator",

    description: `<p>Este é um projeto utilitário que tem muito uso no desenvolvimento Front-End, mais especificamente para criação de designs.</p>
    <p>A partir de controles deslizantes e um visualizador em tempo real, podemos alterar valores das propriedades que fazem parte do Box-Shadow e vermos os resultados imediatamente, facilitando e muito a implementação desta propriedade.</p>
    <p>O resultado da alteração dos controles gera uma regra que basta ser copiada e adicionada à regra de estilos para que possa ser utilizada no projeto final.</p>
    `,
    descriptionEn: `<p>This is a utility project that is widely used in Front-End development, specifically for design creation. </p>
    <p>Using sliders and a real-time viewer, we can change values of properties that are part of the Box-Shadow and see the results immediately, greatly facilitating the implementation of this property. </p>
    <p>The result of the control change generates a rule that just needs to be copied and added to the style rule to be used in the final project.</p>
    `,
    icons: {
      html: true,
      css: true,
      javascript: true,
      react: false,
    },
    thumb: "project-boxshadow.jpg",
    projectURL: prefix + "boxshadow-generator",
    githubURL: "https://github.com/victormerseguel/box-shadow_generator",
  },
  {
    id: 5,
    title: "Lista de Tarefas Avançada - Local Storage",
    titleEn: "Advanced ToDo List - Local Storage",
    description: `<p>Este é um dos clássicos dos projetos em JavaScript em que se pode criar uma lista de tarefas com a possibilidade de marcar as que já foram realizada, editar cada uma existente e excluir.</p>
    <p>Porém, diferentemente da maioria dos projetos, este tem alguns diferenciais que são o campo de busca, possibilitando filtrar as atividades por meus de títulos ou palavras chaves; filtro para separar tarefas concluídas, a serem realizadas e todas elas; além do salvamento na Local Storage, para que os dados persistam ao recarregamento de página e fechamento do navegador.</p>
    `,
    descriptionEn: `<p>This is one of the classics of JavaScript projects where you can create a to-do list with the ability to mark those that have been completed, edit each existing one, and delete. </p>
    <p>However, unlike most projects, this one has some unique features such as the search field, allowing filtering of activities by titles or keywords; a filter to separate completed tasks, to-dos, and all of them; and saving to Local Storage, so that the data persists upon page reload and browser closure.`,
    icons: {
      html: true,
      css: true,
      javascript: true,
      react: false,
    },
    thumb: "project-todo.jpg",
    projectURL: prefix + "todolist",
    githubURL:
      "https://github.com/victormerseguel/advanced_todo_list_localstorage",
  },
  {
    id: 8,
    title: "Calculadora IMC em JavaScript",
    titleEn: "IMC Calculator",
    description: `<p>Este projeto foi realizado de duas maneiras diferentes, uma em Vanilla JavaScript e outro em React.js.</p>
    <p>O propósito deste trabalho foi exercitar e estudar as semelhanças e diferenças de tecnologias semelhantes e as funcionalidades do uso de Libs e Frameworks.</p>
    <p>Os pontos de foco do projeto foram a manipulação de estados de inputs com validações básicas, a lógica do cálculo, o retorno à partir de uma base de dados e a estilização de acordo com o resultado obtido.</p>
    <p>É um projeto bastante simples, mas muito interessante para exercitar conceitos básicos e o funcionamento das tecnologias.</p>
    `,
    descriptionEn: `<p>This project was carried out in two different ways, one in Vanilla JavaScript and the other in React.js.</p>
      <p>The purpose of this work was to exercise and study the similarities and differences between similar technologies and the functionalities of using libraries and frameworks.</p>
      <p>The project's focus points were the manipulation of input states with basic validations, the logic of calculations, fetching data from a database, and styling according to the obtained results.</p>
      <p>It is a rather simple project but very interesting for practicing basic concepts and understanding how these technologies work.</p>
`,
    icons: {
      html: true,
      css: true,
      javascript: true,
      react: false,
    },
    thumb: "project-imc.jpg",
    projectURL: prefix + "imc-js",
    githubURL: "https://github.com/victormerseguel/imc_calculator_js",
  },
];

highlightsDB.sort((a, b) => {
  return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
});

allProjectsDB.sort((a, b) => {
  return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
});

export { highlightsDB, allProjectsDB };
