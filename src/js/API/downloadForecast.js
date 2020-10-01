import { base_URLforecast } from './URL';

export default async (city) => {
  return await fetch(`${base_URLforecast}&q=${city}&days=10`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.error) {
        console.log(data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
