import { TextInput, TextInputProps } from "react-native";
import { StyleSheet } from "react-native";

export function Input({...rest }: TextInputProps){
  return(
    <TextInput style={styles.input} {...rest}/>
  )
}

export const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#D7E7D7",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    alignItems: "center",
    padding: 12,
    fontSize: 12,
  },
});
