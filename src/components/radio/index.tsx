import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

type RadioProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export function Radio({ label, selected, onPress }: RadioProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.outerCircle}>
        {selected && <View style={styles.innerCircle} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#161D17',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#161D17',
  },
  label: {
    fontSize: 16,
    color: '#161D17',
  },
});
