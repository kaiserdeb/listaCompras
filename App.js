import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { ListItem, AddToBuy, CustomModal } from './components'
import { Icon }from 'react-native'

export default function App() {
  const [toBuy, setToBuy] = useState('');
  const [shoppingList, setShoppingList] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedToDelete, setSelectedToDelete] = useState(null);
  const [selectedToConfirm, setSelectedToConfirm] = useState(null);

  const onHandleChangeText = (text) => {
    setToBuy(text);
  }

  const onHandleDelete = (id) => {
    setModalVisible(!modalVisible);
    setSelectedToDelete(shoppingList.find((item) => item.id === id))
  }

  const onHandleConfirm = (id) => {
    setModalVisible(!modalVisible);
    setSelectedToConfirm(shoppingList.find((item) => item.id === id))
  }

  const deleteItem = (id) => {
    setShoppingList(shoppingList.filter((item) => item.id !== id));
    setSelectedToDelete(null);
    setModalVisible(!modalVisible);
  }
  
  const confirmItem = (id) => {
    let prevItem = { ...shoppingList.find((item) => item.id === id), color: '#cbeaa6', buyed: true};
    setShoppingList([...shoppingList.filter((item) => item.id !== id), prevItem ]);
    //setShoppingList((prevShoppingList) => [...prevShoppingList, prevItem ]);
    console.log(shoppingList);
    setSelectedToConfirm(null);
    setModalVisible(!modalVisible);
  }
  
  const cancelModal = () => {
    setSelectedToDelete(null);
    setSelectedToConfirm(null);
    setModalVisible(!modalVisible);
  }
  
  const addItem = () => {
    setShoppingList((prevShoppingList) => [
      ...prevShoppingList,
      { id: Date.now(), value: toBuy, color: '#f9c784', buyed: false },
    ]);
    setToBuy('');
  }
  
  const DeleteModal = () => (
    <>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Detalle de la lista</Text>
      </View>
      <View style={styles.modalMessageContainer}> 
        <Text style={styles.modalMessage}>¿Estas seguro de que quieres eliminar?</Text>
      </View>
      <View style={styles.modalMessageContainer}> 
        <Text style={styles.selected}>{selectedToDelete?.value}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Eliminar' onPress={() => deleteItem(selectedToDelete?.id)} color='#e4572e'/>
        <Button title='Cancelar' onPress={() => cancelModal()} color='#FCAF58'/>
      </View>
    </>
  )
  
  const ConfirmModal = () => (
    <>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Detalle de la lista</Text>
      </View>
      <View style={styles.modalMessageContainer}> 
        <Text style={styles.modalMessage}>¿Estas seguro de que quieres marcar como comprado?</Text>
      </View>
      <View style={styles.modalMessageContainer}> 
        <Text style={styles.selected}>{selectedToConfirm?.value}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Cancelar' onPress={() => cancelModal()} color='#FCAF58'/>
        <Button title='Confirmar' onPress={() => confirmItem(selectedToConfirm?.id)} color='#69995d'/>
      </View>
    </>
  )



  return (
    <View style={styles.container}>
      <AddToBuy 
        item={toBuy}
        onChangeText={onHandleChangeText}
        placeholder='Producto'
        addItem={addItem}
        selectionColor='#f18f01'
        placeholderTextColor='#f8bd7f'
        textButton='Agregar'
        color='#f18f01'
      />
      <FlatList
        style={styles.itemList}
        data={shoppingList}
        renderItem={({item}) => <ListItem item={item} onHandleDelete={onHandleDelete} onHandleConfirm={onHandleConfirm} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <CustomModal animationType='slide' visible={modalVisible}>
        { selectedToDelete && <DeleteModal/> }
        { selectedToConfirm && <ConfirmModal/> }
      </CustomModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  itemList: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 16
  },
  modalMessageContainer : {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  modalMessage: {
    fontSize: 14,
  },
  selected: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
});
