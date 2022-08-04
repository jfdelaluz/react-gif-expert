import { getGifByCategory } from '../../src/helpers/getGifByCategory';

describe('Tests - getGifByCategory helper', () => {
  test('should return an array of gifs', async() => {
    const gifList = await getGifByCategory('Goku');
    expect( gifList.length ).toBeGreaterThan( 0 );
    expect( gifList[0] ).toEqual({
      id: expect.any( String ),
      title: expect.any( String ),
      url: expect.any( String ),
    });
  });
});
