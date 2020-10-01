import animateSearch from '/js/animations/search';

export default (data) => {
  console.log(data);

  const { name, localtime } = data.location;
  const {
    temp_c: temperature,
    feelslike_c: fellslike,
    wind_kph: wind,
    humidity,
    pressure_mb: pressure,
    last_updated,
    precip_mm: rain,
  } = data.current;
  const { icon, text } = data.current.condition;

  console.log(temperature);

  document.querySelector('.root__name__header').textContent = name;
  document.querySelector('.pressure div').textContent = pressure + ' hPa';
  document.querySelector('.wind div').textContent = wind + ' km/h';
  document.querySelector('.humidity div').textContent = humidity + ' %';
  document.querySelector('.rain div').textContent = rain + ' mm';
  document.querySelector('.root__details__temperature').textContent =
    temperature + '°';
  console.log(document.querySelector('.root__details__icon'));
  document.querySelector('.root__details__icon').src =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Cloud_font_awesome.svg/1200px-Cloud_font_awesome.svg.png';

  animateSearch();
};
