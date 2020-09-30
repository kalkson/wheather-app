import { gsap } from 'gsap';

export default () => {
  const tl = gsap.timeline();

  const header = document.querySelector('.root__header');
  const searchInput = document.querySelector('.root__form__input');
  const button = document.querySelector('.root__form__button');

  console.log(header, searchInput, button);

  tl.fromTo(
    [header, button],
    { opacity: 1 },
    { duration: 0.7, opacity: 0, display: 'none' }
  );
  tl.to(searchInput, { duration: 1, y: '45vh', transform: 'scale(0.7)' });
  tl.to(searchInput, { duration: 0, bottom: '100px' });

  // tl.fromTo(header, { opacity: 1 }, { duration: 1, opacity: 0 });
  // tl.fromTo(button, { opacity: 1 }, { duration: 1, opacity: 0 });
  // tl.to(searchInput, { duration: 1, y: '30vh' });

  tl.play();
};
