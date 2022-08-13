export class Http {
  url: string;

  constructor() {
  }

  async sendRequest({url: any}) {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}${this.url}?populate=*`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
  }

  getProjects() {

  }
}
