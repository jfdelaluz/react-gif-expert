import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests - GifGrid component', () => {

  const category = 'One Punch';

  test('Should display loading first', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render( <GifGrid category={ category } /> );
    expect( screen.getByText('Loading...') ).toBeTruthy();
    expect( screen.getByText(category) ).toBeTruthy();
  });

  test('should display items when images load from useFetchGifs', () => {

    const gifs = [
      {
        id: 'abc',
        title: 'Saitama',
        url: 'http://www.saitama.com/gif'
      },
      {
        id: '123',
        title: 'Goku',
        url: 'http://www.goku.com/gif'
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render( <GifGrid category={ category } /> );
    
    expect( screen.getAllByRole('img').length ).toBe(2);
  });
});
