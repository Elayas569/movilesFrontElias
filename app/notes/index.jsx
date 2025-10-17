import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NoteList from "../../components/NoteList";
import AddNoteModal from "./AddNoteModal";

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
      <NoteList notes={notes} />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>Agregar</Text>
      </TouchableOpacity>

      <AddNoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNewNote={addNewNote}
      />
    </View>
  );
};

export default NoteScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
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
});
