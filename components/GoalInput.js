import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

function GoalInput(props) {
  const [enteredText, setEnteredText] = useState();

  const onTextChage = (enteredText) => {
    setEnteredText(enteredText);
  };

  const onButtonPress = () => {
    props.onAdd(enteredText);
    setEnteredText("");
    props.hidelModleHandler();
  };
  const onCancelPress = () => {
    props.hidelModleHandler();
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/image/adaptive-icon.png")}
        />

        <TextInput
          style={styles.textInput}
          onChangeText={onTextChage}
          placeholder="Enter your Goal"
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={onButtonPress} title="Add Goals" />
          </View>
          <View style={styles.button}>
            <Button onPress={onCancelPress} color="#f31282" title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    margin: 8,
  },
  textInput: {
    backgroundColor: "#e4d0ff",
    borderColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    borderWidth: 1,
    width: "100%",
    padding: 16,
  },
});
