import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

const AccountSettingsScreen = params => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [notifications, setNotifications] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [deactivateAccount, setDeactivateAccount] = useState(false);
  return <SafeAreaView style={styles.container}>
      
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  subContainer: {
    paddingHorizontal: 20,
    flex: 0.2,
    justifyContent: "center"
  },
  subText: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12,
    marginLeft: 20
  },
  subPallete: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  planDes: {
    flex: 0.4,
    padding: 10,
    // borderWidth: 1,
    // borderColor: '#979797',
    justifyContent: "center",
    alignItems: "flex-start"
  },
  subPricing: {
    flex: 0.6,
    padding: 10,
    // borderWidth: 1,
    // borderColor: '#979797',
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  boldText: {
    fontWeight: "bold"
  },
  fnt25: {
    fontSize: 25
  },
  fnt16: {
    fontSize: 16
  },
  billingContainer: {
    flex: 0.5,
    paddingHorizontal: 20 // borderWidth: 1,
    // borderColor: '#979797',

  },
  billingText: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12,
    marginLeft: 20
  },
  inputText: {
    fontSize: 16,
    marginLeft: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    marginVertical: 10,
    width: "100%"
  },
  togglesContainer: {
    flex: 0.3,
    paddingHorizontal: 20
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  toggleText: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12,
    marginLeft: 20
  }
});
export default AccountSettingsScreen;