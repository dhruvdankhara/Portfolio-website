class ApiResponse {
  constructor(statusCode, message, data) {
    this.status = statusCode >= 200 && statusCode < 300;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

export default ApiResponse;
