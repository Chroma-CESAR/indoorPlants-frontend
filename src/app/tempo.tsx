import { useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Step } from '@/components/step';
import { Radio } from '@/components/radio';
import { Button, BackButton } from '@/components/button';
import { useForm } from '../context/formContext';

const opcoes = [
  { label: 'Pouco tempo', value: 0 },
  { label: 'Tempo médio', value: 1 },
  { label: 'Muito tempo', value: 2 },
];

export default function Tempo() {
  const router = useRouter();
  const { setField } = useForm();
  const [tempo, setTempo] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.subheader}>Disponibilidade</Text>
        <Step currentStep={6} />
        <Text style={styles.title}>Quanto tempo você tem para cuidar das plantas?</Text>
        <Text>Escolha uma opção:</Text>

        {opcoes.map((opcao) => (
          <Radio
            key={opcao.label}
            label={opcao.label}
            selected={tempo === opcao.value}
            onPress={() => setTempo(opcao.value)}
          />
        ))}
      </View>
      <View style={{ flexDirection: 'row' }}>
        <BackButton />
        <Button
          title="Ver resultado"
          onPress={() => {
            setField('disponibility_level_code', tempo);
            router.push('/resultado' as any);
          }}
          disabled={tempo === null}
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