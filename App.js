import { useState } from "react";
import { Button, ScrollView, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [showAddGoalModdel, setShowAddGoalModdel] = useState(false);

  const handleAddGoalButton = () => {
    setShowAddGoalModdel(true);
  };
  const handleHideHandler = () => {
    setShowAddGoalModdel(false);
  };
  const onButtonPress = (enteredText) => {
    const newGoal = { id: Math.random(), text: enteredText };
    setGoalList((currentList) => [...currentList, newGoal]);
  };

  const onDeleteHandler = (id) => {
    setGoalList(
      goalList.filter((item) => {
        return item.id != id;
      })
    );
  };

  return (
    <>
    <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button onPress={handleAddGoalButton} title="Add Goal" />
        <GoalInput
          onAdd={onButtonPress}
          visible={showAddGoalModdel}
          hidelModleHandler={handleHideHandler}
        />
        <View style={styles.itemContainer}>
          <ScrollView>
            {goalList.map((goal) => {
              return (
                <GoalItem
                  key={goal.id}
                  text={goal.text}
                  id={goal.id}
                  onDelete={onDeleteHandler}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,

  },
  itemContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  goalText: {
    color: "white",
  },
});
