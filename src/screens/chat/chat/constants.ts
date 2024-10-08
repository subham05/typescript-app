import { imageSources } from "src/assets/images";
import { messageModal } from "./types";

export const dummyDataArray: messageModal[] = [
  {
    senderProfile: imageSources.chatDemo1,
    senderName: "Alice",
    _id: "1",
    message: "Hello, how are you?",
    isAttachment: false,
    attachmentUrl: "https://example.com/attachment1.pdf",
    messageType: "text",
    senderId: "user123",
    receiverId: "user456",
    senderRole: "user",
    createdAt: "2024-02-28T12:00:00Z",
    updatedAt: "2024-02-28T12:05:00Z",
    isOwn: true,
    formattedTime: "12:00 PM",
    formattedDate: "2024-02-28",
    voiceNote: {
      timeLength: 30,
      timeLengthInSec: 30000,
      buffer: [0, 1, 0, 1, 0], // Just a dummy array of numbers
    },
    size: "10MB",
    taskId: ["task123", "task456"],
    isDeleted: false,
    attachmentUrlDetails: {
      url: "https://example.com",
      type: "exampleType",
      taskFileName: "taskFile",
      taskFileExt: "txt",
      messageFileName: "messageFile",
      messageFileExt: "pdf",
    },
  },
  {
    senderProfile: imageSources.chatDemo1,
    senderName: "Alice",
    _id: "2",
    message: "Hello, how are you?",
    isAttachment: true,
    attachmentUrl:
      "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
    messageType: "text",
    senderId: "user123",
    receiverId: "user456",
    senderRole: "user",
    createdAt: "2024-02-28T12:00:00Z",
    updatedAt: "2024-02-28T12:05:00Z",
    isOwn: false,
    formattedTime: "12:00 PM",
    formattedDate: "2024-02-28",
    voiceNote: {
      timeLength: 30,
      timeLengthInSec: 30000,
      buffer: [0, 1, 0, 1, 0], // Just a dummy array of numbers
    },
    size: "10MB",
    taskId: ["task123", "task456"],
    isDeleted: false,
    attachmentUrlDetails: {
      url: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
      type: "jpeg",
      taskFileName: "taskFile",
      taskFileExt: "txt",
      messageFileName: "messageFile",
      messageFileExt: "pdf",
    },
  },
  {
    senderProfile: imageSources.chatDemo1,
    senderName: "Alice",
    _id: "3",
    message: "Hello, how are you?",
    isAttachment: true,
    attachmentUrl:
      "https://www.tesourodireto.com.br/data/files/EE/E3/A1/59/6266F610BB8E41E6894D49A8/LFT_2019.xls",
    messageType: "text",
    senderId: "user123",
    receiverId: "user456",
    senderRole: "user",
    createdAt: "2024-02-28T12:00:00Z",
    updatedAt: "2024-02-28T12:05:00Z",
    isOwn: false,
    formattedTime: "12:00 PM",
    formattedDate: "2024-02-28",
    voiceNote: {
      timeLength: 30,
      timeLengthInSec: 30000,
      buffer: [0, 1, 0, 1, 0], // Just a dummy array of numbers
    },
    size: "10MB",
    taskId: ["task123", "task456"],
    isDeleted: false,
    attachmentUrlDetails: {
      url: "https://www.tesourodireto.com.br/data/files/EE/E3/A1/59/6266F610BB8E41E6894D49A8/LFT_2019.xls",
      type: "xlsx",
      taskFileName: "taskFile",
      taskFileExt: "txt",
      messageFileName: "messageFile",
      messageFileExt: "xlsx",
    },
  },
  {
    senderProfile: imageSources.chatDemo2,
    senderName: "Bob",
    _id: "4",
    message: "Hi there!",
    isAttachment: false,
    attachmentUrl: "",
    messageType: "text",
    senderId: "user789",
    receiverId: "user456",
    senderRole: "user",
    createdAt: "2024-02-28T12:10:00Z",
    updatedAt: "2024-02-28T12:12:00Z",
    isOwn: false,
    formattedTime: "12:10 PM",
    formattedDate: "2024-02-28",
    size: "",
    taskId: [],
    isDeleted: false,
    attachmentUrlDetails: {
      url: "https://example.com",
      type: "exampleType",
      taskFileName: "taskFile",
      taskFileExt: "txt",
      messageFileName: "messageFile",
      messageFileExt: "pdf",
    },
  },
  {
    senderProfile: imageSources.chatDemo2,
    senderName: "Bob",
    _id: "4",
    message: "Hi there!",
    isAttachment: true,
    attachmentUrl: "",
    messageType: "text",
    senderId: "user789",
    receiverId: "user456",
    senderRole: "user",
    createdAt: "2024-02-28T12:10:00Z",
    updatedAt: "2024-02-28T12:12:00Z",
    isOwn: false,
    formattedTime: "12:10 PM",
    formattedDate: "2024-02-28",
    size: "2MB",
    taskId: [],
    isDeleted: false,
    attachmentUrlDetails: {
      url: "https://example.com",
      type: "pdf",
      taskFileName: "taskFile",
      taskFileExt: "txt",
      messageFileName: "messageFile",
      messageFileExt: "pdf",
    },
  },
];
