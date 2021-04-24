import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TouchableRipple, Searchbar, Colors} from 'react-native-paper';

function Header({handleCardNumberSubmit}) {
  const [cardNumber, setCardNumber] = useState('');

  const handleCardNumberChange = query => {
    setCardNumber(query);
  };

  return (
    <Searchbar
      placeholder="e.g. LOB-001"
      onChangeText={handleCardNumberChange}
      onSubmitEditing={() => handleCardNumberSubmit(cardNumber)}
      value={cardNumber}
      accessibilityState={{disabled: true}}
      style={{
        marginHorizontal: 16,
        marginTop: 16,
      }}
    />
  );
}

export default Header;
