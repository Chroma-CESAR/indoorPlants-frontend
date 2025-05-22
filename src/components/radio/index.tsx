import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

type Props = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export function Radio({ label, selected, onPress }: Props) {
  return (
    <TouchableOpacity style={[styles.option, selected && styles.selected]} onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.circle, selected && styles.selectedCircle]}>
        {selected && <View style={styles.innerCircle} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  option: {
    backgroundColor: '#D3E8DC',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  selected: {
    backgroundColor: '#A5D6BE', 
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#006D3B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  selectedCircle: {
    borderColor: '#006D3B',
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#006D3B',
  },
  label: {
    fontSize: 16,
    color: '#161D17',
  },
});
