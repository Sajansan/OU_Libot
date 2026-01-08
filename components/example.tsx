// Import React and useState hook
import React, { useState } from "react";

// (a) TouchableOpacity is used for pressable button
// (b) All core components are imported from 'react-native'
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity, // (a)
  StyleSheet,
} from "react-native"; // (b)

const AppDashboard = () => {
  // (c) useState hook to manage chat input state
  const [chat, setChat] = useState(""); // (c)

  const handleSend = () => {
    alert(`Message Sent: ${chat}`);
    setChat(""); // Clear the text input after sending
  };

  return (
    // (h) View is the main container component
    <View style={styles.container}>
      {/* Heading */}
      {/* (d) App title text */}
      <Text style={styles.heading}>OU Libot</Text>

      {/* Bot Image */}
      <Image
        // (e) source prop is used to load local image
        source={require("./assets/robot.jpg")}
        style={styles.image}
      />

      {/* Text Input */}
      <TextInput
        style={styles.textInput}
        // (f) placeholder text for input field
        placeholder="Type your message here"
        value={chat}
        onChangeText={(text) => setChat(text)}
      />

      {/* Send Button */}
      {/* (g) TouchableOpacity used as a button */}
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppDashboard;

const styles = StyleSheet.create({
  // (i) container style name
  container: {
    // (j) flex property for full screen layout
    flex: 1, // (j)
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 150,
    borderRadius: 60, // Makes the image circular
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  textInput: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
