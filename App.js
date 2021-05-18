import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Map from './Map';
import Direction from './Direction';

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor="black" hidden={true} />
      {/* <Map /> */}
      <Direction />
    </View>
  );
};

export default App;
