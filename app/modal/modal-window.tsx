import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemeText from '@/presentation/shared/ThemeText';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform } from 'react-native';

const ModalScreen = () => {
  return (
    <ThemedView className="justify-center items-center flex-1">
      <ThemeText>Hola, soy un modal</ThemeText>

      <ThemedButton
        onPress={() => router.push("/modal/modal-window-2")}
        className="my-2"
      >
        Abrir modal
      </ThemedButton>

      <ThemedButton onPress={() => router.dismiss()}>
        Cerrar modal
      </ThemedButton>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemedView>
  );
}

export default ModalScreen