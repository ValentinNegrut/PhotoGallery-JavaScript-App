import DataHandler from "./components/dataHandler.mjs";
import SectionGrid from "./components/sectionGrid.mjs";
import Header from "./components/header.mjs";


class App {
  constructor() {
    this.data = [];
  }

  async render(container) {
    this.data = await DataHandler.fetchData();
  
    const mainObj = document.createElement("main");
    mainObj.innerHTML = `
      ${new Header().render()}
      ${new SectionGrid(this.data).render()}
    `;
    
    const documentFragment = document.createDocumentFragment();
    documentFragment.appendChild(mainObj);

    container.appendChild(documentFragment);
  }
}

const app = new App();
app.render(document.querySelector("body"));