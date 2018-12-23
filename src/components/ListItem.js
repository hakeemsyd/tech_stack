import * as actions from './../actions';
import { CardSection, } from './common';
import React, { Component } from 'react';
import { LayoutAnimation, Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';

class ListItem extends Component {

  componentDidUpdate() {
    LayoutAnimation.spring();
  }
  
  renderDescription() {
    const {descriptionStyle} = styles;
    if (this.props.expanded) {
      return (
        <CardSection>
          <Text style={descriptionStyle}>{this.props.library.item.description}</Text>
        </CardSection>
      )
    }
  }

  onItemSelected() {
    console.log(this.props.library.item.id);
    this.props.selectLibrary(this.props.library.item.id);
  }
  render() {
    const {titleStyle} = styles;
    return (
      <TouchableWithoutFeedback onPress={this.onItemSelected.bind(this)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{this.props.library.item.title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  descriptionStyle: {
    fontSize: 11,
    paddingLeft: 15,
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    expanded: state.selectedLibraryId == ownProps.library.item.id,
  };
};
// pass actions to LisItem (this) component as props
export default connect(mapStateToProps, actions)(ListItem);
