import myObject from './myObject.js';

(() => {

const styles = /*css*/ `
  p {
    color: red;
  }
`;

const htmlTemplate = /*html*/ `
  <style>
    ${styles}
  </style>
  <p>hi</p>
`;
console.log(myObject);
class Testing extends HTMLElement {

  constructor() {
    super()
    this.attachShadow({mode: 'open'});
    this.template = document.createElement('template');
    this.template.innerHTML = htmlTemplate;   
  }
}



customElements.define("simple-example", Testing);
})();