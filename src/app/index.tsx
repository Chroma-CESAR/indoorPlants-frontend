import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { Step } from '@/components/step';
import axios from 'axios';

export default function FormStep1() {
  const router = useRouter();
  const [nome, setNome] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.subheader}>Bem-vindo</Text>
        <Step currentStep={1} />
        <Text style={styles.title}>Para começar, queremos saber um pouco mais sobre você</Text>
        <Text style={styles.subtitle}>Como quer ser chamado(a)?</Text>
        <Input value={nome} onChangeText={setNome} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Button
          title="Próximo"
          onPress={() => router.push(`/pets?nome=${encodeURIComponent(nome)}` as any)
        }
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
    fontFamily: 'Inter_400Regular',
  },
  topContent: {
    gap: 12,
  },
});