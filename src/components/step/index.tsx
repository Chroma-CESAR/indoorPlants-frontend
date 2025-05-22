import { View } from "react-native";
import { StyleSheet } from "react-native";

type Props = {
  currentStep: number;
  totalSteps?: number;
};

export function Step({ currentStep, totalSteps = 6 }: Props) {
  return (
    <View style={styles.stepContainer}>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const step = index + 1;
        const isActive = step <= currentStep;

        return (
          <View
            key={step}
            style={[
              styles.stepBox,
              isActive ? styles.activeStep : styles.inactiveStep,
            ]}
          />
        );
      })}
    </View>
  );
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
