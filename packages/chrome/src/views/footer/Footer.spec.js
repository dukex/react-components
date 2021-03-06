/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Footer from './Footer';

describe('Footer', () => {
  it('renders default styling', () => {
    const { container } = render(<Footer />);

    expect(container.firstChild).toHaveClass('c-chrome__body__footer');
  });
});
