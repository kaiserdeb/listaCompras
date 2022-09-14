import React from 'react'
import { StyleSheet, View, TextInput, Button } from "react-native";

export const AddToBuy = ({ item, onChangeText, placeholder, addItem, selectionColor, placeholderTextColor, textButton, color }) => {
  return (
    <View style={styles.inputContainer}>
    <TextInput 
      placeholder={placeholder}
      style={styles.input}
      selectionColor={selectionColor}
      placeholderTextColor={placeholderTextColor}
      onChangeText={onChangeText}
      value={item}
    />
    <Button
        title={textButton}
        onPress={addItem} 
        color={color}
     />
  </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
      marginTop: 50,
      marginBottom: 20,
      marginHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    input: {
      width: '75%',
      borderBottomColor: '#f18f01',
      borderBottomWidth: 1,
      height: 40,
      color: '#212121',
    },
})
