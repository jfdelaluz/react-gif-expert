import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Tests - AddCategory component', () => {
  test('should update text box value', () => {
    render( <AddCategory onNewCategory={ () => {} } /> );
    const input = screen.getByRole( 'textbox' );

    fireEvent.input( input, { target: { value: 'test' } } );
    expect( input.value ).toBe( 'test' );
  });

  test('should call onNewCategory if input has a value', () => {
    const inputValue = 'test';
    const onNewCategory = jest.fn();
    render( <AddCategory onNewCategory={ onNewCategory } /> );

    const input = screen.getByRole( 'textbox' );
    const form = screen.getByRole( 'form' );

    fireEvent.input( input, { target: { value: inputValue } } );
    fireEvent.submit( form );
    
    expect( input.value ).toBe('');
    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes( 1 );
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
  });

  test('should not call onNewCategory if input value has less than 2 characters', () => {
    const onNewCategory = jest.fn();
    render( <AddCategory onNewCategory={ onNewCategory } /> );

    const form = screen.getByRole( 'form' );
    fireEvent.submit( form );
    
    expect( onNewCategory ).not.toHaveBeenCalled();
  });
});
