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
  document.querySelector('.root__details__primary__temperature').textContent =
    temperature + '°';
  document.querySelector('.root__details__primary__icon').src = icon;
  document.querySelector(
    '.root__details__primary__icon__desc'
  ).textContent = text;
  document.querySelector(
    '.root__details__secondary__time__localtime'
  ).innerHTML = `Local time: <span style="color: #3D3D3D;">${localtime}</span>`;
  document.querySelector(
    '.root__details__secondary__time__lastupdated'
  ).innerHTML = `Last updated: <span style="color: #3D3D3D;">${
    last_updated.split(' ')[1]
  }</span>`;

  animateSearch();
};
