import { Response } from "express";

export const successResponse = <T>(
    res: Response,
    data: T,
    message: string = "Success",
    statusCode: number = 200
) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
    })
}

export const errorResponse = (
    res: Response,
    message: string = 'Internal Server Error',
    statusCode: number = 500,
    errorDetails?: any
) => {
    return res.status(statusCode).json({
        success: false,
        message,
        ...(errorDetails && { error: errorDetails})
    });
};