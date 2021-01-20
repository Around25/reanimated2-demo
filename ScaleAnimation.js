
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';


const TimeConfigurations = { duration: 50, easing: Easing.linear };

export const ScaleAnimation = ({ onPress, children, scaleTo, disabled }) => {
  const pressed = useSharedValue(false);
  const progress = useDerivedValue(() => {
    return pressed.value
      ? withTiming(1, TimeConfigurations)
      : withTiming(0, TimeConfigurations);
  });
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      progress.value,
      [0, 1],
      [1, scaleTo],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{ scale }],
    };
  });

  return (
    <TouchableWithoutFeedback
      onPressIn={() => {
        pressed.value = true;
      }}
      onPressOut={() => {
        pressed.value = false;
      }}
      onPress={onPress}
      disabled={disabled}>
      <Animated.View style={animatedStyle}>{children}</Animated.View>
    </TouchableWithoutFeedback>
  );
};
