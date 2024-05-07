const tableTemplate = document.createElement('template');
template.innerHTML = `

`;


class InfoTable extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot?.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('info-table', InfoTable);