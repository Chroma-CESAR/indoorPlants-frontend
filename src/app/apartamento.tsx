import { useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Step } from '@/components/step';
import { Radio } from '@/components/radio';
import { Button } from '@/components/button';
import { useForm } from '../context/formContext';

const opcoes = [
  { label: 'Sim', value: true },
  { label: 'Não', value: false },
];

export default function Apartamento() {
  const router = useRouter();
  const { setField } = useForm();
  const [apto, setApto] = useState<boolean | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.subheader}>Ambiente</Text>
        <Step />
        <Text style={styles.title}>Você mora em apartamento?</Text>
        <Text>Escolha uma opção:</Text>

        {opcoes.map((opcao) => (
          <Radio
            key={opcao.label}
            label={opcao.label}
            selected={apto === opcao.value}
            onPress={() => setApto(opcao.value)}
          />
        ))}
      </View>
      <Button
        title="Próximo"
        onPress={() => {
          setField('ind_apartment', apto);
          router.push('/tamanho' as any);
        }}
        disabled={apto === null}
      />
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