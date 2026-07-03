gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".navbar a",
  {
    opacity: 0,
    y: -100,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
  },
);
gsap.from(".btn-header", {
  opacity: 0,
  duration: 3,
});

gsap.fromTo(
  ".aparecer",
  {
    opacity: 0,
    y: 100,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.2,
  },
);
gsap.fromTo(
  ".categoria .card",
  {
    opacity: 0,
    x: 300,
  },
  {
    opacity: 1,
    x: 0,
    stagger: 0.2,
    duration: 1,
  },
);

gsap.fromTo(
  ".so",
  {
    opacity: 0,
    y: 200,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".so",
      start: "top 80%",
    },
  },
);

const celular_app = document.querySelector(".celular-app");
const btn_tecnologia = document.querySelector(".btn-tecnologia");
const celularanimacao = document.querySelector(".celular");
const fechar_tablet = document.querySelector(".fechar-tablet")
const secao_tecnologia = document.querySelector(".secao-tecnologia")
const time = gsap.timeline({ paused: true });

time
  .to(celularanimacao, {
    x: -4,
    duration: 0.03,
    repeat: 1,
    yoyo: true,
    onComplete: () => {
      celular_app.style.display = "none";
    },
    onReverseComplete: () => {
      celular_app.style.display = "block";
    },
  })
  .to(celularanimacao, {
    x: 0,
    duration: 0.03,
  })
  .to(celularanimacao, {
    width: "1000px",
    height: "600px",
    onComplete: () => {
      secao_tecnologia.style.display = "block";
      fechar_tablet.style.display = "block"
    },
    onReverseComplete: () => {
      secao_tecnologia.style.display = "none";
      fechar_tablet.style.display = "none"
    },
  })

btn_tecnologia.addEventListener("click", () => {
  time.play();
});
fechar_tablet.addEventListener("click", () => {
  time.reverse();
});


