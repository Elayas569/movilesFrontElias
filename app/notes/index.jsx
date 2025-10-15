import { useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    { id: "1", text: "nota uno" },
    { id: "2", text: "nota dos" },
    { id: "3", text: "nota tres" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState("");

  const addNewNote = () => {
    if (newNote.trim() === "") return;

    setNotes((prevNotes) => [
      ...prevNotes,
      { id: Date.now().toString(), text: newNote },
    ]);
    setNewNote("");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteText}>{item.text}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>Agregar</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Agregar una Nota Nueva</Text>
            <TextInput
              style={styles.input}
              placeholder="Teclea una descripción"
              placeholderTextColor={"#aaa"}
              onChangeText={setNewNote}
            />
            <View style={styles.modalButtons}>
              {/* Boton Cancelar */}
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>

              {/* Boton Aceptar */}
              <TouchableOpacity style={styles.saveButton} onPress={addNewNote}>
                <Text style={styles.saveButtonText}>Agregar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  noteItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#7d4d0480",
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  noteText: {
    fontSize: 18,
  },
  addButton: {
    position: "absolute",
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: "#666",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: 16,
    color: "#00000000",
  },
  saveButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  saveButtonText: {
    fontSize: 16,
    color: "#fff",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
});
