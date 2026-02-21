const asyncHandeler = (requestHandeler) => {
    (req, res, next) => {
        return Promise.resolve(requestHandeler(req, res, next)).catch((error) => next(error))
    }
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