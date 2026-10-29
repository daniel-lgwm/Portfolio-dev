gsap.from(".skill", {
    y: -20,
    opacity: 0,
    duration: 1.3
});

gsap.from(".descricao02", {
    x: -50,
    opacity: 0,
    duration: 1.3
});

gsap.from(".descricao01", {
    x: -25,
    opacity: 0,
    duration: 1.2
});

gsap.from(".contato", {
    scale: 0,
    duration: 0.7,
    delay: 1.2
});

gsap.from(".skill", {
    opacity: 0,
    y: 30,
    duration: 0.7
});

gsap.to(".fotodeperfil", {
    scale: 0,
    opacity: 0,
    duration: 1
});

gsap.from(".titulo", {
    x: 40,
    opacity: 0,
    duration: 1,
    delay: 0.5
});

const translations = {

    pt: {
        title: "Desenvolvedor de Software em Formação",
        subtitle: "Desenvolvendo soluções web com foco frontend, backend e APIs REST",
        about: "Sou estudante de Análise e Desenvolvimento de Sistemas e Desenvolvedor de Software em formação, com foco no desenvolvimento web, frontend, backend e criação de  APIs REST. Trabalho com tecnologias como HTML, CSS, JavaScript, TypeScript, Node.js, Express e SQLite, aplicando meus conhecimentos em projetos práticos que envolvem interfaces responsivas, lógicas de programação, integração com banco de dados e desenvolvimento de funcionalidades. Busco evoluir continuamente, aprimorar minhas habilidades e construir soluções funcionais, organizadas e eficientes, transformando ideias em aplicações reais.",
        project: "PROJETO",
        description: "Landing Page moderna para barbearia desenvolvida com HTML, CSS e JavaScript. Possui design responsivo, modo escuro, animações e interface intuitiva. O projeto está hospedado na Vercel e disponivel no GitHub, com planos de evolução para um sistema completo de agendamento utilizando backend e banco de dados.",
        contact: "CONTATO",
        projectbutton: "Ver Projeto",
        skills: "Habilidades e Competências",
        descriptionproject03: " API para gerenciamento de tarefas, desenvolvida para praticar construção de serviços backend, rotas HTTP e integração com banco de dados.",
        projectbutton02: "Ver Projeto"
    },

    en: {
        title: "Software Developer in Training",
        subtitle: "Building web solutions focused on frontend, backend and REST APIs",
        about: "I am an Analysis and Systems Development student and a software developer in training, focuse on web development, frontend, backend, and REST API development. I work with technologies such as HTML, CSS, JavaScript, TypeScript, Node.js, Express, and SQLite, applying my knowledge to pratical projects involving responsive interfaces, programming logic, database integration, and feature development. I am commited to continously improving my skills and building functional, well-structure, and efficient solutions, turning ideas into real-world applications.",
        project: "PROJECT",
        description: "A modern landing page for a barbershop built with HTML, CSS, and JavaScript. It features a responsive design, dark mode, smooth animations, and an intuitive user interface. The project is deployed on Vercel and available on GitHub, with future plans to evolve it into a complete appointment booking system powered by a backend and database.",
        contact: "CONTACT ME",
        projectbutton: "View Project",
        skills: "Skills & Expertise",
        descriptionproject03: "API for task management, built to practice creating backend services, HTTP routes, and database integration.",
        projectbutton02: "View Project"
    }

};

function changeLanguage(language) {

    const elements =
    document.querySelectorAll("[data-translate]");

    elements.forEach((element) => {

        const Key =
     element.dataset.translate;

        element.textContent =
     translations[language][Key];

    });

}

const ptbutton =
document.getElementById("pt");
const enbutton =
document.getElementById("en");

ptbutton.addEventListener("click", () => 
    {
        changeLanguage("pt");
    });

enbutton.addEventListener("click", () => 
    {
        changeLanguage("en");
    });   