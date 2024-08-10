export type ProfileResponse = {
  firstName: string;
  lastName: string;
  class: string;
  schoolId: string;
  email: string;
  address: string;
};
export type UploadResponse = {
  url: string;
};
export type ApiResponse<T> = {
  status: boolean;
  statusCode: number;
  data: T;
  message: string;
};
