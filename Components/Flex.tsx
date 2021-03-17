/**
 * Raect Native Flex Component
 */

import React from "react";
import { View, ViewProps, ViewStyle, FlexStyle } from "react-native";

interface FlexProps extends ViewProps {
  children?: React.ReactNode;
  styles?: ViewStyle;
  column?: boolean;
  align?: FlexStyle["alignItems"];
  justify?: FlexStyle["justifyContent"];
}

export default function Flex({
  children,
  column,
  align,
  justify,
  style,
  ...rest
}: FlexProps) {
  return (
    <View
      style={[
        {
          flexDirection: column ? "column" : "row",
          alignItems: align,
          justifyContent: justify,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}
