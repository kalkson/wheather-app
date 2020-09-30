// import { gsap } from 'gsap';
import downloadWeather from './../API/downloadWeather';

export default () => {
  const form = document.querySelector('.root__form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const value = document.querySelector('.root__form__input').value;

    if (value && value.length >= 3) {
      downloadWeather(value);
    }
  });
};
