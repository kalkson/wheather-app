import { gsap } from 'gsap';

export default () => {
  const tl = gsap.timeline();

  const header = document.querySelector('.root__header');
  const searchInput = document.querySelector('.root__form__input');
  const button = document.querySelector('.root__form__button');
  const detailsWrapper = document.querySelector('.root__details');
  const infoWrapperElements = Array.from(
    document.querySelector('.root__details__info').children
  );
  const locationHeader = document.querySelector('.root__name__header');

  gsap.fromTo(
    locationHeader,
    { transform: 'translateY(-50px)', opacity: 0 },
    { duration: 1, ease: 'ease-in', transform: 'translateY(0)', opacity: 1 }
  );

  tl.fromTo(
    [header, button],
    { opacity: 1 },
    { duration: 0.7, opacity: 0, display: 'none' }
  );
  tl.to(searchInput, { duration: 1, y: '40vh', transform: 'scale(0.6)' });
  tl.fromTo(
    detailsWrapper,
    { display: 'none', opacity: 0 },
    { duration: 1, display: 'flex', opacity: 1 }
  );
  infoWrapperElements.forEach((element) => {
    tl.fromTo(
      element,
      { opacity: 0, y: 20 },
      { duration: 0.25, opacity: 1, y: 0 }
    );
  });

  // tl.fromTo(header, { opacity: 1 }, { duration: 1, opacity: 0 });
  // tl.fromTo(button, { opacity: 1 }, { duration: 1, opacity: 0 });
  // tl.to(searchInput, { duration: 1, y: '30vh' });

  tl.play();
};
