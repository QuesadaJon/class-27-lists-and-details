import React from 'react';
import { render } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  it('matches a snapshot', () => {
    const { asFragment } = render(
      <Character 
        name="Samuel"
        photoUrl="http//image.com"
        affiliation="affiliation"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
