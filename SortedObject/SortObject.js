function sortByKeyAsc(arr, key) {
  return [...arr].sort((a, b) => {
    if (typeof a[key] === "number") {
      return a[key] - b[key];
    }
    return a[key].toString().localeCompare(b[key].toString());
  });
}