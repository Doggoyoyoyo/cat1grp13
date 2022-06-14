import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { RotateInDownLeft } from "react-native-reanimated";
import { title, content } from "./notification";

export default function Home_main() {
  const name = "Tan";
  const titles = title;
  const contents = content;

  return (
    <View style={styles.main}>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>Welcome,{name}!</Text>
      </View>
      <View style={styles.headerContainer}>
        <View>
          <Text>Notification</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text>View all</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function NotificationCard(props) {
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>{props.content}</Text>
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
  welcomeText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#A10303",
  },
  welcomeTextContainer: {
    marginTop: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "space-between",
    //alignContent: "space-between",
  },
});
