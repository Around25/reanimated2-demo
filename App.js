import React from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import {ScaleAnimation} from './ScaleAnimation';
import {EntryAnimation} from './EntryAnimation';

function Button({backgroundColor = 'tomato', children}) {
  return (
    <View
      style={[
        styles.button,
        {
          height: 80,
          width: 250,
          backgroundColor,
        },
      ]}>
      <Text style={{fontSize: 30}}>{children}</Text>
    </View>
  );
}

function Spacer() {
  return <View style={{height: 50, width: 50}} />;
}

function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <EntryAnimation index={1}>
        <ScaleAnimation onPress={() => {}} disabled={false} scaleTo={0.97}>
          <Button backgroundColor="#7ab2c9">Button</Button>
        </ScaleAnimation>
      </EntryAnimation>

      <Spacer />

      <EntryAnimation index={2}>
        <ScaleAnimation onPress={() => {}} disabled={false} scaleTo={0.97}>
          <Button backgroundColor="#cb6442">Button</Button>
        </ScaleAnimation>
      </EntryAnimation>

      <Spacer />

      <EntryAnimation index={3}>
        <ScaleAnimation onPress={() => {}} disabled={false} scaleTo={0.97}>
          <Button backgroundColor="#e5cabb">Button</Button>
        </ScaleAnimation>
      </EntryAnimation>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});

export default App;
