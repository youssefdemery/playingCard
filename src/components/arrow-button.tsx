import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet } from "react-native";

type ArrowButtonProps = {
  direction: "up" | "down";
  onPress: () => void;
  disabled?: boolean;
};

export function ArrowButton({ direction, onPress, disabled }: ArrowButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      hitSlop={12}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
    >
      <Ionicons name={`arrow-${direction}`} size={68} color="#111" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { padding: 8, borderRadius: 24 },
  pressed: { opacity: 0.5 },
  disabled: { opacity: 0.25 },
});
