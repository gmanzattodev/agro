"use strict";
const inicio = document.querySelector(".inicio");
const servico = document.querySelector(".servicos");
const fundos = [inicio, servico];
const header = document.querySelector("header");
const celular = document.getElementById("celular");
const btn_celular = document.getElementById("btn-celular");
const tela = document.getElementById("tela");
const btn_desligamento = document.getElementById("desligamento");
const bloqueio = document.getElementById("bloqueio");
const telaSenha = document.getElementById("senha");
const principal = document.getElementById("principal");
const app_principal = document.getElementById("app-principal");
const map_regiao = document.querySelector(".map-regiao");
const voltar = document.getElementById("voltar");
const horas = document.getElementById("horas");
const wallpaper = document.getElementById("wallpaper");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  console.log(scroll);
  if ((scroll >= 800 && scroll < 1808) || scroll >= 2633) {
    header.style.backgroundColor = "var(--bg-secondary)";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

// SENHAS
const bolinhas = document.querySelectorAll(".bolinha");
const botoes = document.querySelectorAll(".btn button");
let posicao = 0;
let senhaDigitada = "";

function togleeclick(numero) {
  if (posicao < bolinhas.length) {
    bolinhas[posicao].classList.add("preenchida");
    senhaDigitada += numero;
    posicao++;
    console.log(senhaDigitada);
  }
  if (posicao)
    if (senhaDigitada.length === 6) {
      if (senhaDigitada === "123456") {
        telaSenha.classList.remove("active");
        principal.classList.add("active");
      } else {
        console.log("incorrect");
        bolinhas.forEach((bolinha) => {
          bolinha.classList.remove("preenchida");
        });
        senha = "";
        posicao = 0;
      }
    }
}
botoes.forEach((botao) => {
  botao.addEventListener("click", (e) => {
    e.preventDefault();
    const numero = botao.textContent;
    togleeclick(numero);
  });
});

function relogio() {
  const agora = new Date();
  const hora = String(agora.getHours()).padStart(2, "0");
  const minutos = String(agora.getMinutes()).padStart(2, "0");
  const segundos = String(agora.getSeconds()).padStart(2, "0");

  horas.innerHTML = `${hora}:${minutos}:${segundos}`;
}

setInterval(relogio, 1000);
relogio();
btn_celular.addEventListener("click", () => {
  celular.style.display = celular.style.display === "block" ? "none" : "block";

  if (celular.style.display === "block") {
    tela.classList.add("active");
  }
});
btn_desligamento.addEventListener("click", () => {
  btn_desligamento.style.transform = "translateX(2px)";

  bloqueio.classList.add("active");
  telaSenha.classList.remove("active");
  principal.classList.remove("active");
  map_regiao.classList.remove("active");

  setTimeout(() => {
    btn_desligamento.style.transform = "translateX(0)";
  }, 300);
});

bloqueio.addEventListener("click", () => {
  console.log("carregou");
  bloqueio.classList.remove("active");
  telaSenha.classList.add("active");
});

bloqueio.addEventListener("click", () => {
  bloqueio.classList.remove("active");
  telaSenha.classList.add("active");
});

app_principal.addEventListener("click", () => {
  map_regiao.classList.add("active");
});
voltar.addEventListener("click", () => {
  map_regiao.classList.remove("active");
});

wallpaper.addEventListener("click", () => {
  fundos.forEach((fundo) => {
    fundo.classList.toggle("fundomudado");
  });
});

const Appchat = document.getElementById("Appchat");
const agrochat = document.getElementById("agrochat");
const voltar_chat = document.getElementById("voltar-chat");
Appchat.addEventListener("click", () => {
  console.log("clicou");
  agrochat.classList.add("active");
});
voltar_chat.addEventListener("click", () => {
  agrochat.classList.remove("active");
  chat.innerHTML = "";
});

const central = document.getElementById("central");
const voltar_central = document.getElementById("voltar-central");
const appcentral = document.getElementById("appcentral");

appcentral.addEventListener("click", () => {
  central.classList.add("active");
});
voltar_central.addEventListener("click", () => {
  central.classList.remove("active");
});

const secoes = document.querySelectorAll(".secao-catalogo");

secoes.forEach((secao) => {
  secao.addEventListener("click", () => {
    const pai = secao.parentElement;
    const info = pai.querySelector(".catalogo-secao-info");

    info.classList.toggle("aumentar");
  });
});

// CONTATO

const navcontato = document.getElementById("navcontato");
const contato = document.getElementById("contato");
const junto = [contato, navcontato];
junto.forEach((e) => {
  e.classList.add("remoe");
});

const btn_contato = document.getElementById("btn-contato");
const titulo = new SplitType(".info-titulo h1, .info-titulo p", {
  types: "chars",
});

const timee = gsap.timeline({ paused:tue });
timee
  .to(".info-formulario .icone-info", {
    opacity: 1,
    duration: 1,
    y: -10,
  })

  .fromTo(
    titulo.chars,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      stagger: 0.1,
    },
    0,
  )
  .fromTo(
    ".form",
    {
      opacity: 0,
      scale: 0.01,
    },
    {
      opacity: 1,
      duration: 1,
      scale: 1,
    },
    3,
  );

btn_contato.addEventListener("click", () => {
  junto.forEach((e) => {
    e.classList.toggle("remove");
  });
  gsap.fromTo(
    navcontato,
    {
      opacity: 0,
      y: -200,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
    },
  );
  timee.play();
});

// SELECAO DE ASSUNTO
const assunto_input = document.getElementById("assunto-input");
const selecao = document.querySelector(".selecao-assunto");
const clickselect = document.querySelectorAll(".selecao-assunto p");
const select_icon = document.getElementById("select-icon");
clickselect.forEach((e) => {
  e.addEventListener("click", () => {
    assunto_input.value = e.textContent;
    selecao.classList.remove("active");
  });
});

assunto_input.addEventListener("click", () => {
  selecao.classList.toggle("active");
  gsap.fromTo(
    clickselect,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      stagger: 0.1,
    },
  );
});

//VALIDACAO FORMULARIO
let i = 0;
const contagem = document.getElementById("contagem");
const tel = document.getElementById("telefone");

tel.addEventListener("input", () => {
  contagem.textContent = tel.value.length;
  if (tel.value.length >= 15) {
    contagem.style.color = "red";
    contagem.textContent = "LIMITE";
  } else if (tel.value.length >= 5) {
    contagem.style.color = "green";
  } else {
    contagem.style.color = "black";
  }
});

function validar() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem").value;
  const assunto = document.getElementById("assunto-input").value;
  if (
    nome.trim() === "" ||
    email.trim() === "" ||
    telefone.trim() === "" ||
    assunto.trim() === ""
  ) {
    alert("completar as informacoes");
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    alert("Digite um e-mail válido.");
    return;
  }
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexEmail.test(email)) {
    alert("E-mail inválido.");
    return;
  }

  const texto = `Ola! ${nome}, esse é meu Email: ${email}, meu telefone: ${telefone}, ${mensagem}`;
  const numerotelefone = "5519995937457";

  const url = `https://wa.me/${numerotelefone}?text=${encodeURIComponent(texto)}`;
  window.open(url);
}

const navbar = document.querySelector(".navbar")
const menu = document.querySelector(".btn-header i")
menu.addEventListener("click", () => {
  navbar.classList.toggle("active")
})