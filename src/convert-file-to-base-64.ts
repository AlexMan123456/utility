function convertFileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result === null) {
        reject(new Error("FILE_CONVERSION_ERROR"));
        return;
      }
      resolve(reader.result as string);
    };
    reader.onerror = () => {
      reject(new Error("FILE_READER_ERROR"));
    };
  });
}

export default convertFileToBase64;
