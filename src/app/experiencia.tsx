import { useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Step } from '@/components/step';
import { Radio } from '@/components/radio';
import { BackButton, Button } from '@/components/button';
import { useForm } from '../context/formContext';

const opcoes = [
  { label: 'Iniciante', value: 0 },
  { label: 'Amador(a)', value: 1 },
  { label: 'Experiente', value: 2 },
];

export default function Experiencia() {
  const router = useRouter();
  const { setField } = useForm();
  const [nivel, setNivel] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.subheader}>Nível de Experiência</Text>
        <Step currentStep={5} />
        <Text style={styles.title}>Qual o seu nível de experiência com plantas?</Text>
        <Text>Escolha uma opção:</Text>

        {opcoes.map((opcao) => (
          <Radio
            key={opcao.label}
            label={opcao.label}
            selected={nivel === opcao.value}
            onPress={() => setNivel(opcao.value)}
          />
        ))}
      </View>
      <View style={{ flexDirection: 'row' }}>
        <BackButton />
        <Button
          title="Próximo"
          onPress={() => {
            setField('experience_level_code', nivel);
            router.push('/tempo' as any);
          }}
          disabled={nivel === null}
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