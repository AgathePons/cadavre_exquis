const asyncMWWrapper = (controllerMethod) => {
  const mmw = async (request, response, next) => {
    try {
      await controllerMethod(request, response, next);
    } catch (error) {
      next(error);
    }
  };
  return mmw;
};

module.exports = asyncMWWrapper;
