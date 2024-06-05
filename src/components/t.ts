const rowTemplate = document.createElement('template');
rowTemplate.innerHTML = `
<link rel="stylesheet" href="./../globals.css">
<link rel="stylesheet" href="./../styles/table.css">
    <td class="cid"><slot name="cid"></slot></td>
    <td class="nome"><slot name="nome"></slot></td>
    <td class="github"><slot name="github"></slot></td>
    <td class="email"><slot name="email"></slot></td>
    <td class="nascimento"><slot name="nascimento"></slot></td>
    <td class="action"> <button class="bac edit"><slot name="pen1"></slot></button> </td>
    <td class="action"> <button class="bac delete"><slot name="trash1"></slot></button> </td>
`;

class RowTemplate extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot?.appendChild(rowTemplate.content.cloneNode(true));
    }
}

window.customElements.define('table-row', RowTemplate);