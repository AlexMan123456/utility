function truncate(stringToTruncate: string, maxLength: number = 5): string {
  return stringToTruncate.length > maxLength
    ? `${stringToTruncate.slice(0, maxLength)}...`
    : stringToTruncate;
}

export default truncate;
