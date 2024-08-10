import DeviceInfo from "react-native-device-info";

const getDeviceInformation = async () => {
  try {
    const uniqueId = await DeviceInfo.getUniqueId(); // Try to get the unique ID
    const brand = DeviceInfo.getBrand(); // Get the brand
    const model = DeviceInfo.getModel(); // Get the model
    const deviceId = DeviceInfo.getDeviceId(); // Get the model
    const deviceType = DeviceInfo.getDeviceType(); // Get the model

    return {
      uniqueId: uniqueId || "",
      brand: brand || "",
      model: model || "",
      deviceId: deviceId || "",
      deviceType: deviceType || "",
    };
  } catch (error) {
    console.error("Error fetching device information:", error);
    return {
      uniqueId: "",
      brand: "",
      model: "",
      deviceId: "",
      deviceType: "",
    };
  }
};

export default getDeviceInformation;
