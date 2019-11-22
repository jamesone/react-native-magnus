import { TouchableHighlightProps as RNButtonProps } from "react-native";
import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType
} from "../../theme";

export interface ButtonProps
  extends RNButtonProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType {
  h?: number | string;
  w?: number;
  bg?: string;
  position?: "absolute" | "relative";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  top?: number;
  flex?: number;
  left?: number;
  right?: number;
  bottom?: number;
  color?: string;
  loading?: boolean;
  disabled?: boolean;
  loaderColor?: string;
  minW?: number | string;
  minH?: number | string;
  fontSize?: string | number;
  loaderSize?: number | string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  block?: boolean;
  shadow?: number;
  borderless?: boolean;
  rippleColor?: string;
  shadowColor?: string;
  center?: boolean;
}