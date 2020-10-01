import { base_URLsearch } from './URL';
import insertLocations from './insertLocations';

export default async (value) => {
  return await fetch(`${base_URLsearch}&q=${value}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.error) {
        const array = data
          .map(({ name }) => name.toLowerCase())
          .filter((name) => {
            return name.includes(value.toLowerCase());
          });

        insertLocations(array);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
