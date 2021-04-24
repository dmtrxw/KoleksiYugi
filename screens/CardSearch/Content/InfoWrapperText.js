import React from 'react';
import {Text} from 'react-native';
import {Colors} from 'react-native-paper';

function InfoWrapperText({children}) {
  return (
    <Text
      style={{
        color: Colors.grey400,
        fontSize: 24,
        textAlign: 'center',
      }}>
      {children}
    </Text>
  );
}

export default InfoWrapperText;
