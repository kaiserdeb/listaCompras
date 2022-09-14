import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const ListItem = ({item, onHandleDelete, onHandleConfirm}) => {
  return (
    <View style={{ backgroundColor: item.color,...styles.itemContainer}}>
        <TouchableOpacity style={styles.buttonDelete} onPress={() => onHandleDelete(item.id)}>
        <Text style={styles.delete}>X</Text>
        </TouchableOpacity>
        <Text style={styles.item}>{item.value}</Text>
        { !item.buyed && (<TouchableOpacity style={styles.buttonConfirm} onPress={() => onHandleConfirm(item.id)}>
        <Text style={styles.confirm}>OK</Text>
        </TouchableOpacity>)}
    </View>
  )
}
//f9c784
//cbeaa6
const styles = StyleSheet.create({
    itemContainer: {
      flex: 1,
      marginVertical: 5,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      paddingHorizontal: 10,
      paddingVertical: 20,
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    item: {
      fontSize: 16,
      textAlign: 'center',
      color: '#000000',
    },
    delete: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#ffffff'
    },
    confirm: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#ffffff'
    },
    button: {
      backgroundColor: '#e4572e',
      padding: 5,
      paddingHorizontal:10,
      borderRadius: 20,
    },
    buttonConfirm: {
      backgroundColor: '#69995d',
      padding: 5,
      paddingHorizontal:10,
      borderRadius: 20,
    },
    buttonDelete: {
      backgroundColor: '#e4572e',
      padding: 5,
      paddingHorizontal:10,
      borderRadius: 20,
    }
  });
  