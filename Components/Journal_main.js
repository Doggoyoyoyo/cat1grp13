import "react-native-gesture-handler";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { RotateInDownLeft, set } from "react-native-reanimated";

export default function Journal_main() {
  const [chosenemoji, setChosenemoji] = useState(4);
  const [feelingsubmit, setfeelingsubmit] = useState(4);
  //feelingsubmit: 0 -> happy, 1-> neutral, 2-> sad, 4 -> not chosen yet.

  const submitHandler = () => {
    setfeelingsubmit(chosenemoji);
    console.log(feelingsubmit);
  };

  const emojisize = 44;

  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.qntext}>How are you feeling today?</Text>
        <View style={styles.emoji_container}>
          <Expression
            feeling="emoji-happy"
            id={0}
            chosenemoji={chosenemoji}
            emojisize={emojisize}
            setChosenemoji={setChosenemoji}
          />
          <Expression
            feeling="emoji-neutral"
            id={1}
            chosenemoji={chosenemoji}
            emojisize={emojisize}
            setChosenemoji={setChosenemoji}
          />
          <Expression
            feeling="emoji-sad"
            id={2}
            chosenemoji={chosenemoji}
            emojisize={emojisize}
            setChosenemoji={setChosenemoji}
          />
        </View>
      </View>
      <TouchableOpacity onPress={submitHandler}>
        <View style={[styles.submitbtn, styles.shadowProp]}>
          <Text>Submit</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function Expression(props) {
  const changeemoji = () => {
    props.setChosenemoji(props.id);
    console.log(props.id);
  };

  return (
    <View>
      <TouchableOpacity onPress={changeemoji} style={styles.emoji}>
        <Entypo
          name={props.feeling}
          size={props.emojisize}
          color={props.chosenemoji == props.id ? "yellow" : "black"}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#D4FAA4",
    alignItems: "center",
    justifyContent: "center",
  },
  emoji_container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#D9D9D9",
    
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  emoji: {
    margin: 10,
  },

  qntext: {
    fontSize: 20,
    //fontFamily: 'Helvetica',
  },
  submitbtn: {
    fontSize: 24,
    backgroundColor: "#5ECEE7",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 50,
    borderRadius: 5,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
