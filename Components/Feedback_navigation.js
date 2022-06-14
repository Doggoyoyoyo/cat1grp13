import { StackActions } from "@react-navigation/native";
import Feedback_form from "./Feedback_form";
import Feedback_main from "./Feedback_main";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Feedback_navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Feedback_main" component={Feedback_main} options={{ headerShown: false }}/>
      <Stack.Screen name="Feedback_form" component={Feedback_form} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
