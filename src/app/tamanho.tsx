import { useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Step } from '@/components/step';
import { Radio } from '@/components/radio';
import { Button, BackButton } from '@/components/button';
import { useForm } from '../context/formContext';

const opcoes = [
  { label: 'Pequeno - até 30 cm', value: 0 },
  { label: 'Médio - 31 cm até 90 cm', value: 1 },
  { label: 'Grande - 91 cm a 150 cm', value: 2 },
  { label: 'Muito Grande - mais de 150 cm', value: 3 },
];

export default function Tamanho() {
  const router = useRouter();
  const { setField } = useForm();
  const [tamanho, setTamanho] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.subheader}>Tamanho do Espaço</Text>
        <Step currentStep={4} />
        <Text style={styles.title}>Quanto espaço poderá dedicar a plantinha?</Text>
        <Text style={styles.subtitle}>Espaço que a planta irá ocupar:</Text>

        {opcoes.map((opcao) => (
          <Radio
            key={opcao.label}
            label={opcao.label}
            selected={tamanho === opcao.value}
            onPress={() => setTamanho(opcao.value)}
          />
        ))}
      </View>
      <View style={{ flexDirection: 'row' }}>
        <BackButton />
        <Button
          title="Próximo"
          onPress={() => {
            setField('size_code', tamanho);
            router.push('/experiencia' as any);
          }}
          disabled={tamanho === null}
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
      fontFamily: 'Inter_400Regular',
    },
    subheader: {
      color: '#161D17',
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'Inter_400Regular',
    },
    subtitle: {
      color: '#161D17',
      fontSize: 16,
    },
    topContent: {
      gap: 12,
    },
  });