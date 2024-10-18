import React from "react";
import { View } from "react-native-reanimated/lib/typescript/Animated";

const Todoapp = () => {
  return (
    <view
      style={{
        backgroundColor: "black",
        flex: 1,
        color: "white",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        fontFamily: "cursive",
      }}
    >
      <text
        style={{
          fontSize: 20,
          fontFamily: "monospace",
          color: "red",
        }}
      >
        M.Hussain shamim
      </text>
      <br />
      <br />
      <text
        style={{
          fontSize: 45,
        }}
      >
        Hello World <br /> This is my first Mobile App
      </text>
    </view>
  );
};

export default Todoapp;
