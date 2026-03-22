class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something Went Wrong",
        errors = [],
        stack = "",
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;


        if (stack) {
            this.stack = stack;
        }
        else {
            Error.captureStackTrace(this, this.constructor); //it creates a stack trace for the error, excluding the constructor function itself from the trace. So your stack starts from the place where the error was created in app code, not from inside ErrorHandler internals.
        }
    }
}

export { ApiError };