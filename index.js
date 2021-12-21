module.exports = function xray-result-importer(string) {
  if (typeof string !== "string") throw new TypeError("This wants a string!");
  return string.replace(/\s/g, "");
};
