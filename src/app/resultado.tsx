import { View, Text, StyleSheet, ActivityIndicator, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { useForm } from '../context/formContext';
import axios from 'axios';

export default function Resultado() {
  const { data } = useForm();
  const [resposta, setResposta] = useState<any[]>([]);
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
      <View style={styles.header}>
        <Text style={styles.matchText}>Match!</Text>
        <Text style={styles.subtitle}>Plantas recomendadas para você!</Text>
        <Image source={require('../../assets/images/li_heart.png')} style={styles.heartImage} />

      </View>

      {carregando ? (
        <ActivityIndicator size="large" color="#161D17" />
      ) : erro ? (
        <Text style={styles.error}>{erro}</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {resposta.map((planta, index) => (
            <View key={index} style={styles.card}>
              <Image source={{ uri: planta.img_url }} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.name}>{planta.name}</Text>
                <Text style={styles.group}>{planta.group_name}</Text>
                <Text style={styles.compatibility}>Compatibilidade: {planta.compatibility}%</Text>
              </View>
            </View>
          ))}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F9F1',
    paddingHorizontal: 16,
    paddingVertical:32
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 10,
  },
  matchText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#161D17',
    fontFamily: 'Inter_400Regular',
  },
  subtitle: {
    fontSize: 16,
    color: '#161D17',
    marginTop: 4,
    fontFamily: 'Inter_400Regular',
  },
  heartImage: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    marginTop: 16,
  },
  scrollContent: {
    paddingBottom: 16,
    gap: 16,
    alignItems: "center",

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
    height: 80,
  },
  info: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#161D17',
    fontFamily: 'Inter_400Regular',
  },
  group: {
    fontSize: 10,
    color: '#555',
    fontFamily: 'Inter_400Regular',
  },
  compatibility: {
    fontSize: 12,
    marginTop: 4,
    color: '#333',
    fontFamily: 'Inter_400Regular',
  },
  button: {
    flex: 1,
    backgroundColor: "#006D3B",
    borderRadius: 8,
    height: 40,
    width: 98,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#FFFFFF",
    fontFamily: "Inter_400Regular",
  },
  
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 16,
    fontFamily: 'Inter_400Regular',
  },
});
