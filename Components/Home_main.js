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
        <Text style={styles.welcomeText}>Welcome, {name}!</Text>
      </View>
      <View style={styles.notif}>
        <View>
          <TouchableOpacity>
            <Text>View All Notifications</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
          {/* Entries */}
          <View style={styles.entriesWrapper}>
          <Text style={styles.sectionTitle}> Entries </Text> </View>
            <View style={styles.feelings}>
            <Text> No entries for today </Text>
          </View>
          
          
        </View>


  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  entriesWrapper: {
    padding: 20,
    backgroundColor: '#2A582C',
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: 'white',
  },
  feelings: {
    fontSize: 20,
    color: 'red',
    padding: 20,
},

});
