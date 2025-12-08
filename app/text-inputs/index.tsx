import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemeText from '@/presentation/shared/ThemeText';

const isIOS = Platform.OS === 'ios';

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <KeyboardAvoidingView behavior={isIOS ? "padding" : "height"}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <ThemedView className="mx-4">
          <ThemedCard className="mb-5">
            <ThemedTextInput
              placeholder="Nombre Completo"
              autoCapitalize={"words"}
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
            <ThemedTextInput
              placeholder="Correo Electronico"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
            <ThemedTextInput
              placeholder="Telefono"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>

          <ThemedCard className="my-2">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemedCard>

          <ThemedCard className="mb-4">
            <ThemedTextInput
              placeholder="Nombre Completo"
              autoCapitalize={"words"}
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
            <ThemedTextInput
              placeholder="Correo Electronico"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
            <ThemedTextInput
              placeholder="Telefono"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
