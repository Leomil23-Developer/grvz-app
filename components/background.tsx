import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";

interface GradientBackgroundProps {
  children?: ReactNode;
}

export default function GradientBackground({
  children,
}: GradientBackgroundProps) {
  return (
    <LinearGradient
      colors={["#1c5161", "#1c5161", "#000000", "#000000"]}
      locations={[0.1, 0.3, 0.8, 1]}
      start={{ x: 2, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
}
