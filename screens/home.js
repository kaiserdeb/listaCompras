import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from "react-native";
import { ListItem, AddToBuy, CustomModal } from "../components";
import { colors } from "../constants/colors";
import { useSelector, useDispatch } from "react-redux";
import { addComprar, deleteComprar, addCompra } from "../store/actions";

export const Home = ({navigation}) => {
  const [toBuy, setToBuy] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedToDelete, setSelectedToDelete] = useState(null);
  const [selectedToConfirm, setSelectedToConfirm] = useState(null);

  const dispatch = useDispatch();
  const aComprar = useSelector((state) => state.aComprar.aComprar);

  const onDelete = (id) => {
    dispatch(deleteComprar(id))
  }

  const onAdd = (comprar) => {
      dispatch(addComprar(comprar));
  }

  const onUpdate = (comprar) => {
    let temp = {...comprar, color: "#cbeaa6", buyed: true }
      dispatch(addCompra(temp));
      onDelete(comprar.id);
  }

  const onHandleChangeText = (text) => {
    setToBuy(text);
  };

  const onHandleDelete = (id) => {
    setModalVisible(!modalVisible);
    setSelectedToDelete(aComprar.find((item) => item.id === id));
  };

  const onHandleConfirm = (id) => {
    setModalVisible(!modalVisible);
    setSelectedToConfirm(aComprar.find((item) => item.id === id));
  };

  const deleteItem = (id) => {
    onDelete(id);
    setSelectedToDelete(null);
    setModalVisible(!modalVisible);
  };

  const confirmItem = (item) => {
    onUpdate(item);
    setSelectedToConfirm(null);
    setModalVisible(!modalVisible);
  };

  const cancelModal = () => {
    setSelectedToDelete(null);
    setSelectedToConfirm(null);
    setModalVisible(!modalVisible);
  };

  const addItem = () => {
    if (toBuy != "")
      onAdd({ id: Date.now(), value: toBuy, color: "#f9c784", buyed: false });
    
    setToBuy("");
  };

  const DeleteModal = () => (
    <>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Detalle de la lista</Text>
      </View>
      <View style={styles.modalMessageContainer}>
        <Text style={styles.modalMessage}>
          ¿Estas seguro de que quieres eliminar?
        </Text>
      </View>
      <View style={styles.modalMessageContainer}>
        <Text style={styles.selected}>{selectedToDelete?.value}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Eliminar"
          onPress={() => deleteItem(selectedToDelete?.id)}
          color="#e4572e"
        />
        <Button
          title="Cancelar"
          onPress={() => cancelModal()}
          color="#FCAF58"
        />
      </View>
    </>
  );

  const ConfirmModal = () => (
    <>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Detalle de la lista</Text>
      </View>
      <View style={styles.modalMessageContainer}>
        <Text style={styles.modalMessage}>
          ¿Estas seguro de que quieres marcar como comprado?
        </Text>
      </View>
      <View style={styles.modalMessageContainer}>
        <Text style={styles.selected}>{selectedToConfirm?.value}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Cancelar"
          onPress={() => cancelModal()}
          color="#FCAF58"
        />
        <Button
          title="Confirmar"
          onPress={() => confirmItem(selectedToConfirm)}
          color="#69995d"
        />
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <AddToBuy
        item={toBuy}
        onChangeText={onHandleChangeText}
        placeholder="Producto"
        addItem={addItem}
        selectionColor="#f18f01"
        placeholderTextColor="#f8bd7f"
        textButton="Agregar"
        color="#f18f01"
      />
      <FlatList
        style={styles.itemList}
        data={aComprar}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            onHandleDelete={onHandleDelete}
            onHandleConfirm={onHandleConfirm}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <CustomModal animationType="slide" visible={modalVisible}>
        {selectedToDelete && <DeleteModal />}
        {selectedToConfirm && <ConfirmModal />}
      </CustomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  titleContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: colors.gray,
    fontFamily: "Rubik-Bold",
    alignItems: "center",
  },
  itemList: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 16,
    fontFamily: "Rubik-Regular",
  },
  modalMessageContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  modalMessage: {
    fontSize: 14,
    fontFamily: "Rubik-Light",
  },
  selected: {
    fontSize: 16,
    color: "#000000",
    fontFamily: "Rubik-Bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
});
