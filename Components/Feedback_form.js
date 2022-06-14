import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Feedback_form() {
  return (
    <View>
      <View>
        <Text>To:</Text>
        <TextInput></TextInput>
      </View>
      <View>
        <Text>Tell Us!</Text>
        <TextInput></TextInput>
      </View>
      <View>
        <View>
          <TouchableOpacity>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
