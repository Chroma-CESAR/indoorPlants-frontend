import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Step } from '@/components/step';
import { Radio } from '@/components/radio';
import { Button } from '@/components/button';

const opcoes = ['Casa', 'Apartamento', 'Studio'];

export default function FormStep3() {
  const { nome, metas } = useLocalSearchParams();
  const [ambiente, setAmbiente] = useState('');

  function handleSubmit() {
    console.log({ nome, metas: JSON.parse(String(metas)), ambiente });
    // Aqui você pode enviar os dados para uma API ou salvar localmente
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.subheader}>Ambiente da casa</Text>
        <Step />
        <Text style={styles.title}>Onde sua plantinha irá morar?</Text>
        <Text>Onde você mora?</Text>

        {opcoes.map((opcao) => (
          <Radio
            key={opcao}
            label={opcao}
            selected={ambiente === opcao}
            onPress={() => setAmbiente(opcao)}
          />
        ))}
      </View>
      <Button title="Finalizar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    gap: 16,
  },
  title: {
    color: '#161D17',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subheader: {
    color: '#161D17',
    fontSize: 20,
    textAlign: 'center',
  },
  topContent: {
    gap: 12,
  },
});
