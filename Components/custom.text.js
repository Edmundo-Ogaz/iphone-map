import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class CustomCalloutView extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        institution: PropTypes.string.isRequired,
        hours: PropTypes.string.isRequired,
        places: PropTypes.string.isRequired,
    }
    render = () => {
      const { name, address, institution, hours, places } = this.props;
      
      return (
        <View>
            <Text>Nombre: {name}</Text>
            <Text>Dirección: {address}</Text>
            <Text>Institución: {institution}</Text>
            <Text>Horario: {hours}</Text>
            <Text>Cupos: {places}</Text>
        </View>
      );
    }
  }
  export default CustomCalloutView;