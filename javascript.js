// =========================
// BELLA CROSTA - JAVASCRIPT
// =========================


// -------- CADASTRO --------

function cadastrar(){

  const nome = document.getElementById("cadNome").value.trim();
  const email = document.getElementById("cadEmail").value.trim();
  const telefone = document.getElementById("cadTelefone").value.trim();
  const endereco = document.getElementById("cadEndereco").value.trim();
  const senha = document.getElementById("cadSenha").value.trim();

  if(nome === "" || email === "" || telefone === "" || endereco === "" || senha === ""){
    alert("Preencha todos os campos!");
    return;
  }

  const usuario = {
    nome,
    email,
    telefone,
    endereco,
    senha
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));

  alert("Cadastro realizado com sucesso!");

  window.location.href = "login.html";
}



// -------- LOGIN --------

function login(){

  const nome = document.getElementById("loginNome").value.trim();
  const senha = document.getElementById("loginSenha").value.trim();

  const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

  if(!usuarioSalvo){
    alert("Nenhum usuário cadastrado!");
    return;
  }

  if(nome === usuarioSalvo.nome && senha === usuarioSalvo.senha){

    localStorage.setItem("usuarioLogado", usuarioSalvo.nome);

    mostrarNotificacao("🔓 Login realizado com sucesso!");

    window.location.href = "index.html";

  }else{

    alert("Nome ou senha incorretos!");

  }

}



// -------- VERIFICAR LOGIN --------

function verificarLogin(){

  const usuario = localStorage.getItem("usuarioLogado");

  if(!usuario){
    window.location.href = "login.html";
  }

}



// -------- MOSTRAR NOME --------

function mostrarUsuario(){

  const usuario = localStorage.getItem("usuarioLogado");

  const nome1 = document.getElementById("nomeUsuario");
  const nome2 = document.getElementById("nomeUsuario2");

  if(nome1){
    nome1.innerText = usuario;
  }

  if(nome2){
    nome2.innerText = usuario;
  }

}



// -------- LOGOUT --------

function logout(){

  localStorage.removeItem("usuarioLogado");

  alert("Você saiu da conta!");

  window.location.href = "login.html";

}



// -------- COMPRAR PIZZA --------

function comprarPizza(nomePizza){

  alert("🍕 " + nomePizza + " adicionada ao pedido!");

}


function mostrarNotificacao(mensagem){

  let toast = document.getElementById("toast");

  toast.innerHTML = mensagem;

  toast.style.visibility = "visible";
  toast.style.opacity = "1";

  setTimeout(() => {

    toast.style.opacity = "0";

    setTimeout(() => {

      toast.style.visibility = "hidden";

    }, 500);

  }, 3000);

}