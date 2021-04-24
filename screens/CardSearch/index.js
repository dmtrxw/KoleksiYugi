import React, {useState, useReducer} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {Title, Searchbar, ActivityIndicator, Colors} from 'react-native-paper';

import Container from './Container';
import Content from './Content';
import Header from './Header';

import reducer, {initialState} from './reducer';
import {fetchCardInformation} from './actions';

function CardSearch() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCardNumberSubmit = async cardNumber => {
    try {
      dispatch({type: 'FETCH_DATA_INIT'});

      const data = await fetchCardInformation(cardNumber);
      dispatch({type: 'FETCH_DATA_SUCCESS', payload: data});
    } catch (error) {
      dispatch({type: 'FETCH_DATA_ERROR', payload: error});
    }
  };
  return (
    <Container>
      <Header handleCardNumberSubmit={handleCardNumberSubmit} />
      <Content state={state} />
    </Container>
  );
}

export default CardSearch;
