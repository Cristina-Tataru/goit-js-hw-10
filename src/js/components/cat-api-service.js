import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_cVfnC9lRBVdbsPJae8qrBaDalf8GTD4m8AHmZrAmiriMZ34TLW36LYrCQUmtKJ8u';

export class CatApiService {
  //* Added Private Class Elements
  #BASE_URL = 'https://api.thecatapi.com/v1/';
  #END_POINTS = {
    BREEDS: 'breeds',
    IMAGES_SEARCH: 'images/search',
  };

  // Function which return all the cats (promise)
  fetchBreeds() {
    const url = `${this.#BASE_URL}${this.#END_POINTS.BREEDS}`;
    return axios.get(url);
  }

  // Function which return the cat (promise) by ID
  fetchCatByBreed(breedId) {
    const url = `${this.#BASE_URL}${
      this.#END_POINTS.IMAGES_SEARCH
    }?breed_ids=${breedId}`;
    return axios.get(url);
  }
}