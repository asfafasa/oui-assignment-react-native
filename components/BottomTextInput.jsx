import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";

const BottomTextInput = () => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        //  style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}
        behavior="position"
      >
        <TextInput
          style={styles.input}
          // onChangeText={(text) => this.setState({ message: text })}
          // value={this.state.email}
          placeholder="Address"
        />
        {/* <Button onPress={this.send} title="SEND" /> */}
      </KeyboardAvoidingView>
    </View>
  );
};

export default BottomTextInput;

const styles = StyleSheet.create({
  container: {},
  input: {
    width: "100%",
    height: 40,
  },
});
