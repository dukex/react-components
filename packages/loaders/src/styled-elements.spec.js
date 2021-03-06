/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { DotsCircle, SpinnerCircle, StyledSVG } from './styled-elements';

describe('Loader styled-elements', () => {
  describe('DotsCircle', () => {
    it('applies transform correctly', () => {
      const { getByTestId } = render(
        <svg>
          <DotsCircle transform="2" data-test-id="circle" />
        </svg>
      );

      expect(getByTestId('circle')).toHaveAttribute('transform', '2');
    });
  });

  describe('SpinnerCircle', () => {
    it('applies transform correctly', () => {
      const { getByTestId } = render(
        <svg>
          <SpinnerCircle
            strokeWidthValue="25px"
            dasharrayValue="30"
            transform="2"
            data-test-id="circle"
          />
        </svg>
      );

      const circle = getByTestId('circle');

      expect(circle).toHaveAttribute('stroke-width', '25px');
      expect(circle).toHaveAttribute('stroke-dasharray', '30 250');
      expect(circle).toHaveAttribute('transform', '2');
    });
  });

  describe('StyledSVG', () => {
    it('applies font-size if provided', () => {
      const { container } = render(<StyledSVG fontSize="12px" />);

      expect(container.firstChild).toHaveStyleRule('font-size', '12px');
    });

    it('defaults font-size to inherit if not provided', () => {
      const { container } = render(<StyledSVG />);

      expect(container.firstChild).toHaveStyleRule('font-size', 'inherit');
    });

    it('applies color if provided', () => {
      const { container } = render(<StyledSVG color="red" />);

      expect(container.firstChild).toHaveStyleRule('color', 'red');
    });

    it('defaults color to inherit if not provided', () => {
      const { container } = render(<StyledSVG />);

      expect(container.firstChild).toHaveStyleRule('color', 'inherit');
    });

    it('applies width and height if provided', () => {
      const width = '2em';
      const height = '4em';

      const { container } = render(<StyledSVG width={width} height={height} />);

      expect(container.firstChild).toHaveAttribute('width', width);
      expect(container.firstChild).toHaveAttribute('height', height);
      expect(container.firstChild).toHaveAttribute('viewBox', `0 0 ${width} ${height}`);
    });
  });
});
