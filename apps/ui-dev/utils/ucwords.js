export function ucwords(str) {
  return (" " + str).replace(/ [\w]/g, (w) => w.toLocaleUpperCase()).trim();
}
