import { BASE_URL } from '../config/config';

export class CategoryService {
  constructor() {
    this.url = `${BASE_URL}/categories`;
  }

  getAll() {
    return fetch(`${this.url}`)
      .then(async (response) => {
        if (response.ok) {
          const responseString = await response.json();
          return responseString;
        }

        throw new Error(response.statusText);
      });
  }

  getCategoriesWithVideos() {
    return fetch(`${this.url}?_embed=videos`)
      .then(async (response) => {
        if (response.ok) {
          const responseString = await response.json();
          return responseString;
        }

        throw new Error(response.statusText);
      });
  }

  getById(id) {
    return fetch(`${this.url}/${id}`)
      .then(async (response) => {
        const responseString = await response.json();
        return responseString;
      });
  }

  add(category) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(category),
    };

    fetch(`${this.url}`, options)
      .then(async (response) => {
        const responseString = await response.json();
        console.log(responseString);
      });
  }

  remove(id) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    };

    fetch(`${this.url}/${id}`, options)
      .then(async (response) => {
        const responseString = await response.json();
        console.log(responseString);
      });
  }
}
