import { ImageProps } from "react-native";

export type coordinatesProps = {
  x: number;
  y: number;
  height: number;
};
export type messageModal = {
  senderProfile?: ImageProps | undefined;
  senderName?: string;
  _id: string;
  message: string;
  isAttachment: boolean;
  attachmentUrl: string;
  messageType: string;
  senderId: string;
  receiverId: string;
  senderRole: string;
  createdAt: string;
  updatedAt: string;
  isOwn: boolean;
  formattedTime: string;
  formattedDate: string;
  voiceNote?: {
    timeLength: number;
    timeLengthInSec: number;
    buffer: number[];
  };
  size?: string;
  taskId?: string[];
  isDeleted: boolean;
  attachmentUrlDetails: FormattedAttachmentModal;
};
export interface FormattedAttachmentModal {
  url: string;
  type: string;
  taskFileName?: string;
  taskFileExt?: string;
  messageFileName?: string;
  messageFileExt?: string;
}
