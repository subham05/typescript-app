import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewSchedule from "@screens/calender/viewSchedule";
import Conversation from "@screens/chat/chat";
import GroupInfo from "@screens/chat/groupInfo";
import SearchScreen from "@screens/components/search";
import ViewPDFScreen from "@screens/components/viewPDF";
import PrivateTeachers from "@screens/home/privateTeachers";
import Notification from "@screens/notification";
import Profile from "@screens/profile";
import Resources from "@screens/resources";
import VideoScreen from "@screens/video";
import React from "react";
import { DrawerNav } from "./DrawerNavigation";
import Quiz from "@screens/quiz/quiz";
import ViewQuiz from "@screens/quiz/viewQuiz";
import CourseView from "@screens/myCourses/courseView";
import ScheduleClass from "@screens/scheduleClass";
import ProfileTeacher from "@screens/profileTeacher/profile";
import ProfileAddress from "@screens/profileTeacher/address";
import ProfileGeneral from "@screens/profileTeacher/general";
import ProfileSubscription from "@screens/profileTeacher/subscription";
import ViewGroup from "@screens/tutorChatGroup/viewGroup";
import AddMember from "@screens/tutorChatGroup/addMember";
import AddGroup from "@screens/tutorChatGroup/addGroup";
import ClassAnalytics from "@screens/classAnalytics";
import ScheduleCourse from "@screens/scheduleCourse/scheduleCourse";
import ScheduleCourseClass from "@screens/scheduleCourse/scheduleCourseClass";
import Earnings from "@screens/earnings";
import Students from "@screens/students/students";
import StudentView from "@screens/students/studentView";
import QuizTutor from "@screens/quizTutor/quizTutor";
import CreateQuiz from "@screens/quizTutor/createQuiz";
import ViewQuizTutor from "@screens/quizTutor/viewQuizTutor";
import ViewSubmission from "@screens/quizTutor/viewSubmissions";
import SelectLanguage from "@screens/selectLanguage";

export type SignedInStackPrivateParamList = {
  DrawerNav: undefined;
  Video: { recording: boolean };
  Pdf: undefined;
  Search: undefined;
  Conversation: undefined;
  GroupInfo: undefined;
  Resources: undefined;
  ViewSchedule: undefined;
  PrivateTeachers: undefined;
  Notification: undefined;
  Profile: undefined;
  Quiz: undefined;
  ViewQuiz: { view: boolean };
  CourseView: undefined;
  ScheduleClass: { Reschedule: boolean };
  ProfileTeacher: undefined;
  ProfileAddress: undefined;
  ProfileGeneral: undefined;
  ProfileSubscription: undefined;
  ViewGroup: undefined;
  AddMember: undefined;
  AddGroup: undefined;
  ClassAnalytics: undefined;
  ScheduleCourse: undefined;
  ScheduleCourseClass: undefined;
  Earnings: undefined;
  Students: undefined;
  StudentView: undefined;
  QuizTutor: undefined;
  CreateQuiz: undefined;
  ViewQuizTutor: { live: boolean };
  ViewSubmission: undefined;
  SelectLanguage: undefined;
};

const Stack = createNativeStackNavigator<SignedInStackPrivateParamList>();
export const SignedInStackPrivate = () => {
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
      <Stack.Screen name="Resources" component={Resources} />
      <Stack.Screen name="ViewSchedule" component={ViewSchedule} />
      <Stack.Screen name="PrivateTeachers" component={PrivateTeachers} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="ViewQuiz" component={ViewQuiz} />
      <Stack.Screen name="CourseView" component={CourseView} />
      <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
      {/* ----Private Teacher Screens */}
      <Stack.Screen name="ScheduleClass" component={ScheduleClass} />
      <Stack.Screen name="ProfileTeacher" component={ProfileTeacher} />
      <Stack.Screen name="ProfileAddress" component={ProfileAddress} />
      <Stack.Screen name="ProfileGeneral" component={ProfileGeneral} />
      <Stack.Screen
        name="ProfileSubscription"
        component={ProfileSubscription}
      />
      <Stack.Screen name="ViewGroup" component={ViewGroup} />
      <Stack.Screen name="AddMember" component={AddMember} />
      <Stack.Screen name="AddGroup" component={AddGroup} />
      <Stack.Screen name="ClassAnalytics" component={ClassAnalytics} />
      <Stack.Screen name="ScheduleCourse" component={ScheduleCourse} />
      <Stack.Screen
        name="ScheduleCourseClass"
        component={ScheduleCourseClass}
      />
      <Stack.Screen name="Earnings" component={Earnings} />
      <Stack.Screen name="Students" component={Students} />
      <Stack.Screen name="StudentView" component={StudentView} />
      <Stack.Screen name="QuizTutor" component={QuizTutor} />
      <Stack.Screen name="CreateQuiz" component={CreateQuiz} />
      <Stack.Screen name="ViewQuizTutor" component={ViewQuizTutor} />
      <Stack.Screen name="ViewSubmission" component={ViewSubmission} />
      {/* ----Private Teacher Screens */}
    </Stack.Navigator>
  );
};
