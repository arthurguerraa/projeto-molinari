const header = document.querySelector("#header");
const headerLogado = document.querySelector("#header-logado");
const footer = document.querySelector("#footer");


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

 if(footer){
    footer.innerHTML = `
    <div class="footer-container">

      <!-- Seção Institucional -->
      <div class="footer-col">
        <h3>Empresa</h3>
        <ul>
          <li><a href="#">Sobre Nós</a></li>
          <li><a href="#">Carreiras</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Imprensa</a></li>
        </ul>
      </div>

      <!-- Seção de Suporte -->
      <div class="footer-col">
        <h3>Suporte</h3>
        <ul>
          <li><a href="#">Ajuda</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Documentação</a></li>
        </ul>
      </div>

      <!-- Seção Legal -->
      <div class="footer-col">
        <h3>Legal</h3>
        <ul>
          <li><a href="#">Termos de Uso</a></li>
          <li><a href="#">Política de Privacidade</a></li>
          <li><a href="#">Cookies</a></li>
        </ul>
      </div>

      <!-- Contato + Redes Sociais -->
      <div class="footer-col">
        <h3>Contato</h3>
        <ul>
          <li>Email: contato@empresa.com</li>
          <li>Telefone: (00) 0000-0000</li>
        </ul>

        <div class="social">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
        </div>
      </div>

    </div>

    <!-- Linha de direitos autorais -->
    <div class="footer-bottom">
      © 2025 Nome da Empresa. Todos os direitos reservados.
    </div>`;
 }
  