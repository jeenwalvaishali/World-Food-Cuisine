import React from "react";
import img from "./images/img-cuisine4.svg";
import img1 from "./images/img-italian-small.jpg";
import img2 from "./images/img-indian-cuisine.jpg";
import img3 from "./images/img-usa-cuisine.jpg";
import img4 from "./images/img-chinese-cuisine.jpg";
import img5 from "./images/img-mexican-cuisine.jpg";

const TopCuisine = () => {
  return (
    <section className="topcuisine-container">
      <div className="topcuisine-section">
        <div className="desc-section">
          <img className="desc-img" src={img} alt="Icon illustrating man sitting over chef's hat which having fork and spoon at back."/>   
          <h2>World's Best Cuisine</h2>
          <p className="desc-para">
            what country has the best food to offer? Many travellers want to
            experience the best cuisines in the world. They want authentic and
            delicious food made by the people that know it best. They want to
            connect with other cultures in the best way they know how—through
            food.
          </p>
        </div>
        <div className="list-section">
          <ul className="list-section-wrapper">
            <li>
              <div className="list-section-card">
                <div className="list-image">
                  <img className="list-section-card-img" src={img1} alt="Delicious and colorfully served italian pizza"/>
                </div>
                <div className="list-desc">
                  <h3>Italian Cusine</h3>
                  <p className="list-section-para">
                  Italy is by far one of the countries with the best food. Their straightforward approach to cooking, 
                  using simple ingredients such as olive oil, garlic, and pasta, gives them their spot on the list. 
                  But it’s not just pasta; they take comfort food to the next level with many different dishes. 
                  On the top of the list is pizza, obviously. Their coffee has become a culture all its own, and, 
                  with their mix of easy-to-make and high-flavour dishes, it’s no wonder that everyone loves a good Italian meal. 
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="list-section-card">
                <div className="list-image">
                  <img className="list-section-card-img" src={img2} alt="Eight bowls with different indian curry serving with naan"/>
                </div>
                <div className="list-desc">
                  <h3>Indian Cuisine</h3>
                  <p className="list-section-para">
                  India is known for its abundant spice use. The dishes rely heavily on their high-flavour profiles instead 
                  of the meat or vegetables used in each particular item. With 38% of the country vegetarian, 
                  it is a good choice for those who eat plant-based diets. With a large population of Indians around the world, 
                  they have helped spread the love for their food making it one of the best cuisines in the world.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="list-section-card">
                <div className="list-image">
                  <img className="list-section-card-img" src={img3} alt="A plate having american burger served with salad"/>
                </div>
                <div className="list-desc">
                  <h3>United States Of America Cuisine</h3>
                  <p className="list-section-para">
                  The USA is a culture pot of cuisine, making it an excellent spot for travellers to test the waters with various flavours. 
                  Some of the most popular foods in the country originate from somewhere else, such as pizza, fries, and hamburgers. 
                  These global staples easily make the US one of the countries with the best cuisine.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="list-section-card">
                <div className="list-image">
                  <img className="list-section-card-img" src={img4} alt="A plate served with rice and chinese dish"/>
                </div>
                <div className="list-desc">
                  <h3>Chinese Cuisine</h3>
                  <p className="list-section-para">
                  Chinese food outside of China is nothing like the authentic versions found in its home country. 
                  Although the cuisine is ever-popular worldwide, the brave and adventurous “eat-anything” attitude 
                  of the cuisine gives the rest of the world the courage to try new and exciting things. 
                  Just the sheer volume of options makes it a regular choice as the best cuisine in the world.
                  The very best dishes that can be found in the country include sweet and sour pork, a simple yet classic choice.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="list-section-card">
                <div className="list-image">
                  <img className="list-section-card-img" src={img5} alt="A plate with mexican nachos, tortilla and burrito"/>
                </div>
                <div className="list-desc">
                  <h3>Mexican Cuisine</h3>
                  <p className="list-section-para">
                  The food scene in Mexico is no game. The country is full of dishes that many people wouldn’t be able to recognise 
                  if they compared them to the “Mexican” meals they’ve had in their home country.Not only do they have stomach-filling comfort foods, 
                  but they also throw nutrition into the mix with the likes of avocado, tomato, lime, bean, chocolate, and chilis. 
                  Their antioxidant-rich approach to food is what keeps tourists coming back again and again. 
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TopCuisine;
