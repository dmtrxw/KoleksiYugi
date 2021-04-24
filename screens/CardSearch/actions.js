const YGOPRODECK_API_URL = 'https://db.ygoprodeck.com/api/v7';

export const fetchCardInformation = async cardNumber => {
  const cardSetsInfoResponse = await fetch(
    `${YGOPRODECK_API_URL}/cardsetsinfo.php?setcode=${cardNumber.toUpperCase()}`,
  );

  const cardSetsInfo = await cardSetsInfoResponse.json();

  if (cardSetsInfo.hasOwnProperty('error')) {
    console.log(cardSetsInfo);
    throw new Error('No card matching your query was found in the database');
  } else {
    const cardInfoResponse = await fetch(
      `${YGOPRODECK_API_URL}/cardinfo.php?name=${cardSetsInfo.name}`,
    );

    const {data} = await cardInfoResponse.json();
    // Only get first record from array of result
    const cardInfo = data[0];
    // Only get first record from array of images
    const cardImage = cardInfo.card_images[0].image_url;

    return {
      ...cardSetsInfo,
      card_image: `https://storage.googleapis.com/ygoprodeck.com/pics/${cardInfo.id}.jpg`,
    };
  }
};
