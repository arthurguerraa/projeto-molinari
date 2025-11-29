const header = document.querySelector("#header");
const headerLogado = document.querySelector("#header-logado");


if(header){
    header.innerHTML = `
<nav class="navbar">
    <a href="index.html">
      <div class="logo">GOAL RADAR</div>
    </a>

    <ul class="nav-links">
      <li><a href="index.html">Início</a></li>
      <li><a href="sobre.html">Sobre Nós</a></li>
    </ul>

    <a href="login.html" class="btn-login">Login</a>
  </nav>`;
}

 if(headerLogado){
    headerLogado.innerHTML = `
  <nav class="navbar">
    <div class="logo">LOGO</div>

    <ul class="nav-links">
      <li><a href="index.html">Início</a></li>
      <li><a href="sobre.html">Sobre Nós</a></li>
      <li><a href="ligas-premier-league.html">Ligas</a></li>
    </ul>

    <div class="user-area">
      <a href="perfil.html"><img src="imgs/user.jpg" alt="Foto do usuário" class="user-avatar"></a>
      <a href="login.html" class="btn-login">Logout</a>
    </div>
  </nav>`;
 }
  