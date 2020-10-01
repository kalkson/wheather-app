export default (data) => {
  const wrapper = document.querySelector('.root__form__suggestion-list');
  wrapper.innerHTML = '';

  data.map((element) => {
    const button = document.createElement('button');
    button.textContent = element;

    wrapper.appendChild(button);
  });

  Array.from(wrapper.children).forEach((e) => {
    e.addEventListener('click', () => {
      wrapper.innerHTML = '';
      wrapper.style.display = 'none';
      const input = document.querySelector('.root__form__input');
      input.value = e.textContent;
      input.focus();
    });
  });
};
