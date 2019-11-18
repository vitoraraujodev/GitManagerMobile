import React from 'react';
import PropTypes from 'prop-types';

import { Browser } from './styles';

export default function Repository({ navigation }) {
  const { repository } = navigation.state.params;
  return <Browser source={{ uri: repository.html_url }} />;
}

Repository.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.shape({
          name: PropTypes.string,
          html_url: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

Repository.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.repository.name,
});
