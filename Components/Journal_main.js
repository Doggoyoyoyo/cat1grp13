import 'react-native-gesture-handler'
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { RotateInDownLeft, set } from "react-native-reanimated";

export default function Journal_main() {
  const [chosenemoji, setChosenemoji] = useState(4);
  return (
    <View>
      <View>
        <Text>How are you feeling today?</Text>
        <View>
          <Expression
            feeling="emoji-happy"
            id={0}
            chosenemoji={chosenemoji}
            setChosenemoji={setChosenemoji}
          />
          <Expression
            feeling="emoji-neutral"
            id={1}
            chosenemoji={chosenemoji}
            setChosenemoji={setChosenemoji}
          />
          <Expression
            feeling="emoji-sad"
            id={2}
            chosenemoji={chosenemoji}
            setChosenemoji={setChosenemoji}
          />
        </View>
        <TouchableOpacity>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Expression(props) {
  const changeemoji = () => {
    props.setChosenemoji(props.id);
    console.log(props.id);
  };

  return (
    <TouchableOpacity onPress={changeemoji}>
      <Entypo
        name={props.feeling}
        size={24}
        color={props.chosenemoji == props.id ? "blue" : "black"}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  emoji_container: {
    flexDirection: "row",
  },
});
