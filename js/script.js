//efeito do botão voltar ao Topo

function topo() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

//Validação de Login

function login() {
  var logado = 0;
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;

  if (usuario == "lucio" && senha == "222333444") {
    window.location = "index.html";
    logado = 1;
  }

  if (logado == 0) {
    alert("Login ou Senha incorretos");
  }
}

//Ativar alert no botão cadastrar

function cadastro() {
  alert("Cadastrado com sucesso.");
  window.location.href = "index.html";
}
