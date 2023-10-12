const prefix = "http://127.0.0.1:5500/";

export const highlightsDB = [
  {
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
    projectURL: "https://google.com",
    githubURL: "https://github.com/victormerseguel/victor-portfolio",
    videoSRC: "",
  },
  {
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
    projectURL: "",
    githubURL: "https://github.com/victormerseguel/iphone14_clone",
    videoSRC: "",
  },
  {
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
      javascript: false,
      react: false,
    },
    thumb: "project-fabuloso.jpg",
    projectURL: prefix + "projects/o-fabuloso-mundo/index.html",
    githubURL: "https://github.com/victormerseguel/o-fabuloso-mundo",
    videoSRC: "",
  },
  {
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
    projectURL: "",
    githubURL: "https://github.com/victormerseguel/imc_calculator_react",
    videoSRC: "",
  },
];

export const allProjectsDB = [
  {
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
    projectURL: "",
    githubURL: "https://github.com/victormerseguel/instagram_login_clone",
    videoSRC: "",
  },
  {
    title: "Quiz DEV",
    titleEn: "Quiz DEV",
    description: ``,
    descriptionEn: ``,
    icons: {
      html: true,
      css: true,
      javascript: true,
      react: true,
    },
    thumb: "project-quiz.jpg",
    projectURL: "",
    githubURL: "https://github.com/victormerseguel/quiz_app_react",
    videoSRC: "",
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
  //   projectURL: "",
  //   githubURL: "https://github.com/victormerseguel/memories_fullstack",
  //   videoSRC: "",
  // },
  {
    title: "Countdown",
    titleEn: "Countdown",
    description: "",
    descriptionEn: "",
    icons: {
      html: true,
      css: true,
      javascript: true,
      react: true,
    },
    thumb: "project-countdown.jpg",
    projectURL: "",
    githubURL: "https://github.com/victormerseguel/countdown_react",
    videoSRC: "",
  },
  {
    title: "Gerador de Senhas",
    titleEn: "Password Generator",
    description: "",
    descriptionEn: "",
    icons: {
      html: true,
      css: true,
      javascript: true,
      react: false,
    },
    thumb: "project-password.jpg",
    projectURL: "",
    githubURL: "",
    videoSRC: "",
  },
  {
    title: "Gerador de QR Code",
    titleEn: "QR Code Generator",

    description: "",
    descriptionEn: "",
    icons: {
      html: true,
      css: true,
      javascript: true,
      react: false,
    },
    thumb: "project-qrcode.jpg",
    projectURL: "",
    githubURL: "https://github.com/victormerseguel/password-generator",
    videoSRC: "",
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
  //   projectURL: "",
  //   githubURL: "https://github.com/victormerseguel/party_time",
  //   videoSRC: "",
  // },
  {
    title: "Gerador de Box-Shadow",
    titleEn: "Box-Shadow Generator",

    description: "",
    descriptionEn: "",
    icons: {
      html: true,
      css: true,
      javascript: true,
      react: false,
    },
    thumb: "project-boxshadow.jpg",
    projectURL: "",
    githubURL: "https://github.com/victormerseguel/box-shadow_generator",
    videoSRC: "",
  },
  {
    title: "Lista de Tarefas Avançada - Local Storage",
    titleEn: "Advanced ToDo List - Local Storage",
    description: "",
    descriptionEn: "",
    icons: {
      html: true,
      css: true,
      javascript: true,
      react: false,
    },
    thumb: "project-todo.jpg",
    projectURL: "",
    githubURL:
      "https://github.com/victormerseguel/advanced_todo_list_localstorage",
    videoSRC: "",
  },
  {
    title: "Calculadora IMC",
    titleEn: "IMC Calculator",
    description: "",
    descriptionEn: "",
    icons: {
      html: true,
      css: true,
      javascript: true,
      react: false,
    },
    thumb: "project-imc.jpg",
    projectURL: "",
    githubURL: "https://github.com/victormerseguel/imc_calculator_js",
    videoSRC: "",
  },
];
