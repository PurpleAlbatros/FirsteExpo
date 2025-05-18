import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

export default function App() {
  let name = ["Mahad", "Ole", "Mads", "Jakob"];

  return (
    <View style={styles.container}>
      <Text>Hello world.{name[0]}</Text>

      <Text>{1 + 1}</Text>
      <TextInput style={{ width: 200, backgroundColor: "grey" }} />
      <TouchableOpacity>
        <Text>Click me.</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
      <View style={styles.container2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: { flexDirection: "row" },
});
