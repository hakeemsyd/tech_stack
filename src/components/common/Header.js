import React, { Component } from 'react';
import { View, Text } from 'react-native';

type Props = {
  headerText: string,
};
type State = {};
class Header extends Component<Props, State> {
  render() {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{this.props.headerText}</Text>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',

  },
  textStyle: {
    fontSize: 20,
  }
};

export { Header };
