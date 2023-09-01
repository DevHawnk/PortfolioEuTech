//------------------------------------------------------------------//

const words = ["Html css JavaScript", "Java"];
const textSpan = document.querySelector(".text-dynamic li span");
let wordIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[wordIndex].length) {
    textSpan.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (charIndex > 0) {
    textSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 40);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  }
}

window.addEventListener("load", () => {
  setTimeout(type, 1500);
});

//==========================================================================================//

let btnCode = document.getElementById("btnCode");
let btnSociais = document.getElementById("btnSociais");
let habilidadesCode = document.getElementById("habilidadesCode");
let habilidadesSociais = document.getElementById("habilidadesSociais");

btnCode.addEventListener("click", function () {
  habilidadesCode.classList.add("active");
  habilidadesSociais.classList.remove("active");
});

btnSociais.addEventListener("click", function () {
  habilidadesCode.classList.remove("active");
  habilidadesSociais.classList.add("active");
});

habilidadesCode.classList.add("active");

const tabIcons = document.querySelectorAll(".icons i");
const tabContentP = document.querySelectorAll(".js-cont-text p");

function activateTab(index) {
  tabContentP.forEach((pElement) =>
    pElement.classList.toggle("active", pElement === tabContentP[index])
  );
  tabIcons.forEach((iconElement) =>
    iconElement.classList.toggle("active", iconElement === tabIcons[index])
  );
}

function initializeTabs() {
  tabIcons.forEach((iconElement, index) => {
    iconElement.addEventListener("click", () => activateTab(index));
  });

  document.addEventListener("click", ({ target }) => {
    if (
      ![...tabIcons, ...tabContentP].some((element) => element.contains(target))
    ) {
      tabContentP.forEach((pElement) => pElement.classList.remove("active"));
      tabIcons.forEach((iconElement) => iconElement.classList.remove("active"));
    }
  });
}

initializeTabs();

const flipButton = document.querySelector(".flip-button");
const iconsContainer = document.querySelector(".icons");

flipButton.addEventListener("click", () => {
  iconsContainer.classList.toggle("flip");
});
const icons = document.querySelectorAll(".icons i");

icons.forEach((icon) => {
  const imageSrc = icon.dataset.image;
  if (imageSrc) {
    const tooltip = document.createElement("div");
    tooltip.classList.add("icon-tooltip");

    const image = document.createElement("img");
    image.src = imageSrc;
    image.alt = "Tooltip Image";

    tooltip.appendChild(image);
    icon.appendChild(tooltip);
  }
});
//==================================================//
$("#nav-toggle").click(function () {
  $(".nav-menu").toggleClass("nav-active");
});

$(".nav-link").click(function () {
  $(".nav-menu").removeClass("nav-active");
});

$(".nav-menu a").click(function (e) {
  e.preventDefault();
  var target = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(target).offset().top,
    },
    500
  );
});

//==================================================//

//==================================================//
//===================== validação ==========================//
function validateForm() {
  let nome = document.getElementById("nomeInput").value;
  let sobrenome = document.getElementById("sobrenomeInput").value;
  let email = document.getElementById("emailInput").value;
  let telefone = document.getElementById("telefoneInput").value;
  let mensagem = document.getElementById("mensagemInput").value;

  if (
    nome.trim() === "" ||
    sobrenome.trim() === "" ||
    email.trim() === "" ||
    telefone.trim() === "" ||
    mensagem.trim() === ""
  ) {
    alert("Por favor, preencha todos os campos");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, insira um email válido");
    return false;
  }

  const telefoneRegex = /^\d{2}\s?\d{8,9}$/;
  if (!telefoneRegex.test(telefone)) {
    alert("Por favor, insira um número de telefone válido com DDD");
    return false;
  }

  alert("Obrigado pelo contato!");

  return true;
}
//==================================================//
var arrow = document.querySelector(".arrow");

arrow.addEventListener("click", function () {
  window.location.href = "https://en.wikipedia.org/wiki/Homer_Simpson";
});
