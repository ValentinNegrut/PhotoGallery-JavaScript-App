export default class DataHandler {
  static async fetchData() {
    try {
      const prop = await fetch('data.json');
      const data = await prop.json();

      return data;
    } catch(err) {
      console.log("Error", err)
    }
  }
}