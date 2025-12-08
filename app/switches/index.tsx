import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';

const Switches = () => {
  const [state, setSate] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <ThemedView className="mt-2">
      <ThemedCard>
        {/* <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={state.isActive ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setSate({...state, isActive: value})}
          value={state.isActive}
        /> */}
        <ThemedSwitch
          text="Activo"
          value={state.isActive}
          onValueChanged={(value) => setSate({ ...state, isActive: value })}
          className="mb-4"
        />

        <ThemedSwitch
          text="Hambriento"
          value={state.isHungry}
          onValueChanged={(value) => setSate({ ...state, isHungry: value })}
          className="mb-4"
        />

        <ThemedSwitch
          text="Feliz"
          value={state.isHappy}
          onValueChanged={(value) => setSate({ ...state, isHappy: value })}
          className="mb-4"
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
