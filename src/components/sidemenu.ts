const template = document.createElement('template');
template.innerHTML = `
<style>
*{
    margin: 0;
    padding: 0;
    line-height: 1.5;
    box-sizing: border-box;
}

li{
    list-style: none;
}

a{
    text-decoration: none;
    color: white;
}

a:hover{
    border-bottom: 1px solid white;
}


input{
    border: none;
    border-radius: 8px;
}

body{
    display: flex;
}

aside {
    background-color: #223648;
    width: 350px;
    height: 100vh;
    padding: 32px;
    color:  white !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

aside > nav > ul{
    display: flex;
    flex-direction: column;
    gap: 16px;
}

aside > nav > ul > li > a{
    color: white !important;
    font-size: larger;
    border-bottom: 1px solid #223648;
    transition: 0.1s ease-in-out;
}

aside > nav > ul > li {
    display: flex;
    gap: 12px;
    align-items: center;
}

aside > div {
    display: flex;
    gap: 16px;
}

aside > div > h1 {
    font-size: xx-large;
}

</style>

<aside>
<div>
    <img src="" alt="">
    <h1>Sisaluno</h1>
</div>
<nav>
    <ul>
        <li>
            <i class="fa-solid fa-house"></i>
            <a href="./../index.php">Inicio</a>
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


class SideMenu extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot?.appendChild(template.content.cloneNode(true));
    }
}


window.customElements.define('side-menu', SideMenu);