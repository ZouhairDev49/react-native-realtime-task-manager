import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();

  const todos = useQuery(api.Todos.getTodos)
  console.log(todos)
  
  return (
    <View style={style.container}>
      <Text style={style.content}>Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggle the mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'lightblue',
    gap: 10,
  },
  content: {
    fontSize: 22,
  },
});
