// Array - Galeria

const galeria = [
  {
    id: 1,
    titulo: "Monitoramento por Drones",
    img: "./assets/img/drones.png",
  },
  {
    id: 2,
    titulo: "Plantio Inteligente",
    img: "./assets/img/plantio.png",
  },
  {
    id: 3,
    titulo: "Análise do Solo",
    img: "./assets/img/analise.png",
  },
  {
    id: 4,
    titulo: "Irrigação Automatizada",
    img: "./assets/img/irri.png",
  },
  {
    id: 5,
    titulo: "Colheita de Alta Performance",
    img: "./assets/img/colheita.png",
  },
  {
    id: 6,
    titulo: "Sensores no Campo",
    img: "img/galeria/sensores.jpg",
  },
  {
    id: 7,
    titulo: "Gestão Agrícola Digital",
    img: "img/galeria/gestao.jpg",
  },
  {
    id: 8,
    titulo: "Sustentabilidade e Inovação",
    img: "img/galeria/sustentabilidade.jpg",
  },
  {
    id: 9,
    titulo: "Equipe Especializada",
    img: "img/galeria/equipe.jpg",
  },
  {
    id: 10,
    titulo: "Tecnologia para o Futuro",
    img: "img/galeria/futuro.jpg",
  },
];

const cards = document.querySelector(".cards-galeria");
function renderizarGaleria() {
  cards.innerHTML = galeria
    .map((e) => {
      return `
      <div class="card-galeria" style="background: url('${e.img}'); background-size: cover; background-position: center top;">
        <div class="info-cards">
          <h3>${e.titulo}</h3>
        </div>
      </div>
      `;
    })
    .join("");
}

function limpezaGaleria() {
  cards.innerHTML = "";
}

const btn_Galeria = document.getElementById("btn-galeria");
let renderizar = false;

btn_Galeria.addEventListener("click", () => {
  if (renderizar === false) {
    renderizarGaleria();
    gsap.fromTo(
      ".card-galeria",
      {
        opacity: 0,
        y: 600,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.5,
        ease: "linear",
        y: 0,
      },
    );

    renderizar = true;
  } else {
    limpezaGaleria();
    renderizar = false;
  }
});

const perguntas = [
  {
    pergunta: "oi",
    resposta:
      "Olá! Seja bem-vindo à AgroNova Engenharia Agrícola 🌱🚜 Como posso ajudar?",
  },
  {
    pergunta: "ola",
    resposta:
      "Olá! Seja bem-vindo à AgroNova Engenharia Agrícola 🌱🚜 Como posso ajudar?",
  },
  {
    pergunta: "serviços",
    resposta: `Trabalhamos com:
- Irrigação inteligente
- Automação agrícola
- Monitoramento por sensores
- Energia solar rural
- Projetos agrícolas
- Consultoria técnica
`,
  },
  {
    pergunta: "orçamento",
    resposta:
      "Perfeito! Para solicitar um orçamento, me informe seu nome e qual serviço deseja.",
  },
  {
    pergunta: "irrigação",
    resposta:
      "Oferecemos soluções de irrigação inteligente para otimizar o uso da água e aumentar a produtividade.",
  },
  {
    pergunta: "automação",
    resposta:
      "Temos sistemas de automação agrícola para melhorar eficiência e reduzir custos.",
  },
  {
    pergunta: "energia solar",
    resposta:
      "Desenvolvemos projetos de energia solar rural para reduzir gastos com energia elétrica.",
  },
  {
    pergunta: "consultoria",
    resposta:
      "Nossa consultoria técnica ajuda a identificar melhorias e soluções para sua produção agrícola.",
  },
  {
    pergunta: "suporte",
    resposta:
      "Descreva o problema técnico que está enfrentando para que possamos ajudar.",
  },
  {
    pergunta: "contato",
    resposta:
      "Você pode falar com nossa equipe comercial diretamente pelo WhatsApp ou e-mail.",
  },
  {
    pergunta: "clima",
    resposta: "",
  },
];
const chat = document.getElementById("chat");
const input_chat = document.getElementById("input-chat");
const recebendo_mensagem = document.querySelector(".recebendo");
function chatbot() {
  const input = input_chat.value.toLowerCase();

  let respostas = "Não entendi sua pergunta.";

  const voce = document.createElement("div");
  voce.classList.add("voce");
  voce.innerHTML = input;

  chat.appendChild(voce);

  // cria typing indicator
  const typing = document.createElement("div");
  typing.classList.add("recebendo");
  typing.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;

  chat.appendChild(typing);
  chat.scrollTop = chat.scrollHeight;

  for (let i = 0; i < perguntas.length; i++) {
    if (input === perguntas[i].pergunta) {
      respostas = perguntas[i].resposta;
      break;
    }
  }

  setTimeout(() => {
    typing.remove();

    const bot = document.createElement("div");
    bot.classList.add("bot");
    escrever(bot, respostas);
    chat.appendChild(bot);
    chat.scrollTop = chat.scrollHeight;
  }, 1500);

  input_chat.value = "";
}

function escrever(elemento, texto) {
  elemento.textContent = "";
  let i = 0;

  const intervalo = setInterval(() => {
    elemento.textContent += texto[i];
    i++;

    if (i >= texto.length) {
      clearInterval(intervalo);
    }
  }, 100);
}
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    chatbot();
  }
});
