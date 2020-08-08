/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomCalloutView from './Components/custom.text';
import albergues from './albergues.json';
import nochedigna from './nochedigna.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      searchString: '',
      searchStringOld: '',
      coordinate: {latitude: -33.6583116, longitude: -70.92635709999999},
      region: null,
      markers: albergues.concat(nochedigna),
    };
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        let region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          // latitude: -33.6583116,
          // longitude: -70.92635709999999,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        };
        this.setState({region});

        let coordinate = {
          latitude: -33.6583116,
          longitude: -70.92635709999999,
        };
        this.setState({coordinate});
      },
      (error) => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 10000},
    );
  }

  buscar = async () => {
    console.log('buscar: ' + this.state.searchString);

    if (this.state.searchString === this.state.searchStringOld) {
      return;
    }

    this.setState({searchStringOld: this.state.searchString});
    let address = this.state.searchString;
    address = address.replace(' ', '+');

    const MAP_GOOGLE_API = "https://maps.googleapis.com/maps/api/geocode/json";
    const API_KEY = "";
    const URL = MAP_GOOGLE_API + '?address=' + address + '&key=' + API_KEY;
    // const URL = "https://run.mocky.io/v3/183edb23-65fa-4954-8559-07a3905ed748";
    console.log(URL);
    try {
      this.setState({isLoading: true});
      let response = await fetch(URL);
      let json = await response.json();
      console.log(json);
      let region = {
        latitude: json.results[0].geometry.location.lat,
        longitude: json.results[0].geometry.location.lng,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      };
      this.setState({region});

      let coordinate = {
        latitude: json.results[0].geometry.location.lat,
        longitude: json.results[0].geometry.location.lng,
      };
      this.setState({coordinate});
      this.setState({isLoading: false});
    } catch (error) {
      Alert.alert('Dirección no encontrada');
      console.error(error);
    }
  };

  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={styles.container}>
          <View style={styles.containerSearch}>
            <TextInput
              style={[styles.input, {height: Platform.OS == 'android' ? 40 : 20}]}
              value = {this.state.searchString}
              onChangeText = {(searchString) => {this.setState({searchString})}}
              placeholder = 'Search'
              keyboardType = 'web-search'
              onSubmitEditing = {()=>{this.buscar()}}
            />
            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                this.buscar();
              }}
              underlayColor="transparent"
            >
              <View>
                <Icon name="search" size={20} color="#4285F4" />
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.containermap}>
            <MapView style={styles.map} region={this.state.region}>
              {this.state.markers.map((marker) => (
                <Marker
                  key={marker.coordinates.latitude}
                  coordinate={marker.coordinates}
                  title={marker.title}
                  description={marker.description}>
                  <Callout>
                    <CustomCalloutView
                      name={marker.name}
                      address={marker.address}
                      institution={marker.institution}
                      hours={marker.hours}
                      places={marker.places}
                    />
                  </Callout>
                </Marker>
              ))}
              <Marker
                key={1}
                coordinate={this.state.coordinate}
                title={'current position'}
                description={'place searched'}
                pinColor={'#000000'}
              />
            </MapView>
          </View>
        </View>
        {this.state.isLoading && (
          <ActivityIndicator
            size="large"
            color={'#0000ff'}
            style={StyleSheet.absoluteFillObject}
          />
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    flexDirection: 'column',
  },
  containerSearch: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    backgroundColor: 'white',
  },
  button: {},
  containermap: {
    flex: 15,
    paddingTop: 20,
  },
  map: {
    flex: 1,
  },
});
