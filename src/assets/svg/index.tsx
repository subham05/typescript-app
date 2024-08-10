import React from "react";
import { SvgProps } from "react-native-svg";
import LoginMain from "./svgFiles/LoginMain.svg";
import LoginCover from "./svgFiles/LoginCover.svg";
import ForgotPassword from "./svgFiles/ForgotPassword.svg";
import Doc from "./svgFiles/Document.svg";
import Es from "./svgFiles/Es.svg";
import Fr from "./svgFiles/Fr.svg";
import Gb from "./svgFiles/Gb.svg";
import GoalsImg from "./svgFiles/GoalsImage.svg";
import Jo from "./svgFiles/Jo.svg";
import Pk from "./svgFiles/Pk.svg";
import SubjectImg from "./svgFiles/SubjectImage.svg";
import Wave from "./svgFiles/Wave.svg";
import WaveDrawer from "./svgFiles/WaveDrawer.svg";
import WelcomeWave from "./svgFiles/WelcomeWave.svg";
type CommonSvgProps = React.JSX.IntrinsicAttributes & SvgProps;

export const SVGComponents = {
  LoginMain: (props: CommonSvgProps) => <LoginMain {...props} />,
  LoginCover: (props: CommonSvgProps) => <LoginCover {...props} />,
  ForgotPassword: (props: CommonSvgProps) => <ForgotPassword {...props} />,
  Doc: (props: CommonSvgProps) => <Doc {...props} />,
  Es: (props: CommonSvgProps) => <Es {...props} />,
  Fr: (props: CommonSvgProps) => <Fr {...props} />,
  Gb: (props: CommonSvgProps) => <Gb {...props} />,
  GoalsImg: (props: CommonSvgProps) => <GoalsImg {...props} />,
  Jo: (props: CommonSvgProps) => <Jo {...props} />,
  Pk: (props: CommonSvgProps) => <Pk {...props} />,
  SubjectImg: (props: CommonSvgProps) => <SubjectImg {...props} />,
  Wave: (props: CommonSvgProps) => <Wave {...props} />,
  WaveDrawer: (props: CommonSvgProps) => <WaveDrawer {...props} />,
  WelcomeWave: (props: CommonSvgProps) => <WelcomeWave {...props} />,
};

export default SVGComponents;
