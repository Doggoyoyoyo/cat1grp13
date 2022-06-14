import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { RotateInDownLeft } from "react-native-reanimated";

export default function Home_main() {
  const name = "Tan";
  return (
    <View style={styles.main}>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>Welcome, {name}!</Text>
      </View>
      <View style={styles.notif}>
        
        <View>
          <TouchableOpacity>
            <Text>View All Notifications</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      <View style={styles.entries}>
          <Text> something lol </Text>
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
    backgroundColor: "#D4FAA4"
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#3A6F3D",
    textAlign: "center",
  },
  welcomeTextContainer: {
    marginTop: 20,
  },
  notif: {
    marginTop: 5,
    paddingRight: 10,
    textAlign: "right",
    fontSize: 15,
    fontWeight: "bold",
    color: "#2A582C",
  },
  
  entries: {
    marginTop: 5,
    padding: 20,
    
    fontSize: 15,
    
    color: "#2A582C",
  },
  
});
