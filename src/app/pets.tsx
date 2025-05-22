import { useRouter, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Step } from '@/components/step';
import { Radio } from '@/components/radio';
import { Button, BackButton } from '@/components/button';
import { useForm } from '../context/formContext';

const opcoes = [
  { label: 'Sim', value: true },
  { label: 'Não', value: false },
];

export default function Pets() {
  const router = useRouter();
  const { setField } = useForm();
  const { nome } = useLocalSearchParams();
  const [pet, setPet] = useState<boolean | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.subheader}>Animais de estimação</Text>
        <Step />
        <Text style={styles.title}>Olá {nome}, você tem ou pretende ter pets?</Text>
        <Text>Escolha uma opção:</Text>

        {opcoes.map((opcao) => (
          <Radio
            key={opcao.label}
            label={opcao.label}
            selected={pet === opcao.value}
            onPress={() => setPet(opcao.value)}
          />
        ))}
      </View>
      <View style={{ flexDirection: 'row' }}>
        <BackButton />
        <Button
          title="Próximo"
          onPress={() => {
            setField('ind_pets', pet);
            router.push('/apartamento' as any);
          }}
          disabled={pet === null}
      />
      </View>
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