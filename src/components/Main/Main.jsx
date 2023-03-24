import React from 'react'
import AboutSection from './Sections/AboutSection'
import FeatureRecipie from './Sections/FeatureRecipie'
import Privacy from './Sections/Privacy'
import TopCuisine from './Sections/TopCuisine'
import PostedRecipe from './Sections/PostedRecipe';
import privacyPolicy from './Sections/PolicyDocument';

const Main = ({page}) => {

  const policyDocument = privacyPolicy;


  return (
    <main>
          {page === 'About' && <AboutSection/>}
          {page === 'Feature' && <FeatureRecipie/>}
          {page === 'Cuisine' && <TopCuisine/>}
          {page === 'Privacy' && <Privacy entries={policyDocument}/>}
          {page === 'Recipe' && <PostedRecipe/>} 
    </main>
  )
}

export default Main;