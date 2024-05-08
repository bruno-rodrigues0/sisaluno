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
        <li>
            <slot name="house"></slot>
            <a href="./index.php">Inicio</a>
        </li>
        <li>
            <slot name="person"></slot>
            <a href="./professor.php">Professores</a>
        </li>
        <li>
            <slot name="user"></slot>
            <a href="./aluno.php">Alunos</a>
        </li>
        <li>
            <slot name="database"></slot>
            <a href="./disciplinas.php">Disciplinas</a>
        </li>
    </ul>
</nav>
<nav>
    <ul>
        <li>      
            <slot name="logout"></slot>
            <a href="">Sair</a>
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
        this.shadowRoot?.appendChild(sidemenuTemplate.content.cloneNode(true));
    }
}

customElements.define("side-menu", SideMenu);

