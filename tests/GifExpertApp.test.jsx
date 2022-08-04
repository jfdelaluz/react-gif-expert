import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Tests - GifExpertApp component', () => {
  test('should have 2 default categories', () => {
    render( <GifExpertApp /> );
    
    expect( screen.getAllByRole( 'heading', { level: 3 } ).length ).toBe(2);
  });

  test('should remove all categories when clicking "Clear categories" button', () => {
    render( <GifExpertApp /> );
    const clearCatButton = screen.getByRole('button');
    
    fireEvent.click( clearCatButton );
    expect( screen.queryAllByRole( 'heading', { level: 3 } ).length ).toBe(0);
  });

  test('should display new category when submitting', () => {
    const newCategory = 'Saint Seiya';

    render( <GifExpertApp /> );
    const catInput = screen.getByRole( 'textbox' );
    const catForm = screen.getByRole( 'form' );
    const currentCategoryCount = screen.getAllByRole( 'heading', { level: 3 } ).length;
    
    fireEvent.input( catInput, { target: { value: newCategory } } );
    fireEvent.submit( catForm );

    expect( screen.getAllByRole( 'heading', { level: 3 } ).length ).toBe( currentCategoryCount + 1 );
    expect( screen.getByText( newCategory ) ).toBeTruthy();
  });

  test('should not add duplicate categories (case sensitive)', () => {
    const newCategory = 'Captain Tsubasa';

    render( <GifExpertApp /> );
    const catInput = screen.getByRole( 'textbox' );
    const catForm = screen.getByRole( 'form' );
    
    fireEvent.input( catInput, { target: { value: newCategory } } );
    fireEvent.submit( catForm );
    const currentCategoryCount = screen.getAllByRole( 'heading', { level: 3 } ).length;

    fireEvent.input( catInput, { target: { value: newCategory } } );
    fireEvent.submit( catForm );

    expect( screen.getAllByRole( 'heading', { level: 3 } ).length ).toBe( currentCategoryCount );
  });

  test('should not add categories when input length is less than 2 characters', () => {
    const newCategory = 'a';

    render( <GifExpertApp /> );
    const catInput = screen.getByRole( 'textbox' );
    const catForm = screen.getByRole( 'form' );
    const currentCategoryCount = screen.getAllByRole( 'heading', { level: 3 } ).length;
    
    fireEvent.input( catInput, { target: { value: newCategory } } );
    fireEvent.submit( catForm );
    
    expect( screen.getAllByRole( 'heading', { level: 3 } ).length ).toBe( currentCategoryCount );
  });
});
