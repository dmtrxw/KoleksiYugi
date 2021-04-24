import React from 'react';
import {Text} from 'react-native';
import {Colors} from 'react-native-paper';

function SurfaceSection({title, value, valueStyle}) {
  return (
    <>
      <Text style={{color: Colors.grey500}}>{title}</Text>
      <Text style={[{marginBottom: 8}, valueStyle]}>{value}</Text>
    </>
  );
}

export default SurfaceSection;
