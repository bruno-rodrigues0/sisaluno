const tableTemplate = document.createElement('template');

let tableContent = '';

type tipo = 'disc' | 'aluno';

const constructor = async (response: Array<any>, tipo: tipo) => {
    if(tipo === 'aluno'){
        tableContent = `
        <tr>
            <th class="cid">ID</th>
            <th class="nome">Nome</th>
            <th class="github">GitHub</th>
            <th class="email">Email</th>
            <th class="nascimento">Nascimento</th>
            <th class="action"></th>
            <th class="action"></th>
        </tr>
        `
    response.map(item => {
        tableContent +=
        `   <tr>
                <td>${item?.id} </td>
                <td>${item?.nome} </td>
                <td>${item?.github} </td>
                <td>${item?.email} </td>
                <td>${item?.nascimento} </td>
                <td><slot name="pen"></slot></td>
                <td><slot name="trash"></slot></td>
            <tr>
        `
    }
    )} else if(tipo === 'disc'){
        tableContent = `
        <tr>
            <th class="cid">ID</th>
            <th class="nome">Nome</th>
            <th class="ch">Carga Horaria</th>
            <th class="action"></th>
            <th class="action"></th>
        </tr>
        `
        response.map(item => {
            tableContent +=
            `<tr>
                <td>${item?.id} </td>
                <td>${item?.nome} </td>
                <td>${item?.ch} </td>
                <td><i class="fa-solid fa-pen"></i></td>
                <td> <i class="fa-solid fa-trash"></i></td>
            <tr>
            `
    }
    )}

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

    `
    +
    // aqui vai o conteúdo processado
    tableContent
    +
    `
    </table>
    </div>
    </main>

    <script src="https://kit.fontawesome.com/19ad99d8f1.js" crossorigin="anonymous"></script>
    `;
}

class InfoTable extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot?.appendChild(tableTemplate.content.cloneNode(true));
    }
}

window.customElements.define('info-table', InfoTable);
