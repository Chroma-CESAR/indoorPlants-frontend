import {TouchableOpacity, TouchableOpacityProps, Text} from "react-native"
import { StyleSheet } from "react-native";

type Props= TouchableOpacityProps &{
    title: string
}

export function Button({title, ...rest}:Props){
    return(
        <TouchableOpacity activeOpacity={0.7} style={styles.button} {...rest}>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#006D3B",
    borderRadius: 8,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: 400,
    color: "#FFFFFF",
  },
});
