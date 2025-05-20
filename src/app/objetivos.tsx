import { useRouter, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@/components/button';
import { Step } from '@/components/step';
import { Checkbox } from '@/components/checkbox';

const objetivos = [
  'Criar uma rotina de cuidados com as plantas.',
  'Cultivar uma horta em casa.',
  'Aprender a cuidar de diversos tipos de plantas corretamente.',
  'Ter uma residência mais aconchegante.',
  'Saber qual planta se adequa ao meu estilo de vida.',
  'Saber como cuidar das plantas que eu já tenho.',
  'Montar um cantinho verde planejado.',
];

export default function FormStep2() {
  const router = useRouter();
  const { nome } = useLocalSearchParams();
  const [metas, setMetas] = useState<string[]>([]);

  function toggleMeta(meta: string) {
    if (metas.includes(meta)) {
      setMetas(metas.filter((m) => m !== meta));
    } else if (metas.length < 3) {
      setMetas([...metas, meta]);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.subheader}>Objetivos</Text>
        <Step />
        <Text style={styles.title}>Olá {nome}! Para começar queremos entender suas metas!</Text>
        <Text>Selecione até 3 objetivos que são importantes para você</Text>

        {objetivos.map((meta) => (
          <Checkbox
            key={meta}
            label={meta}
            value={metas.includes(meta)}
            onPress={() => toggleMeta(meta)}
          />
        ))}
      </View>
      <Button title="Próximo" onPress={() => router.push({ pathname: '/ambiente', params: { nome: String(nome), metas: JSON.stringify(metas) } })} />
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