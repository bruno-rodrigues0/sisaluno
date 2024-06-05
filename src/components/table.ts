const tableTemplate = document.createElement('template');

let tableContent = '';

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
        <td>01</td>
        <td>Bruno</td>
        <td>brunno2019</td>
        <td>brunorodrigues@gma.com</td>
        <td>09/09/2006</td>
        <td><slot name="pen"></slot></td>
        <td><slot name="trash"></slot></td>
    </tr>
`
+
// aqui vai o conteúdo processado
tableContent
+
`
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

const constructor = (response: Array<any>) => {
    response.map(item => {
        tableContent += 
        `   <tr>
                <td>${item?.id} </td>
                <td>${item?.nome} </td>
                <td>${item?.github} </td>
                <td>${item?.email} </td>
                <td>${item?.nascimento} </td>
            <tr>
        `
    })
}