/**
 * Represents a search trough an array.
 * @function search
 * @param {Array} array - The array you wanna search trough
 * @param {string} key - The key to search for
 * @param {string} [prop] - The property name to find it in
 */

export function search(array: any[], key: string, prop: string) {
  // Optional, but fallback to key['name'] if not selected
  prop = typeof prop === "undefined" ? "name" : prop;
  const searchResault = array.filter((i: any) => i[prop].includes(key));
  return searchResault;
}
