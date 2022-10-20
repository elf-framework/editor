const ROOT_URL = import.meta.env.BASE_URL;

export function url(urlString) {
  return ROOT_URL + urlString;
}
