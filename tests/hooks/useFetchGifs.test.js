import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Tests - useFetchGifs hook', () => {
  test('should return initial state', () => {
    const { result } = renderHook( () => { return useFetchGifs('Dragon Quest'); });
    const { images, isLoading } = result.current;

    expect( images.length ).toBe(0);
    expect( isLoading ).toBeTruthy();
  });

  test('should return updated state (images.length > 0 and isLoading = false)', async () => {
    const { result } = renderHook( () => { return useFetchGifs('Dragon Quest'); });
    await waitFor( () => {
      expect( result.current.images.length ).toBeGreaterThan(0);
    } );

    const { images, isLoading } = result.current;

    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();
  });
});
