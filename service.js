const endPointRoot = "https://newsapi.org/v2";
const key = "086a7a7579144fe6a410f78be82dd0ff";
const currenciesKey = "0ac8dc7e6d8fdcb8572ff00e3f012059";
const weatherKey = "53922eaaa9c69ae715892dc3b0b1dcfd";

export async function getJpNews() {
  let result = await fetch(
    `${endPointRoot}/top-headlines?country=jp&apiKey=${key}`
  ).then(response => response.json());
  console.log(result);

  return result.articles;
}

export async function getBusinessNews(country, query) {
  let result = await fetch(
    `${endPointRoot}/top-headlines?country=${country}&category=business&q=${query}&apiKey=${key}`
  ).then(response => response.json());
  return result.articles;
}

export async function getEntertainmentNews(country, query) {
  let result = await fetch(
    `${endPointRoot}/top-headlines?country=${country}&category=entertainment&q=${query}&apiKey=${key}`
  ).then(response => response.json());
  return result.articles;
}

export async function getHealthNews(country, query) {
  let result = await fetch(
    `${endPointRoot}/top-headlines?country=${country}&category=health&q=${query}&apiKey=${key}`
  ).then(response => response.json());
  return result.articles;
}

export async function getScienceNews(country, query) {
  let result = await fetch(
    `${endPointRoot}/top-headlines?country=${country}&category=science&q=${query}&apiKey=${key}`
  ).then(response => response.json());
  return result.articles;
}

export async function getTechnologyNews(country, query) {
  let result = await fetch(
    `${endPointRoot}/top-headlines?country=${country}&category=technology&q=${query}&apiKey=${key}`
  ).then(response => response.json());
  return result.articles;
}

export async function getSportsNews(country, query) {
  let result = await fetch(
    `${endPointRoot}/top-headlines?country=${country}&category=sports&q=${query}&apiKey=${key}`
  ).then(response => response.json());
  return result.articles;
}
export function formattedDate(date) {
  const formattedDate = new Date(Date.parse(date));
  const options = { year: "numeric", month: "short", day: "numeric" };
  return formattedDate.toLocaleString("en", options);
}

export function japaneseDate(date) {
  const japaneseDate = new Date(Date.parse(date));
  const dd = String(japaneseDate.getDate()).padStart(2, "0");
  const mm = String(japaneseDate.getMonth() + 1).padStart(2, "0");
  const yyyy = japaneseDate.getFullYear();

  const year = yyyy + "年";
  const month = mm + "月";
  const day = dd + "日";
  return `${year}${month}${day}`;
}

export function japaneseWeekday(date) {
  const weekday = new Date().getDay();

  const dayNames = {
    0: "日",
    1: "月",
    2: "火",
    3: "水",
    4: "木",
    5: "金",
    6: "土"
  };

  return `${dayNames[weekday]}`;
}

export async function getCurrencyRates() {
  let result = await fetch(
    `http://www.apilayer.net/api/live?access_key=${currenciesKey}`
  ).then(response => response.json());
  return result.quotes;
}

export async function getWeather(lat, lon) {
  let result = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=53922eaaa9c69ae715892dc3b0b1dcfd`
  ).then(response => response.json());
  return result;
}
