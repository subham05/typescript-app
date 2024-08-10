export const attendanceData = {
  status: true,
  statusCode: 200,
  data: [
    {
      index: 1,
      subject: "Mathematics",
      percentage: 85,
      totalDays: 28,
      presentDays: 14,
      absentDays: 14,
    },
    {
      index: 2,
      subject: "English",
      percentage: 50,
      totalDays: 28,
      presentDays: 14,
      absentDays: 14,
    },
    {
      index: 3,
      subject: "History",
      percentage: 35,
      totalDays: 28,
      presentDays: 14,
      absentDays: 14,
    },
  ],

  message: "Fetched successfully",
};

export const performanceData = {
  status: true,
  statusCode: 200,
  data: {
    grade: "A",
    percentage: 75,
    comment: "10% improve as compare to last month",
    list: [
      {
        index: 1,
        subject: "Theorems",
        remark: "Remark: Good, need more efforts on theorem",
        date: "05/05/2023; 02:40PM",
        grade: "A",
      },
      {
        index: 2,
        subject: "Theorems",
        remark: "Remark: Good, need more efforts on theorem",
        date: "05/05/2023; 02:40PM",
        grade: "B",
      },
      {
        index: 3,
        subject: "Theorems",
        remark: "Remark: Good, need more efforts on theorem",
        date: "05/05/2023; 02:40PM",
        grade: "C",
      },
      {
        index: 4,
        subject: "Theorems",
        remark: "Remark: Good, need more efforts on theorem",
        date: "05/05/2023; 02:40PM",
        grade: "A",
      },
    ],
  },

  message: "Fetched successfully",
};

export const examData = {
  status: true,
  statusCode: 200,
  data: {
    name: "Theresa Webb",
    grade: "G 4C",
    roll: "45",
    studentId: "456 321",
    totalMarks: "420/600",
    result: "70%",
    remark: "Pass",
    list: [
      {
        index: 1,
        subject: "Math",
        markObtain: "70",
        totalMarks: "100",
        percentage: "90%",
        result: "Paused",
      },
      {
        index: 2,
        subject: "Math",
        markObtain: "70",
        totalMarks: "100",
        percentage: "90%",
        result: "Paused",
      },
      {
        index: 3,
        subject: "Math",
        markObtain: "70",
        totalMarks: "100",
        percentage: "90%",
        result: "Paused",
      },
      {
        index: 4,
        subject: "Math",
        markObtain: "70",
        totalMarks: "100",
        percentage: "90%",
        result: "Paused",
      },
    ],
  },

  message: "Fetched successfully",
};
