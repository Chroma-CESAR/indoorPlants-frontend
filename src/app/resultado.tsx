import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { useForm } from '../context/formContext';
import axios from 'axios';

export default function Resultado() {
  const { data } = useForm();
  const [resposta, setResposta] = useState<any>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    async function enviarDados() {
      try {
        const response = await axios.post('http://192.168.1.14:8000/match', data);
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
      <Text style={styles.title}>Resultado da Recomendação</Text>
      {carregando ? (
        <ActivityIndicator size="large" color="#161D17" />
      ) : erro ? (
        <Text style={styles.error}>{erro}</Text>
      ) : (
        <Text style={styles.resultado}>{JSON.stringify(resposta, null, 2)}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#161D17',
  },
  resultado: {
    fontSize: 16,
    color: '#161D17',
    marginTop: 12,
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
});
