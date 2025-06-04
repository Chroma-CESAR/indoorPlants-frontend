import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Trophy, Sun, Droplets } from "lucide-react-native";
import type { Plant } from "@/types/plant";

const screenWidth = Dimensions.get("window").width;

export default function ModalPlant({
  plant,
  handleClose,
}: {
  plant?: Plant;
  handleClose: () => void;
}) {
  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        {/* Imagem */}
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: plant?.img_url }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Nome e grupo */}
        <View style={styles.textContainer}>
          <Text style={styles.name}>{plant?.name}</Text>
          <Text style={styles.group}>{plant?.group_name}</Text>
        </View>

        {/* Informações */}
        <View style={styles.infoRow}>
          <InfoCard
            title="Nível de Experiência"
            value={plant?.experience_level}
            icon={<Trophy />}
          />
          <InfoCard title="Luz Solar" value={plant?.sunlight} icon={<Sun />} />
          <InfoCard
            title="Água"
            value={plant?.water_category}
            icon={<Droplets />}
          />
        </View>

        {/* Botão Voltar */}
        <TouchableOpacity style={styles.button} onPress={handleClose}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function InfoCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: any;
  icon: any;
}) {
  return (
    <View style={styles.infoCard}>
      <Text style={styles.infoIcon}>{icon}</Text>
      <Text style={styles.infoTitle}>{title}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(24, 24, 24, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    alignSelf: "flex-start",
  },
  modal: {
    backgroundColor: "#FFF",
    width: "85%",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  imageWrapper: {
    width: "100%",
    aspectRatio: 1.4,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#eef3ed",
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 4,
  },
  group: {
    fontSize: 14,
    color: "#555",
    fontStyle: "italic",
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  infoCard: {
    backgroundColor: "#f4f4f4",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    width: (screenWidth * 0.85 - 40 - 16) / 3, // 3 cards com padding
  },
  infoIcon: {
    fontSize: 18,
    marginBottom: 6,
  },
  infoTitle: {
    fontSize: 12,
    color: "#777",
    textAlign: "center",
    flexWrap: "wrap",
    includeFontPadding: false,
  },
  infoValue: {
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#2d8058",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
});
