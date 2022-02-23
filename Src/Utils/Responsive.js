import { PixelRatio, Dimensions } from "react-native";
export const { height, width } = Dimensions.get("window");
export const getHeight = (h) => {
  const elemHeight = parseFloat(h);
  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};

export const getWidth = (w) => {
  const elemWidth = parseFloat(w);
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};
