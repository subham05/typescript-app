export type ApiResponse<T> = {
  status: boolean;
  statusCode: number;
  data: T;
  message: string;
};

export type Review = {
  name: string;
  subject: string;
  rating: number;
  thumbnail: string;
};
export type Feedback = {
  name: string;
  subject: string;
  rating: number;
  date: string;
  thumbnail: string;
};
