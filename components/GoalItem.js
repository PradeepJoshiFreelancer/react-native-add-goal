import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View key={props.id} style={styles.goalItem}>
      <Pressable onPress={props.onDelete.bind(this, props.id)} android_ripple={{color: "#cccccc"}} style={({pressed})=> pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{props.text}</Text> 
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  pressedItem:{
    opacity:0.5
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
