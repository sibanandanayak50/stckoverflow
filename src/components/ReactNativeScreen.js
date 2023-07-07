import {
  View,
  Text,
  FlatList,
  Linking,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Styles} from './Styles';

const ReactNativeScreen = () => {
  const [reactNativeData, setReactNativeData] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.stackexchange.com/2.3/questions?order=asc&sort=hot&tagged=react_native&site=stackoverflow',
    )
      .then(response => response.json())
      .then(res => setReactNativeData(res.items))
      .catch(err => console.log('Fetch React Native Error', err));
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={Styles.innerContainer}>
        <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
          <Text style={Styles.textStyle}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return reactNativeData.length ? (
    <View style={Styles.container}>
      <FlatList
        data={reactNativeData}
        renderItem={item => renderItem(item)}
        keyExtractor={item => item.question_id}
      />
    </View>
  ) : (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color={'#3a5a40'} />
    </View>
  );
};

export default ReactNativeScreen;
