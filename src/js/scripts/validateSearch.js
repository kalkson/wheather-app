import downloadLocations from './../API/downloadLocations';

export default () => {
  const input = document.querySelector('.root__form__input');
  input.autoComplete = false;
  console.dir(input);

  input.addEventListener('keyup', (e) => {
    if (e.keyCode !== 13) {
      const value = e.target.value;

      if (value && value.length >= 1) {
        const wrapper = document.querySelector('.root__form__suggestion-list');
        wrapper.style.display = 'block';
        downloadLocations(value);
      }
    }
  });
};
