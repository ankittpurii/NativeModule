import {
  StyleSheet,
  Text,
  SafeAreaView,
  NativeModules,
  Button,
  NativeEventEmitter,
} from 'react-native';
import React, {useEffect} from 'react';
const {CalendarModule} = NativeModules;
CalendarModule.createCalendarEvent('ankit', 'hsp');
CalendarModule.getDataFromCallback(data => console.log(data));
const eventEmitter = new NativeEventEmitter(CalendarModule);
const resolveCalendarPromise = async () => {
  try {
    const res = await CalendarModule.createCalendarPromise();
    console.log(res, 'Promise res');
  } catch (error) {
    console.log(error);
  }
};
const App = () => {
  useEffect(() => {
    eventEmitter.addListener('EventCount', data =>
      console.log('listener', data),
    );
    return () => {
      eventEmitter.removeAllListeners();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>App</Text>
      <Button title="Calendar promise" onPress={resolveCalendarPromise} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
