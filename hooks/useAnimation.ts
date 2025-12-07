import { useRef } from "react";
import { Animated, Easing } from "react-native";

const useAnimation = () => {
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;

    const fadeIn = ({ 
        duration = 300, 
        toValue = 1, 
        useNativeDriver = true, 
        easing = Easing.linear, 
        callback = () => {}
    }) => {
      Animated.timing(animatedOpacity, {
        toValue: toValue,
        duration: duration,
        useNativeDriver: useNativeDriver,
        easing: easing,
      }).start(callback);
    };

    const fadeOut = ({
      duration = 300,
      toValue = 0,
      useNativeDriver = true,
      easing = Easing.ease,
      callback = () => {},
    }) => {
      Animated.timing(animatedOpacity, {
        duration: duration,
        toValue: toValue,
        useNativeDriver: useNativeDriver,
        easing: easing,
        // }).start(() => animatedTop.setValue(-100));
        //() => animatedTop.resetAnimation()
      }).start(callback);
    };

    const startMovingTopPosition = ({
        initialPosition = -100,
      duration = 300,
      toValue = 0,
      useNativeDriver = true,
      easing = Easing.ease,
      callback = () => {},
    }) => {
        animatedTop.setValue(initialPosition);
      Animated.timing(animatedTop, {
        duration: duration,
        toValue: toValue,
        useNativeDriver: useNativeDriver,
        // easing: Easing.elastic(2),
        // easing: Easing.bounce,
        easing: easing,
      }).start(callback);
    };
  return {
    animatedOpacity,
    animatedTop,

    // Methos
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  };
}

export default useAnimation
