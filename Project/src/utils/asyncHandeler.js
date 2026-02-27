// const asyncHandeler = (fn) => {
//     return (req, res, next) => {
//         Promise.resolve(fn(req, res, next))
//             .catch((error) => next(error))
//     }
// };


const asyncHandeler = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};



export { asyncHandeler };



// const asyncHandeler = () => {}
// const asyncHandeler = (func) => {()=> {}}
// const asyncHandeler = (func) => {async()=> {}}

// method -> 1

// const asyncHandeler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }



// method -> 2
/*
// This is a higher-order function that wraps an async route handler.
// Its purpose is to catch any errors that occur during the execution of the route handler
// and pass them to the centralized Express error handler.
// This version uses the more traditional async/await with a try/catch block.

const asyncHandeler = (requestHandeler) => {
  // This function is what Express will actually run.
  // It's marked as async so we can use await inside.
  return async (req, res, next) => {
    try {
      // We "try" to execute the original route handler function.
      await requestHandeler(req, res, next);
    } catch (error) {
      // If the handler throws an error (e.g., a database operation fails),
      // this catch block will execute.

      // We then pass the captured error to the 'next' function.
      // This sends it straight to our centralized error handling middleware.
      next(error);
     }
  };

  */