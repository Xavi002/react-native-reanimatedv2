import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import {View, StyleSheet} from 'react-native';

const BasicAnimation: React.FC = () => {
  const titlePosition = useSharedValue(30);
  const titleOpacity = useSharedValue(0);

  useEffect(() => {
    setTimeout(() => {
      titlePosition.value = withTiming(0, {
        duration: 1000,
        easing: Easing.bounce,
      });
    }, 2000);

    setTimeout(() => {
      titleOpacity.value = withTiming(1, {
        duration: 1000,
        easing: Easing.bounce,
      });
    }, 2000);
  }, []);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: titlePosition.value}],
      opacity: titleOpacity.value,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title, titleStyle]}>Olá</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#dddddd',
  },
});

export default BasicAnimation;
