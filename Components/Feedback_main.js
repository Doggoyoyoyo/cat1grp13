import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Feedback_form from "./Feedback_form";
import { useNavigation } from "@react-navigation/native";

//const feedbackNavigator = createStackNavigator();

export default function Feedback_main() {
  const [feedbacks, setfeedbacks] = useState([
    {
      key: 0,
      to: "CPT ABC",
      message:
        "The food in the cookhouse give me nightmare, my mental health is affected!",
    },
    {
      key: 1,
      to: "CPT BCD",
      message:
        "The food in the cookhouse give me nightmare, it is affecting my mental health!",
    },
  ]);
  const navigation = useNavigation();
  const createhandler = () => {
    navigation.navigate("Feedback_form");
  };

  return (
    <View style={styles.main}>
      <View style={styles.feedback_container_container}>
        {feedbacks.map((feedback) => (
          <View key={feedback.key}>
            <FeedbackCard
              key={feedback.key}
              to={feedback.to}
              message={feedback.message}
            />
          </View>
        ))}
      </View>
      <View>
        <TouchableOpacity onPress={createhandler} style={[styles.submitbtn]}>
          <Text>Create Feedback</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function FeedbackCard(props) {
  return (
    <View style={styles.feedback_container}>
      <Text style={styles.toText}>To: {props.to}</Text>
      <Text> </Text>
      <Text numberOfLines={2} ellipsizeMode='tail' style={styles.messageText}>{props.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#D4FAA4",
    alignItems: "center",
    //justifyContent: "center",
  },
  feedback_container_container: {
    alignItems: "center",
  },
  feedback_container: {
    flexDirection: "column",
    backgroundColor: "#D9D9D9",
    //width: "80%",
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 15,
    height: 120,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  emoji: {
    margin: 10,
  },

  toText: {
    fontSize: 20,
    textAlign: "left",
    //fontFamily: 'Helvetica',
  },
  messageText: {
    fontSize: 14,
    textAlign: "justify",
  },
  submitbtn: {
    fontSize: 24,
    backgroundColor: "#5ECEE7",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 50,
    borderRadius: 5,
    marginTop: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
