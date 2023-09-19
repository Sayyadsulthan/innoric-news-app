export const getLocalStorageItem = (key) => {
  if (!key) {
    return false;
  }
  key = typeof key === "string" ? key : toString(key);
  return localStorage.getItem(key);
};

export const setLocalStorageItem = (key, value) => {
  if (!key || !value) {
    return false;
  }
  key = typeof key === "string" ? key : toString(key);
  value = typeof value === "string" ? value : toString(value);
  return localStorage.setItem(key, value);
};
export const removeLocalStorageItem = (key) => {
  if (!key) {
    return false;
  }
  key = typeof key === "string" ? key : toString(key);
  localStorage.removeItem(key);
  return true;
};

export const getFormBody = (data) => {
  const formData = [];

  for (const key in data) {
    const formKey = encodeURIComponent(key);
    const formval = encodeURIComponent(data[key]);
    formData.push(formKey + "=" + formval);
  }

  return formData.join("&");
};
