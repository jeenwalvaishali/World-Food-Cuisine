import React, { useState } from "react";
import "./Spinner.css";
import img from "../Sections/images/avatar.png";

const PostedRecipe = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [postedData, setPostedData] = useState([]);
  const [errorName, setErrorName] = useState(null);
  const [errorRecipe, setErrorRecipe] = useState(null);
  const [errorRecipename, setErrorRecipename] = useState(null);

  const [formInputData, setformInputData] = useState({
    name: "",
    recipename: "",
    recipe: "",
    cuisine: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    let errorText = " ";
    switch (name) {
      case "name":
        errorText = value.length < 5 ? "Invalid User Name" : "";
        setErrorName(errorText);
        break;
      case "recipename":
        errorText = value.length < 4 ? "Please provide the recipe name" : "";
        setErrorRecipename(errorText);
        break;
      case "recipe":
        errorText = value.length < 400 ? "Minimum 500 characters required" : "";
        setErrorRecipe(errorText);
        break;
      default:
        break;
    }

    setformInputData({
      ...formInputData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = (data) => [...data, formInputData];
    setPostedData(newData);

    setIsSubmitting(true);
    setIsLoading(true);
    setErrorName(null);
    setErrorRecipe(null);
    setErrorRecipename(null);

    setInterval(() => {
      setIsSubmitting(false);
      setIsLoading(false);
    }, 2000);

    const emptyData = {
      name:"",
      recipename: "",
      recipe: "",
      cuisine: "",
  }
    setformInputData(emptyData);

    document.getElementById("contactForm").reset();
  };

  return (
    <section className="form-container">
      <div className="form-content">
        <h1 className="form-content-head">What people are posted</h1>
        <div className="form-section">
          <div className="posted-feedback">
            <div className="feedback">
              <h3 className="poster-head">Posted Recipe</h3>
              <div className="poster-card-list">
                <article className="poster-card">
                  <header className="card-header">
                    <p>Italian Cuisine</p>
                    <h2 className="card-h2">Pasta Fagioli al Forno</h2>
                  </header>
                  <div>
                    <p className="card-para">
                      Pasta e Fagioli is a dish I keep revisiting trying to play
                      around with methods for it so I can keep making it new to
                      me. Here, the classic soup turns into a baked pasta dish.
                      Bring a large pot of water to a boil,
                      salt it, cook pasta to just shy of al dente. Chop pancetta
                      into 1/4-inch dice. While pasta cooks, heat a skillet with
                      olive oil over medium to medium-high heat. Add pancetta,
                      cook 2 to 3 minutes then add celery, carrot, onions,
                      garlic, rosemary, thyme and bay leaf to the skillet,
                      season with salt and pepper. Saute the vegetables until
                      tender, 6 to 7 minutes. Add beans and heat them through.
                      Stir in 1/2 cup wine, simmer 30 seconds more and turn off
                      heat. Remove bay leaf. While vegetables cook, place a
                      small sauce pot over medium heat, add butter, melt butter
                      then whisk in flour and cook 1 minute then whisk in milk.
                      Season sauce with salt, pepper and nutmeg and reduce 4 to
                      5 minutes, stir in half the grated cheese, turn off heat
                      and adjust seasoning. While sauce cooks, place a rack in
                      the middle of the oven and preheat broiler to high. Drain
                      pasta and return to the pot, toss with white bean mixture
                      and sauce, stir to coat, transfer to a casserole dish, top
                      with remaining cheese and place in oven to brown, 5
                      minutes.
                    </p>
                  </div>
                  <div className="card-user">
                    <a className="user-avatar" href="#Recipe">
                      <img className="user-icon" src={img} alt="Profile Illustration"/>
                    </a>
                    <svg className="half-circle" viewBox="0 0 106 57">
                      <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg>
                    <div className="user-name">
                      <div className="user-name-prefix">Name</div>
                      Vaishali Jeenwal
                    </div>
                  </div>
                  <div className="tags">
                    <a href="#Recipe">Recipes</a>
                  </div>
                </article>
                <div className="poster-scroll">
                  {postedData.map((data) => (
                    <div className="card-list">
                      <article className="poster-card-dynamic">
                        <header className="card-header">
                          <p>{data.cuisine} Cuisine</p>
                          <h2 className="card-h2">{data.recipename}</h2>
                        </header>
                        <div>
                          <p className="card-para">{data.recipe}</p>
                        </div>
                        <div className="card-user">
                          <a className="user-avatar" href="#Recipe">
                            <img className="user-icon" src={img} alt="Profile Illustration"/>
                          </a>
                          <svg className="half-circle" viewBox="0 0 106 57">
                            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                          </svg>
                          <div className="user-name">
                            <div className="user-name-prefix">Name</div>
                            {data.name}
                          </div>
                        </div>
                        <div className="tags">
                          <a href="#Recipe">Recipes</a>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="form-box">
              <h3 className="form-box-head">Here You Can Post!</h3>
              <form
                className="formcontact"
                action="/form"
                method="post"
                id="contactForm"
                name="contactForm"
              >
                <div className="form-box-row">
                  <div className="column form-group">
                    {!errorName && (
                      <label htmlFor="name" className="col-form-label">
                        <span className="mandotary-field">*</span>Name
                      </label>
                    )}
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Your first name"
                      onChange={handleChange}
                      value={formInputData.name}
                    />
                    <span className="span-error">{errorName}</span>
                  </div>
                </div>
                <div className="form-box-row">
                  <div className="column form-group">
                    {!errorRecipename && (
                      <label htmlFor="recipename" className="col-form-label">
                        <span className="mandotary-field">*</span>Recipe Name
                      </label>
                    )}
                    <input
                      type="text"
                      className="form-control"
                      name="recipename"
                      id="recipename"
                      placeholder="Your recipe name"
                      onChange={handleChange}
                      value={formInputData.recipename}
                    />
                    <span className="span-error"> {errorRecipename}</span>
                  </div>
                </div>
                <div className="form-box-row">
                  <div className="column form-group">
                    {!errorRecipe && (
                      <label htmlFor="recipe" className="col-form-label">
                        <span className="mandotary-field">*</span>Message or
                        Recipe
                      </label>
                    )}
                    <textarea
                      className="form-text-control"
                      name="recipe"
                      id="recipe"
                      cols={4}
                      rows={6}
                      placeholder="Write your Message or Recipe"
                      onChange={handleChange}
                      value={formInputData.recipe}
                    ></textarea>
                    <span className="span-error"> {errorRecipe}</span>
                  </div>
                </div>
                <div className="form-box-row">
                  <div className="column form-group">
                    <label htmlFor="cuisine" className="col-form-label">
                      Cuisine
                    </label>
                    <select
                      className="custom-select"
                      id="cuisine_select"
                      name="cuisine"
                      onChange={handleChange}
                    >
                      <option defaultValue>Choose...</option>
                      <option value="Italian">Italian</option>
                      <option value="Indian">Indian</option>
                      <option value="USA">USA</option>
                      <option value="Chinese">Chinese</option>
                      <option value="Japanese">Japanese</option>
                      <option value="Mexican">Mexican</option>
                      <option value="French">French</option>
                      <option value="Spanish">Spanish</option>
                      <option value="Korean">Korean</option>
                    </select>
                  </div>
                </div>
                <div className="form-check">
                  <div>
                    <input
                      type="checkbox"
                      name="agree-term"
                      id="agree-term"
                      className="agree-term"
                    />
                    <label htmlFor="agree-term" className="label-agree-term">
                      <span>
                        <span></span>
                      </span>
                      I agree to the{" "}
                      <a href="#Privacy" className="term-service">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                  <div>
                    <p className="mandotary-notice">
                      <span className="mandotary-field">*</span> Indicates field
                      required
                    </p>
                  </div>
                </div>
                <div className="form-submit">
                  <button
                    type="button"
                    name="submit"
                    id="submit"
                    onClick={handleSubmit}
                    className="submit"
                    disabled={(formInputData.recipe.length < 400) || !formInputData.name || !formInputData.recipename }
                  >
                    Send
                    {isSubmitting && isLoading && (
                      <div className="gg-spinner"></div>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostedRecipe;
