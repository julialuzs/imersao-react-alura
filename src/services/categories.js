import { BASE_URL } from '../config/config';

export class CategoryService {
  constructor() {
    this.url = `${BASE_URL}/categories`;
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

  getCategoryById(id) {
    return fetch(`${this.url}/${id}`)
      .then(async (response) => {
        const responseString = await response.json();
        return responseString;
      });
  }
}
