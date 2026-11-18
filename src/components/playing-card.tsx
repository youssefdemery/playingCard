import { Pressable, StyleSheet, Text, View } from "react-native";

export const CARD_HEIGHT = 320;

type PlayingCardProps = {
  rank: string;
  suit: string;
  onPress?: () => void;
};

export function PlayingCard({ rank, suit, onPress }: PlayingCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.cornerTop}>
        <Text style={styles.rank}>{rank}</Text>
        <Text style={styles.suitSmall}>{suit}</Text>
      </View>

      <Text style={styles.suitBig}>{suit}</Text>

      <View style={styles.cornerBottom}>
        <Text style={styles.rank}>{rank}</Text>
        <Text style={styles.suitSmall}>{suit}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 220,
    height: CARD_HEIGHT, // ~ real card ratio 2.5 x 3.5
    borderRadius: 14,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  cornerTop: {
    position: "absolute",
    top: 12,
    left: 14,
    alignItems: "center",
  },
  cornerBottom: {
    position: "absolute",
    bottom: 12,
    right: 14,
    alignItems: "center",
    transform: [{ rotate: "180deg" }],
  },
  rank: { fontSize: 28, fontWeight: "700", color: "#111" },
  suitSmall: { fontSize: 22, color: "#111", marginTop: -4 },
  suitBig: { fontSize: 120, color: "#111" },
});
