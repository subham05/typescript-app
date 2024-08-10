export type ApiResponse<T> = {
  status: boolean;
  statusCode: number;
  data: T;
  message: string;
};

export type Announcement = {
  index: number;
  title: string;
  description: string;
  linkTitle: string;
  link: string;
  poster?: string;
  file?: string;
};

export type Upcoming = {
  index: number;
  title: string;
  date: string;
  timeRange: string;
  topic: string;
  notes: string;
};

export type Exam = {
  index: number;
  title: string;
  date: string;
  timeRange: string;
  topic: string;
  subject: string;
  examType: string;
  totalMarks: string;
  passingMarks: string;
  details: string;
};
export type Marketplace = {
  index: number;
  title: string;
  description: string;
  authorName: string;
  time: string;
  rating: string;
  price: string;
  thumbnail: string;
};
