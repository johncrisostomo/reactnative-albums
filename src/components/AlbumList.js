import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => this.setState({ albums: response.data }) )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.state.albums)}</Text>
      </View>
    );
  }
}

export default AlbumList;
