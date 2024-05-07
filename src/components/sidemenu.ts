const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="./../globals.css">

<aside>
<div>
    <img src="" alt="">
    <h1>Sisaluno</h1>
</div>
<nav>
    <ul>
        <li>
            <i class="fa-solid fa-house"></i>
            <a href="./index.php">Inicio</a>
        </li>
        <li>
            <i class="fa-solid fa-person-chalkboard"></i>
            <a href="./professor.php">Professores</a>
        </li>
        <li>
            <i class="fa-solid fa-user"></i>
            <a href="./aluno.php">Alunos</a>
        </li>
        <li>
            <i class="fa-solid fa-database"></i>
            <a href="./disciplinas.php">Disciplinas</a>
        </li>
    </ul>
</nav>
<nav>
    <ul>
        <li>
              <i class="fa-solid fa-right-from-bracket"></i>
            <a href="">Logout</a>
        </li>
    </ul>
</nav>
</aside>

<script src="https://kit.fontawesome.com/19ad99d8f1.js" crossorigin="anonymous"></script>
`;

class SideMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot?.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("side-menu", SideMenu);

