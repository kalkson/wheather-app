import animateSearch from '/js/animations/search';

export default (data) => {
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

  document.querySelector('.root__name__header').textContent = name;
  document.querySelector('.pressure div').textContent = pressure + ' hPa';
  document.querySelector('.wind div').textContent = wind + ' km/h';
  document.querySelector('.humidity div').textContent = humidity + ' %';
  document.querySelector('.rain div').textContent = rain + ' mm';
  document.querySelector('.root__details__temperature').textContent =
    temperature + '°';
  document.querySelector('.root__details__icon').src = icon;

  animateSearch();
};
