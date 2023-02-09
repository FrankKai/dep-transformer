export const transformer = (version) => {
  return version
    .split(":")
    .map((item) => item.trim().replace(/\"/g, ""))
    .join("@");
};
