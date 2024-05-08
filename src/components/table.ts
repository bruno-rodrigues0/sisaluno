const tableTemplate = document.createElement('template');
tableTemplate.innerHTML = `

`;


class InfoTable extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot?.appendChild(tableTemplate.content.cloneNode(true));
    }
}

window.customElements.define('info-table', InfoTable);