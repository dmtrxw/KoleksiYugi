import React from 'react';
import {View} from 'react-native';

function Container({children, ...rest}) {
  return (
    <View style={{flex: 1, backgroundColor: '#f0f0f0'}} {...rest}>
      {children}
    </View>
  );
}

export default Container;
