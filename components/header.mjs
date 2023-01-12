export default class Header {
  constructor() {
    this.heading = "Galeria mea foto!";
    this.subHeading = "Vă prezint galeria mea foto!";
  }

  render() {
    return `
      <section class="text-center jumbotron" style="background-color:#FFFF33">
        <h1>${this.heading}</h1>
        <p>${this.subHeading}</p>
      </section>
   `;
  }
}