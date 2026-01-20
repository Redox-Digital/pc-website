export function timestampToString(date: string, onlyYear?: boolean): string {
  const timestamp = new Date(date);

  // Extracting components of the date
  const day = timestamp.getDate() < 10 ? `0${timestamp.getDate()}` : timestamp.getDate();
  const month =
    timestamp.getMonth() + 1 < 10 ? `0${timestamp.getMonth() + 1}` : timestamp.getMonth() + 1; // Months are zero-indexed
  const year = timestamp.getFullYear();

  // Formatting the date as DD.MM.YYYY
  return onlyYear ? `${year}` : `${day}.${month}.${year}`;
}
