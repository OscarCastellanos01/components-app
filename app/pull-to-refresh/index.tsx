import { useThemeColor } from '@/hooks/use-theme-color';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemeText from '@/presentation/shared/ThemeText';
import { useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';

const PullToRefreshScreen = () => {

  const primaryColor = useThemeColor({}, 'primary');
  const backgroundColor = useThemeColor({
    dark: 'black',
    light: 'white'
  }, 'background');

  const [isRefrehing, setIsRefreshing] = useState(false);

  const onRefresh = async() => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefrehing}
          onRefresh={onRefresh}
          colors={[primaryColor, "red", "green"]}
          progressBackgroundColor={backgroundColor}
        />
      }
    >
      <ThemedView>
        <ThemeText>PullToRefreshScreen</ThemeText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
