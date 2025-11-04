function createFormData<T extends Record<string, string | object | Blob>>(data: T): FormData {
  const formData = new FormData();
  for (const key in data) {
    if (data[key] instanceof Blob) {
      formData.append(key, data[key]);
    } else if (typeof data[key] === "object") {
      formData.append(key, JSON.stringify(data[key]));
    } else {
      formData.append(key, data[key]);
    }
  }
  return formData;
}

export default createFormData;
