/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import {ScaleAnimation} from './ScaleAnimation';
import {EntryAnimation} from './EntryAnimation';

const App = () => {
  const renderText = () => (
    <View>
      <Text style={{fontSize: 30}}>Button</Text>
    </View>
  );

  const renderContent = () => {
    return <>{renderText()}</>;
  };

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <EntryAnimation index={1}>
          <ScaleAnimation onPress={() => {}} disabled={false} scaleTo={0.97}>
            <View
              style={styles.button}
              height={80}
              width={250}
              backgroundColor={'#7ab2c9'}>
              {renderContent()}
            </View>
          </ScaleAnimation>
        </EntryAnimation>
        <EntryAnimation index={2}>
          <ScaleAnimation onPress={() => {}} disabled={false} scaleTo={0.97}>
            <View
              style={styles.button}
              height={80}
              width={250}
              backgroundColor={'#cb6442'}>
              {renderContent()}
            </View>
          </ScaleAnimation>
        </EntryAnimation>
        <EntryAnimation index={3}>
          <ScaleAnimation onPress={() => {}} disabled={false} scaleTo={0.97}>
            <View
              style={styles.button}
              height={80}
              width={250}
              backgroundColor={'#e5cabb'}>
              {renderContent()}
            </View>
          </ScaleAnimation>
        </EntryAnimation>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 50,
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
