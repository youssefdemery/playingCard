import { useEffect, useState } from "react";
import { Animated, Easing, StyleSheet, View, useWindowDimensions } from "react-native";

import { ArrowButton } from "@/components/arrow-button";
import { ModalInp } from "@/components/modal";
import { CARD_HEIGHT, PlayingCard } from "@/components/playing-card";

const STEP = 60;
const EDGE_MARGIN = 16;

export default function HomeScreen() {
  const { height } = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState(false);
  const [spin] = useState(() => new Animated.Value(0));
  useEffect(() => {
    Animated.timing(spin, {
      toValue: 1,
      duration: 1200,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [spin]);

  const rotate = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const [offsetY] = useState(() => new Animated.Value(0));
  const [y, setY] = useState(0);
  const maxY = Math.max(0, (height - CARD_HEIGHT) / 2 - EDGE_MARGIN);

  const moveCard = (dy: number) => {
    const next = Math.min(maxY, Math.max(-maxY, y + dy));
    setY(next);
    Animated.spring(offsetY, { toValue: next, useNativeDriver: true }).start();
  };

  return (
    <View style={styles.screen}>
      <ModalInp visible={modalVisible} onClose={() => setModalVisible(false)} />

      <Animated.View style={{ transform: [{ translateY: offsetY }, { rotate }] }}>
        <PlayingCard rank="A" suit="♠" onPress={() => setModalVisible(true)} />
      </Animated.View>

      <View style={styles.arrows}>
        <ArrowButton
          direction="up"
          onPress={() => moveCard(-STEP)}
          disabled={y <= -maxY}
        />
        <ArrowButton
          direction="down"
          onPress={() => moveCard(STEP)}
          disabled={y >= maxY}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0b6623", 
  },
  arrows: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
  },
});
