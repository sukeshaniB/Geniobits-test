import '../App.scss';
import Header from './Header'
import Tabs from './Tabs'
import RecipeLists from './RecipeLists'
import { useState } from 'react';

function RecipeDetails() {
  const [loader,setLoader] = useState(true)
  return (
    <div className="main">
      <Header />
      <Tabs setLoader={setLoader}/>
      <RecipeLists setLoader={setLoader}/>
      {loader && <div className='loader'>
        <div className='spinner'></div>
        </div>}
    </div>
  );
}

export default RecipeDetails;