export const cleanObject = (obj) => {
  const filteredEntries = Object.entries(obj).filter(
    ([value]) => value !== undefined && value !== ""
  );
  return Object.fromEntries(filteredEntries);
};
