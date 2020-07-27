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
            <Text>{name}</Text>
            <Text>{address}</Text>
            <Text>{institution}</Text>
            <Text>{hours}</Text>
            <Text>{places}</Text>
        </View>
      );
    }
  }
  export default CustomCalloutView;