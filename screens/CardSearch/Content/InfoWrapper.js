import React from 'react';
import {View} from 'react-native';

function InfoWrapper({children}) {
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        padding: 16,
      }}>
      {children}
    </View>
  );
}

export default InfoWrapper;
