import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = ( newCategory ) => {
    if ( categories.includes( newCategory ) ) return;
    setCategories([ newCategory, ...categories ]);
  }

  const onClearCategories = () => {
    setCategories( [] );
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={ onAddCategory } />
      <button onClick={ onClearCategories }>Clear Categories</button>

      { categories.map( ( category ) => {
        return <GifGrid key={ category } category={ category } />;
      }) }
    </>
  );
}
