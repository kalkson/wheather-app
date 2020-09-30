import { base_URL } from './URL';
import insertData from './insertData';

export default async (city) => {
  return await fetch(`${base_URL}&q=${city}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.error) {
        insertData(data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
