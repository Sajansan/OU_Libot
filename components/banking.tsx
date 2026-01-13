import * as React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Search Biller Category"
          placeholderTextColor="#003f5c"
        />
      </View>

      <TouchableOpacity style={styles.billerBtn}>
        <Text style={styles.billerText}>Electricity</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.billerBtn}>
        <Text style={styles.billerText}>Water Supply and Drainage</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.billerBtn}>
        <Text style={styles.billerText}>Internet and Telecommunication</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.billerBtn}>
        <Text style={styles.billerText}>Banks and Finance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.billerBtn}>
        <Text style={styles.billerText}>Utilities</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  inputView: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    width: "90%",
    height: 45,
    marginBottom: 20,
    paddingHorizontal: 15,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  TextInput: {
    height: 50,
    flex: 1,
    color: "#000",
  },
  billerBtn: {
    width: "90%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#007BFF",
  },
  billerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
