const cabecalho = document.querySelector("#cabecalho");
const cabecalhoLogado = document.querySelector("#cabecalho-logado");
const rodape = document.querySelector("#rodape");


// ===== CABEÇALHO NORMAL =====
if (cabecalho) {
    cabecalho.innerHTML = `
<nav class="navbar">
    <a href="index.html" class="navbar__logo">GOAL RADAR</a>

    <ul class="navbar__links">
      <li class="navbar__item"><a class="navbar__link" href="index.html">Início</a></li>
    </ul>

    <a href="login.html" class="navbar__botao-login">Login</a>
</nav>`;
}

// ===== CABEÇALHO LOGADO =====
if (cabecalhoLogado) {
    cabecalhoLogado.innerHTML = `
<nav class="navbar">
    <a href="index.html" class="navbar__logo">GOAL RADAR</a>

    <ul class="navbar__links">
      <li class="navbar__item"><a class="navbar__link" href="index.html">Início</a></li>
      <li class="navbar__item"><a class="navbar__link" href="ligas-premier-league.html">Ligas</a></li>
    </ul>

    <div class="navbar__usuario">
      <a href="perfil.html" class="navbar__usuario-link">
         <img src="imgs/user.jpg" alt="Foto do usuário" class="navbar__usuario-avatar">
      </a>
      <a href="login.html" class="navbar__botao-login">Logout</a>
    </div>
</nav>`;
}

// ===== RODAPÉ =====
 if (rodape) {
    rodape.innerHTML = `
<footer class="rodape">

  <div class="rodape__container">

    <!-- COLUNA INSTITUCIONAL -->
    <div class="rodape__coluna">
      <h3 class="rodape__titulo">Empresa</h3>
      <ul class="rodape__lista">
        <li class="rodape__item"><a href="#" class="rodape__link">Sobre Nós</a></li>
        <li class="rodape__item"><a href="#" class="rodape__link">Carreiras</a></li>
        <li class="rodape__item"><a href="#" class="rodape__link">Blog</a></li>
        <li class="rodape__item"><a href="#" class="rodape__link">Imprensa</a></li>
      </ul>
    </div>

    <!-- COLUNA SUPORTE -->
    <div class="rodape__coluna">
      <h3 class="rodape__titulo">Suporte</h3>
      <ul class="rodape__lista">
        <li class="rodape__item"><a href="#" class="rodape__link">Ajuda</a></li>
        <li class="rodape__item"><a href="#" class="rodape__link">Contato</a></li>
        <li class="rodape__item"><a href="#" class="rodape__link">FAQ</a></li>
        <li class="rodape__item"><a href="#" class="rodape__link">Documentação</a></li>
      </ul>
    </div>

    <!-- COLUNA LEGAL -->
    <div class="rodape__coluna">
      <h3 class="rodape__titulo">Legal</h3>
      <ul class="rodape__lista">
        <li class="rodape__item"><a href="#" class="rodape__link">Termos de Uso</a></li>
        <li class="rodape__item"><a href="#" class="rodape__link">Política de Privacidade</a></li>
        <li class="rodape__item"><a href="#" class="rodape__link">Cookies</a></li>
      </ul>
    </div>

    <!-- CONTATO E REDES SOCIAIS -->
    <div class="rodape__coluna">
      <h3 class="rodape__titulo">Contato</h3>

      <ul class="rodape__lista">
        <li class="rodape__item">Email: contato@empresa.com</li>
        <li class="rodape__item">Telefone: (00) 0000-0000</li>
      </ul>

      <div class="rodape__redes">
        <a href="#" class="rodape__rede">Instagram</a>
        <a href="#" class="rodape__rede">LinkedIn</a>
        <a href="#" class="rodape__rede">Facebook</a>
      </div>

    </div>
  </div>

  <!-- DIREITOS AUTORAIS -->
  <div class="rodape__direitos">
    © 2025 Goal Radar. Todos os direitos reservados.
  </div>

</footer>`;
}
  