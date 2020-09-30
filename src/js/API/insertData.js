import animateSearch from '/js/animations/search';

export default (data) => {
  console.log(data);
  const details = document.querySelector('.root__details');
  details.textContent = data.current.feelslike_c;

  animateSearch();
};
