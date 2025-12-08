import { useThemeColor } from '@/hooks/use-theme-color';
import { Platform, Pressable, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import ThemeText from './ThemeText';

interface Props {
    text?: string;
    value: boolean;
    className?:  string;

    onValueChanged: (value:boolean) => void;
}

const isAndroid = Platform.OS === 'android';

const ThemedSwitch = ({
    text, value, className, onValueChanged
}: Props) => {

    const switchActiveColor = useThemeColor({}, 'primary');
  return (
    <Pressable
      className={`flex flex-row mx-2 items-center justify-between active:opacity-80 ${className}`}
      onPress={() => onValueChanged(!value)}
    >
      {text ? <ThemeText type="h2">{text}</ThemeText> : <View />}
      <Switch
        value={value}
        onValueChange={onValueChanged}
        thumbColor={isAndroid ? switchActiveColor : ""}
        trackColor={{
          false: "grey",
          true: switchActiveColor,
        }}
      />
    </Pressable>
  );
}

export default ThemedSwitch