import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button} {...rest}>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.backButton}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "#006D3B",
    borderRadius: 8,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
    color: "#FFFFFF",
  },
  backButton: {
  height: 40,
  width: 40,
  borderRadius: 20, 
  borderWidth: 1,
  borderColor: 'black',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 8,
},

});
