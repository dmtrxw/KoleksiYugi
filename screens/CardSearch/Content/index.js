import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {ActivityIndicator, Surface, Colors} from 'react-native-paper';

import InfoWrapper from './InfoWrapper';
import InfoWrapperText from './InfoWrapperText';
import SurfaceSection from './SurfaceSection';

function Content({state: {isLoading, error, data}, dispatch}) {
  if (isLoading) {
    return (
      <InfoWrapper>
        <ActivityIndicator size="large" />
      </InfoWrapper>
    );
  }

  if (error) {
    return (
      <InfoWrapper>
        <InfoWrapperText>{error.message}</InfoWrapperText>
      </InfoWrapper>
    );
  }

  if (!data.hasOwnProperty('id')) {
    return (
      <InfoWrapper>
        <InfoWrapperText>
          Start searching for card information by submitting the card number.
        </InfoWrapperText>
      </InfoWrapper>
    );
  }

  return (
    <ScrollView>
      <View style={{padding: 16}}>
        <View style={{alignItems: 'center', marginBottom: 16}}>
          <Image
            style={{width: 200, height: 300}}
            source={{uri: data.card_image}}
            resizeMode="contain"
          />
        </View>

        <Text style={{marginBottom: 8, fontWeight: 'bold', fontSize: 18}}>
          Card Information
        </Text>

        <Surface
          style={{
            paddingHorizontal: 16,
            paddingTop: 16,
            paddingBottom: 8,
            elevation: 4,
            borderRadius: 4,
          }}>
          <SurfaceSection title="Set Name" value={data.set_name} />
          <SurfaceSection title="Set code" value={data.set_code} />
          <SurfaceSection title="Rarity" value={data.set_rarity} />
          <SurfaceSection
            title="Price"
            value={
              data.set_price !== '0.00'
                ? `${data.set_price} USD`
                : 'Not available'
            }
            valueStyle={{fontWeight: 'bold', color: Colors.green800}}
          />
        </Surface>
      </View>
    </ScrollView>
  );
}

export default Content;
