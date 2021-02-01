import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  interpolate,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

export const EntryAnimation = ({children, index}) => {
  const play = useSharedValue(false);
  const progress = useDerivedValue(() => {
    return play.value
      ? withDelay(50 * (index ?? 0), withTiming(1, {duration: 350}))
      : 0;
  });

  useEffect(() => {
    play.value = true;
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(progress.value, [0, 1], [0, 1]);
    const translateY = interpolate(progress.value, [0, 1], [100, 0]);

    return {
      opacity,
      transform: [{translateY}],
    };
  });

  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
};
