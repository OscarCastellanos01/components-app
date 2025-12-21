import { View, ViewProps } from 'react-native';

interface Props extends ViewProps {
    className?: string;
    margin?: boolean;
    safe?: boolean;
    bgColor?: string;
}

const ThemedView = ({
    style,
    className,
    margin = false,
    safe=false,
    bgColor,
    children,
}: Props) => {
  return (
    <View className={`bg-light-background dark:bg-dark-background ${className}`}>
      {children}
    </View>
  );
}

export default ThemedView