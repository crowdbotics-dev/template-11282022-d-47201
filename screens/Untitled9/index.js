import { RadioGroup } from "react-native-radio-buttons-group";
import { TextInput } from "react-native";
import { CheckBox } from "react-native-elements";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled9 = () => {
  return <View style={_styles.ekUpMMxd}>
      <CheckBox style={_styles.KyxThiKR} title="Checkbox Title"></CheckBox><TextInput style={_styles.cxbckAuN}></TextInput><RadioGroup style={_styles.YZBLpQwj} radioButtons={[{
      id: "1",
      label: "Option 1",
      value: "option1"
    }, {
      id: "2",
      label: "Option 2",
      value: "option2"
    }]} layout="column"></RadioGroup></View>;
};

export default Untitled9;

const _styles = StyleSheet.create({
  ekUpMMxd: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  KyxThiKR: {
    width: 183,
    height: 69
  },
  cxbckAuN: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  YZBLpQwj: {
    width: 120,
    height: 70
  }
});