module.exports = function fromCallback(useCallback) {
  return new Promise(function (resolve, reject) {
    var callback = function (error, value) {
      if (error) reject(error);
      else resolve(value);
    }
    useCallback(callback);
  });
}