export default class Thumbnail {
  constructor(props) {
    this.props = props;
  }
  render() {
    return `
      <div class="thumbnail">
        <img src="${this.props.srcThumbnail}" alt="photo">
        <div class="caption">
          <h3>${this.props.title}</h3>
          <p>${this.props.shortDescription}</p>
        </div>
      </div>
    `;
  }
}