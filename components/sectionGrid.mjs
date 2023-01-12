import Thumbnail from "./thumbnail.mjs";

export default class SectionGrid {
  constructor(data) {
    this.data$ = data;
    this.thumbnails = [];
    this.thumbnailsHTML = "";
  }

  get thumbnailFunc() {
    this.thumbnails.forEach(thumbnail_1 =>  this.thumbnailsHTML += `<div class="col-md-4 col-xs-6">${thumbnail_1.render()}</div>`);

    return  this.thumbnailsHTML;
  }
  

  dataRenderFunc() {
    this.data$.forEach(thumbnail => this.thumbnails.push(new Thumbnail(thumbnail)));
  }


  render() {
    this.dataRenderFunc();

    return `
      <div class="container">
            ${this.thumbnailFunc}
        <div>
      <div> 
    `
  }
}