export type ApiResponse<T> = {
  status: boolean;
  statusCode: number;
  data: T;
  message: string;
};
export type UploadApiResponse = {
  status: boolean;
  statusCode: number;
  message: string;
};
export type HomeworkListResponse = {
  title: string;
  subject: string;
  submissionDate: string;
  status: string;
  join: boolean;
};
export type HomeworkDetailResponse = {
  title: string;
  postedTime: string;
  subject: string;
  submissionDate: string;
  notes: string;
  fileUrl: string;
  address: string;
};
