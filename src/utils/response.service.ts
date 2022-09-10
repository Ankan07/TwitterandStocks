export class ResponseService {
  constructor() {}

  sendResponse(statusCode: number, message: string, data?: any) {
    return {
      statusCode,
      message,
      data,
    };
  }
}
