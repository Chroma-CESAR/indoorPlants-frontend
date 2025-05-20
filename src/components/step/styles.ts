import { StyleSheet } from "react-native";

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
