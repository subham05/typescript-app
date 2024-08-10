export type ApiResponse<T> = {
  status: boolean;
  statusCode: number;
  data: T;
  message: string;
};

export type PerformanceReport = {
  grade: string;
  percentage: number;
  comment: string;
  list: PerformanceList[];
};
type PerformanceList = {
  index: 1;
  subject: "Theorems";
  remark: "Remark: Good, need more efforts on theorem";
  date: "05/05/2023; 02:40PM";
  grade: "A";
};
export type ExamReport = {
  name: string;
  grade: string;
  roll: string;
  studentId: string;
  totalMarks: string;
  result: string;
  remark: string;
  list: ExamList[];
};
type ExamList = {
  index: number;
  subject: string;
  markObtain: string;
  totalMarks: string;
  percentage: string;
  result: string;
};

export type AttendanceReport = {
  index: number;
  subject: string;
  percentage: number;
  totalDays: number;
  presentDays: number;
  absentDays: number;
};
export type AttendanceListResponse = {
  totalPresentHour: number;
  attendancePercent: number;
  attendanceSummary: AttendanceReport[];
  date: string;
  present: number;
  percentage: number;
};
