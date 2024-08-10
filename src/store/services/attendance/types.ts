export type ApiResponse<T> = {
  status: boolean;
  statusCode: number;
  data: T;
  message: string;
};

type AttendanceSummary = {
  date: string | undefined;
  index: number;
  name: string;
  hour: string;
  present: string;
  percentage: number;
};
export type AttendanceListResponse = {
  totalPresentHour: number;
  attendancePercent: number;
  attendanceSummary: AttendanceSummary[];
  date: string;
  present: number;
  percentage: number;
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
type SubjectAttendance = {
  index: number;
  subject: string;
  startTime: string;
  endTime: string;
  presentHour: string;
};

export type OverallDetailsData = {
  date: string;
  time: string;
  totalHr: string;
  presentHr: string;
  subjectAttendance: SubjectAttendance[];
};
