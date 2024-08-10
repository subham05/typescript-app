import { useEffect, useState } from "react";
import { Dimensions, ScaledSize } from "react-native";

const useScreenDimensions = () => {
  const [screenDimensions, setScreenDimensions] = useState(
    Dimensions.get("window")
  );

  useEffect(() => {
    const onChange = ({ window }: { window: ScaledSize }) => {
      setScreenDimensions(window);
    };

    Dimensions.addEventListener("change", onChange);
  }, []);

  return screenDimensions;
};

export default useScreenDimensions;
