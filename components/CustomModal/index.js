import React from "react";
import { Modal } from "react-native";

export const CustomModal = ({ children, visible, animationType, onRequestClose }) => {
  return (
    <Modal animationType={animationType} visible={visible} onRequestClose={onRequestClose}>
      {children}
    </Modal>
  )
}
