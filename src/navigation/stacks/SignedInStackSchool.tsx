import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "@screens/components/search";
import VideoScreen from "@screens/video";
import ViewPDFScreen from "@screens/components/viewPDF";
import React from "react";
import { DrawerNav } from "./DrawerNavigation";
import Goals from "@screens/goals";
import Resources from "@screens/resources";
import GroupInfo from "@screens/chat/groupInfo";
import Conversation from "@screens/chat/chat";
import ViewHomeWork from "@screens/homework/viewHomework";
import ReportPerformance from "@screens/reports/performanceReports";
import ReportAttendance from "@screens/reports/attendanceReports";
import Reviews from "@screens/ratingReview/reviews";
import RatingReviewDetails from "@screens/ratingReview/details";
import Attendance from "@screens/attendance/attendance";
import OverallAttendance from "@screens/attendance/overallAttendance";
import ViewSchedule from "@screens/calender/viewSchedule";
import ImportantAnnouncement from "@screens/home/importantAnnouncement";
import PrivateTeachers from "@screens/home/privateTeachers";
import UpcomingExams from "@screens/home/upcomingExams";
import UpcomingEvents from "@screens/home/upcomingEvents";
import Notification from "@screens/notification";
import Profile from "@screens/profile";
import SubmitHomeWork from "@screens/homework/submitHomework";
import Recordings from "@screens/recordings";
import ExamReport from "@screens/reports/examReports";
import SelectLanguage from "@screens/selectLanguage";

export type SignedInStackParamList = {
  DrawerNav: undefined;
  Video: { recording: boolean };
  Pdf: undefined;
  Search: undefined;
  Conversation: undefined;
  GroupInfo: undefined;
  ViewHomework: undefined;
  Goals: undefined;
  Resources: undefined;
  ReportPerformance: undefined;
  ReportAttendance: undefined;
  Reviews: undefined;
  RatingReviewDetails: { own: boolean; rating?: number };
  Attendance: undefined;
  OverallAttendance: undefined;
  ViewSchedule: undefined;
  ImportantAnnouncement: undefined;
  PrivateTeachers: undefined;
  UpcomingEvents: undefined;
  UpcomingExams: undefined;
  Notification: undefined;
  Profile: undefined;
  SubmitHomeWork: undefined;
  Recordings: undefined;
  ExamReport: undefined;
  SelectLanguage: undefined;
};

const Stack = createNativeStackNavigator<SignedInStackParamList>();
export const SignedInStackSchool = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="DrawerNav" component={DrawerNav} />
      <Stack.Screen name="Pdf" component={ViewPDFScreen} />
      <Stack.Screen name="Video" component={VideoScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Conversation" component={Conversation} />
      <Stack.Screen name="GroupInfo" component={GroupInfo} />
      <Stack.Screen name="ViewHomework" component={ViewHomeWork} />
      <Stack.Screen name="Goals" component={Goals} />
      <Stack.Screen name="Resources" component={Resources} />
      <Stack.Screen name="ReportPerformance" component={ReportPerformance} />
      <Stack.Screen name="ReportAttendance" component={ReportAttendance} />
      <Stack.Screen name="Reviews" component={Reviews} />
      <Stack.Screen
        name="RatingReviewDetails"
        component={RatingReviewDetails}
      />
      <Stack.Screen name="Attendance" component={Attendance} />
      <Stack.Screen name="OverallAttendance" component={OverallAttendance} />
      <Stack.Screen name="ViewSchedule" component={ViewSchedule} />
      <Stack.Screen
        name="ImportantAnnouncement"
        component={ImportantAnnouncement}
      />
      <Stack.Screen name="PrivateTeachers" component={PrivateTeachers} />
      <Stack.Screen name="UpcomingEvents" component={UpcomingEvents} />
      <Stack.Screen name="UpcomingExams" component={UpcomingExams} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="SubmitHomeWork" component={SubmitHomeWork} />
      <Stack.Screen name="Recordings" component={Recordings} />
      <Stack.Screen name="ExamReport" component={ExamReport} />
      <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
    </Stack.Navigator>
  );
};
