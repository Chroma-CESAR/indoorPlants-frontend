import { View } from "react-native";
import { styles } from "./styles";

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

