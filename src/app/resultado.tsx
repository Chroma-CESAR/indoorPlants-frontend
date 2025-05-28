// app/resultado.tsx
import { View, Text, StyleSheet, ActivityIndicator, Image, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { useForm } from '../context/formContext';
import axios from 'axios';
import { Step } from '@/components/step';

export default function Resultado() {
  const { data } = useForm();
  const [resposta, setResposta] = useState<any[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    async function enviarDados() {
      try {
        const response = await axios.post('http://172.26.71.135/match', data);
        setResposta(response.data);
      } catch (err) {
        console.error(err);
        setErro('Erro ao enviar dados para o servidor.');
      } finally {
        setCarregando(false);
      }
    }

    enviarDados();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.subheader}>Resultado</Text>
        <Text style={styles.title}>Plantas recomendadas para você</Text>
      </View>
      {carregando ? (
        <ActivityIndicator size="large" color="#161D17" />
      ) : erro ? (
        <Text style={styles.error}>{erro}</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {resposta.map((planta, index) => (
            <View key={index} style={styles.card}>
              <Image source={{ uri: planta.image }} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.name}>{planta.plant_name}</Text>
                <Text style={styles.group}>{planta.group}</Text>
                <Text style={styles.compatibility}>Compatibilidade: {planta.compatibility}%</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
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
  topContent: {
    gap: 12,
    marginBottom: 16,
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
  scrollContent: {
    gap: 16,
    paddingBottom: 32,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#D7E7D7',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#161D17',
    fontFamily: 'Inter_400Regular',
  },
  group: {
    fontSize: 14,
    color: '#555',
    fontFamily: 'Inter_400Regular',
  },
  compatibility: {
    fontSize: 14,
    marginTop: 4,
    color: '#333',
    fontFamily: 'Inter_400Regular',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 16,
    fontFamily: 'Inter_400Regular',
  },
});
