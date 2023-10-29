const logger = (param) => (state) => (next) => (action) => {
  console.log('Logging', param);
  return next(action);
};

export default logger;
