const sidemenuTemplate = document.createElement("template");
sidemenuTemplate.innerHTML = `
<link rel="stylesheet" href="./../globals.css">

<aside>
<div>
    <img src="" alt="">
    <h1>Sisaluno</h1>
</div>
<nav>
    <ul>
        <a href="./index.php">
            <li>
                <slot name="house"></slot>
                <span>Inicio</span>
            </li>
        </a>
        <a href="./professor.php">
            <li>
                <slot name="person"></slot>
                <span>Professores</span>
            </li>
        </a>
        <a href="./aluno.php">
            <li>
                <slot name="user"></slot>
                <span>Alunos</span>
            </li>
        </a>
        <a href="./disciplinas.php">
            <li>
                <slot name="database"></slot>
                <span>Disciplinas</span>
            </li>
        </a>
    </ul>
</nav>
<nav>
    <ul>
    <a href="./index.php">
        <li>
            <slot name="logout"></slot>
            <span>Sair</span>
        </li>
    </a>
    </ul>
</nav>
</aside>

<script src="https://kit.fontawesome.com/19ad99d8f1.js" crossorigin="anonymous"></script>
`;

class SideMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot?.appendChild(sidemenuTemplate.content.cloneNode(true));
    }
}

customElements.define("side-menu", SideMenu);

