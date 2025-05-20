import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

type CheckboxProps = {
  label: string;
  value: boolean;
  onPress: () => void;
};

export function Checkbox({ label, value, onPress }: CheckboxProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={[styles.checkbox, value && styles.checked]} />
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
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#161D17',
    backgroundColor: 'white',
    marginRight: 12,
  },
  checked: {
    backgroundColor: '#161D17',
  },
  label: {
    fontSize: 16,
    color: '#161D17',
  },
});