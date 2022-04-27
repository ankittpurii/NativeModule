import {
  StyleSheet,
  Text,
  SafeAreaView,
  NativeModules,
  Button,
  NativeEventEmitter,
} from 'react-native';
import React, {useEffect} from 'react';
import CodePush from 'react-native-code-push';
import CustomButton from './src/Components/CustomButton';
const CalendarModule = NativeModules?.CalendarModule;
console.log(NativeModules, 'there');
CalendarModule?.createCalendarEvent('ankit', 'hsp');
CalendarModule?.getDataFromCallback(data => console.log(data));
console.log(CalendarModule.getConstants(), 'constants');
const eventEmitter = new NativeEventEmitter(CalendarModule);
const resolveCalendarPromise = async () => {
  try {
    const res = await CalendarModule.createCalendarPromise();
    console.log(res, 'Promise res');
  } catch (error) {
    console.log(error);
  }
};
var App = () => {
  const onButtonClick = () => {
    alert('Clicked');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello</Text>
      <Button title="Calendar promise" onPress={resolveCalendarPromise} />
      <CustomButton
        journeyItem={{
          journeyId: '1',
          destination: 'hsp',
          journeyType: 'my way',
        }}
        title={'Test Button'}
        onPress={onButtonClick}
      />
    </SafeAreaView>
  );
};
const codeOptions = {checkFrequency: CodePush.CheckFrequency.ON_APP_START};
App = CodePush(codeOptions)(App);

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
