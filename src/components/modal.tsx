import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput } from "react-native";

type ModalInpProps = {
  visible: boolean;
  onClose: () => void;
};

export function ModalInp({ visible, onClose }: ModalInpProps) {
  const [text, setText] = useState("");

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      {/* backdrop: tapping outside the box closes the modal */}
      <Pressable style={styles.backdrop} onPress={onClose}>
        {/* box: empty onPress stops taps inside from closing it */}
        <Pressable style={styles.box} onPress={() => {}}>
          <TextInput
            style={styles.input}
            placeholder="Type something here..."
            placeholderTextColor="#888"
            value={text}
            onChangeText={setText}
          />
          <Text style={styles.body}>You typed: {text}</Text>

          <Pressable style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.btnText}>Close</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

export default ModalInp;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 280,
    padding: 24,
    borderRadius: 16,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  input: {
    alignSelf: "stretch",
    height: 44,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  body: { fontSize: 16, color: "#555", marginBottom: 16 },
  btnText: { color: "#fff", fontWeight: "600" },
  closeBtn: { backgroundColor: "#0b6623", padding: 12, borderRadius: 10 },
});
