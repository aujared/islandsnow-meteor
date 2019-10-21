import React from 'react';
import { Image } from 'semantic-ui-react';

export default class FullWidthImage extends React.Component {
  render() {
    return (
        <Image centered fluid
               src={'https://learntosurfkona.com/wp-content/uploads/kids-surf-lessons-big-island.jpg'}
        />
    );
  }
}
