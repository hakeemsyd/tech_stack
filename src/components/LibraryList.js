import ListItem from './ListItem';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library} />
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={(library) => library.id}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    libraries: state.libraries,
    selectedLibraryId: state.selectedLibraryId
  }
};

export default connect(mapStateToProps)(LibraryList);
