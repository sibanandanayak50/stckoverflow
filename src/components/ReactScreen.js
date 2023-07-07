import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Styles} from './Styles';

const ReactScreen = () => {
  const [reactData, setReactData] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.stackexchange.com/2.3/questions?order=asc&sort=hot&tagged=react&site=stackoverflow',
    )
      .then(response => response.json())
      .then(res => setReactData(res.items))
      .catch(err => console.log('Fetch React Error', err));
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
  return reactData.length ? (
    <View style={Styles.container}>
      <FlatList
        data={reactData}
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

export default ReactScreen;
