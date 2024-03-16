const display = document.getElementById("display");

function adicionarNoDisplay(input) {
  display.value += input;
}

function limparDisplay() {
  display.value = "";
}

function calcular() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "error";
  }
}

function mudarTema(tema) {
  document.body.classList.remove("tema-claro", "tema-escuro", "tema-roxo");

  document.body.classList.add(tema);
}

const botoesTema = document.querySelectorAll("#temas button");

botoesTema.forEach((botao) => {
  botao.addEventListener("click", () => {
    const tema = botao.className.replace("tema-", "");

    mudarTema("tema-" + tema);
  });
});
