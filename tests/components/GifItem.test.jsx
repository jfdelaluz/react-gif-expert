import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Tests - GifItem Component', () => {

  const title = 'Test Title';
  const url = 'http://www.testurl.com/test-image';

  test('Should match snapshot', () => {
    const { container } = render( <GifItem url={ url } title={ title } /> );
    expect( container ).toMatchSnapshot();
  });

  test('Should display image with correct URL and ALT', () => {
    render( <GifItem url={ url } title={ title } /> );

    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe( url );
    expect( alt ).toBe( title );
  });

  test('should display title in component', () => {
    render( <GifItem url={ url } title={ title } /> );
    expect( screen.getByText( title ) ).toBeTruthy();
  });
});

