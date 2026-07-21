export function isEmail(value) {
  return String(value).includes("@");
}

export function isEmpty(value) {
  return String(value).length ? false : true;
}

export function hasAlphabets(value) {
  const reg = /[a-zA-Z]/;
  return reg.test(value);
}
