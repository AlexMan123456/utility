// Overloads
function parseFormData<T>(
  formData: FormData,
  dataParser: (data: Record<string, string | Blob>) => T,
): T;
function parseFormData(formData: FormData): Record<string, string | Blob>;

// Actual function implementation
function parseFormData<T>(
  formData: FormData,
  dataParser?: (data: Record<string, string | Blob>) => T,
): Record<string, string | Blob> | T {
  const object: Record<string, string | Blob> = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });

  if (dataParser) {
    return dataParser(object);
  }
  return object;
}

export default parseFormData;
