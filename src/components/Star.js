import React, {PureComponent} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

const STAR_IMAGE = require( '../images/airbnb-star.png' );
const STAR_SELECTED_IMAGE = require( '../images/airbnb-star-selected.png' );
const STAR_SIZE = 40;

export default class Star extends PureComponent {
  static defaultProps = {
    selectedColor: '#f1c40f'
  };

  constructor() {
    super();

    this.state = {
      selected: false
    };
  }

  spring() {
    const { position, starSelectedInPosition } = this.props;


    this.setState( { selected: !this.state.selected } );
    starSelectedInPosition( position );
  }

  render() {
    const { fill, size, selectedColor, isDisabled, starStyle } = this.props;
    const starSource = fill && selectedColor === null ? STAR_SELECTED_IMAGE : STAR_IMAGE;

    return (
      <TouchableOpacity activeOpacity={1} onPress={this.spring.bind( this )} disabled={isDisabled}>
        <FastImage
          source={starSource}
          tintColor={fill && selectedColor ? selectedColor : undefined}
          style={[
            styles.starStyle,
            {
              tintColor: fill && selectedColor ? selectedColor : undefined,
              width: size || STAR_SIZE,
              height: size || STAR_SIZE,
            },
            starStyle
          ]}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create( {
  starStyle: {
    margin: 3,
  }
} );
