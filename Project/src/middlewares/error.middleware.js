import { ApiError } from "../utils/ApiError.js";

/**
 * A centralized Express error handling middleware.
 *
 * @param {Error} err - The error object. Can be a custom ApiError or a generic Error.
 * @param {import("express").Request} req - The Express request object.
 * @param {import("express").Response} res - The Express response object.
 * @param {import("express").NextFunction} next - The Express next middleware function.
 */
const errorHandler = (err, req, res, next) => {
    let error = err;

    // Log the error to the console for debugging. 
    // In a production environment, you might use a more sophisticated logger like Winston.
    console.error(err.stack || err);

    // If the error is not an instance of our custom ApiError,
    // it could be a generic error or one from another library.
    // We'll check for common ones and convert them into an ApiError.
    if (!(error instanceof ApiError)) {
        // Mongoose Bad ObjectId
        if (err.name === 'CastError') {
            const message = `Resource not found. Invalid: ${err.path}`;
            error = new ApiError(400, message);
        }
        // Mongoose Duplicate Key Error
        else if (err.code === 11000) {
            const message = `Duplicate ${Object.keys(err.keyValue)} entered.`;
            error = new ApiError(400, message);
        }
        // Mongoose Validation Error
        else if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            const message = messages.join(', ');
            error = new ApiError(400, message);
        }
        // If it's none of the above, create a generic 500 error
        else {
            error = new ApiError(500, "Internal Server Error", false, err.stack);
        }
    }

    // Now that we have a standardized ApiError, send the response.
    const response = {
        ...error,
        message: error.message,
        ...(process.env.NODE_ENV === 'development' ? { stack: error.stack } : {}),
    };

    // Remove the stack from the error object before sending it to the client in production
    if (process.env.NODE_ENV !== 'development') {
       delete response.stack;
    }

    return res.status(error.statusCode).json(response);
};

export { errorHandler };
