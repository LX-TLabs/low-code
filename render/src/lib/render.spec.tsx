import { render } from '@testing-library/react';

import Render from './render';

describe('Render', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Render />);
    expect(baseElement).toBeTruthy();
  });
});
