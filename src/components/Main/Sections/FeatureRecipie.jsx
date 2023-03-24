import React from "react";
import img1 from "./images/img-vegan-sweet.jpg";
import img2 from "./images/img-egg-salmon.jpg";
import img3 from "./images/img-hawaiin.jpg";
import img4 from "./images/img-korean.jpg";
import img5 from "./images/img-vegan.jpg";
import img6 from "./images/img-poach-egg.jpg";

const FeatureRecipie = () => {
  return (
    <section className="feature-container">
      <h1 className="feature-heading">Feature Recipes</h1>
      <div className="feature-section">
        <ul className="feature-wrapper">
          <li className="feature-card">
            <img className="feature-card-img" src={img1} alt="A plate of vegan sweet potato falafal" />
            <h2>Vegan Sweet potato falafel</h2>
            <p className="feature-para">
              Vegan cuisine uses no animal products, such as meat, dairy, or
              eggs. This is more restrictive than vegetarian cuisine, which
              allows non-meat animal products.
            </p>
          </li>
          <li className="feature-card">
            <img className="feature-card-img" src={img2} alt="A plate of egg benedicite with salmon" />
            <h2>Eggs benedicite with salmon</h2>
            <p className="feature-para">
              Eggs Benedict is a traditional American breakfast and brunch
              recipe that originated in New York City.
            </p>
          </li>
          <li className="feature-card">
            <img className="feature-card-img" src={img3} alt="A hawaiian veggie quinoa bowl" />
            <h2>Hawaiian Veggie quinoa bowl</h2>
            <p className="feature-para">
              This Hawaiian Quinoa Bowl makes a complete meal– veggies, protein,
              grains and fruit. Vegetarian and gluten free.
            </p>
          </li>
          <li className="feature-card">
            <img className="feature-card-img" src={img4} alt="A table full of asian bento box which is served in bowls" />
            <h2>Asian bento box</h2>
            <p className="feature-para">
              A bento (弁当, bentō) is a single-portion take-out or home-packed
              meal of Japanese origin. Outside Japan, it is common in other East
              and Southeast Asian culinary styles, including Chinese, Korean,
              Singaporean cuisines.
            </p>
          </li>
          <li className="feature-card">
            <img className="feature-card-img" src={img5} alt="Two bowls of homemade crockpot vegetable soup" />
            <h2>Homemade crockpot vegetable soup</h2>
            <p className="feature-para">
              A thick soup of Italian origin made with vegetables, often with
              the addition of pasta or rice. Common ingredients include beans,
              onions, celery, carrots, stock, and tomatoes.
            </p>
          </li>
          <li className="feature-card">
            <img className="feature-card-img" src={img6} alt="A plate of poached egg with vegetables" />
            <h2>Poached egg with vegetables</h2>
            <p className="feature-para">
              It can be traced back through the Middle French verb pochier, with
              the same meaning, to the noun poche, a bag or pouch. The idea
              seems to have been that the white of the egg was a container for
              the yolk.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FeatureRecipie;
