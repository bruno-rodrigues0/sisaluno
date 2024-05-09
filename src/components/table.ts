const tableTemplate = document.createElement('template');
tableTemplate.innerHTML = `
<link rel="stylesheet" href="./../globals.css">
<link rel="stylesheet" href="./../styles/table.css">

<main>
<h2>
<slot name="titulo"></slot>
</h2>
<div class="table-container">
<div>
    <input type="text" name="" id="" placeholder="Pesquisar...">
    <button class="pesquisar"><slot name="search"></slot></button>
    <button class="cadastrar">Cadastrar novo aluno</button>
</div>

<table>
    <tr>
        <th class="cid">ID</th>
        <th class="nome">Nome</th>
        <th class="github">GitHub</th>
        <th class="email">Email</th>
        <th class="nascimento">Nascimento</th>
        <th class="action"></th>
        <th class="action"></th>
    </tr>
    <tr>
        <td class="cid">01</td>
        <td class="nome">Bruno Rodrigues</td>
        <td class="github">bruno-rodrigues0</td>
        <td class="email">brunorodriguesmtv0@gmail.com</td>
        <td class="nascimento">09/09/2006</td>
        <td class="action"> <button class="bac edit"><slot name="pen"></slot></button> </td>
        <td class="action"> <button class="bac delete"><slot name="trash"></slot></button> </td>
    </tr>
    <tr>
        <td class="cid">02</td>
        <td class="nome">Maria Fernanda Basbosa Firmo</td>
        <td class="github">fernandafirmo</td>
        <td class="email">mariafernandabarbosafirmo@gmail.com</td>
        <td class="nascimento">14/05/2006</td>
        <td class="action"> <button class="bac edit"><slot name="pen1"></slot></button> </td>
        <td class="action"> <button class="bac delete"><slot name="trash1"></slot></button> </td>
    </tr>
</table>
</div>
</main>
`;

class InfoTable extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot?.appendChild(tableTemplate.content.cloneNode(true));
    }
}

window.customElements.define('info-table', InfoTable);