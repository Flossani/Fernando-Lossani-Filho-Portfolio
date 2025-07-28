const frases = [
    "Back-end.",
    "Inteligência Artificial.",
    "Data & Analytics."
];

const elemento = document.getElementById("typing-text");
let fraseIndex = 0;
let charIndex = 0;
let deletando = false;

// Função para simular a digitação
function digitar() {
    const textoAtual = frases[fraseIndex];
    if (!deletando) {
        elemento.textContent = textoAtual.substring(0, charIndex++);
        if (charIndex > textoAtual.length) {
            deletando = true;
            setTimeout(digitar, 1000);
        } else {
            setTimeout(digitar, 100);
        }
    } else {
        elemento.textContent = textoAtual.substring(0, charIndex--);
        if (charIndex === 1) {
            deletando = false;
            fraseIndex = (fraseIndex + 1) % frases.length;
        }
        setTimeout(digitar, 50);
    }
}

// Inicia a animação após o carregamento da página
document.addEventListener("DOMContentLoaded", digitar);

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const unlockScreen = document.getElementById("unlock-screen");
    const sobreConteudo = document.getElementById("sobre-conteudo");
    const sobreImagens = document.getElementById("sobre-imagens");

    window.addEventListener("scroll", function () {
        const sectionTop = document.getElementById("sobre").offsetTop;
        const scrollPos = window.scrollY + window.innerHeight / 2;

        if (scrollPos >= sectionTop) {
            unlockScreen.classList.add("unlocked");

            // Exibir conteúdo da seção após 1 segundo
            setTimeout(() => {
                sobreConteudo.classList.add("visible");
                sobreImagens.classList.add("visible");
            }, 1000);

            // Aguarde o tempo da animação antes de ocultar o display
            setTimeout(function() {
                document.getElementById("unlock-screen").style.display = "none";
            }, 1000);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projetos = document.querySelectorAll(".projetos");

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = `${index * 0.2}s`;
                entry.target.classList.add("visivel");
            }
        });
    }, { threshold: 0.3 });

    projetos.forEach(projeto => observer.observe(projeto));
});

document.addEventListener('scroll', function() {
    const skills = document.querySelectorAll('.skill');
    const screenPosition = window.innerHeight / 1.3;

    skills.forEach(skill => {
        const skillPosition = skill.getBoundingClientRect().top;

        if (skillPosition < screenPosition) {
            skill.classList.add('visible');
        }
    });
});

window.addEventListener("scroll", function () {
    const contatoSecao = document.querySelector(".contato-secao");
    const posicao = contatoSecao.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;
    
    if (posicao < alturaTela - 100) {
        contatoSecao.style.display = "block";
        setTimeout(() => {
            contatoSecao.style.opacity = "1";
            contatoSecao.style.transform = "translateY(0)";
        }, 100);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
