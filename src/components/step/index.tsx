import { View } from "react-native";
import { StyleSheet } from "react-native";

export function Step(){
  return(
    <View style={styles.stepContainer}>
      {[1, 2, 3, 4, 5].map((step) => (
        <View
          key={step}
          style={[
            styles.stepBox,
            step <= 1 ? styles.activeStep : styles.inactiveStep,
          ]}
        />
      ))}
    </View>
  )
}

export const styles = StyleSheet.create({
  stepContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 24,
  },
  stepBox: {
    height: 12,
    flex: 1,
    borderRadius: 4,
  },
  activeStep: {
    backgroundColor: "#006D3B",
  },
  inactiveStep: {
    backgroundColor: "#CCC",
  },
});


