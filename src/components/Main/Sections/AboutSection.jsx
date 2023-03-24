import React from "react";
import "./SectionsStyle.css";

const AboutSection = () => {
  return (
    <section className="about-container" name="main-id" id="main-id">
      <h1 className="about-h1">About Cuisine</h1>
      <div className="about-descr-card">
        <div className="about-card-inner">
          <div className="about-card-front">
            <p>A cuisine is a style of cooking characterized by distinctive ingredients, 
            techniques and dishes, and usually associated with a specific culture or geographic region. 
            Regional food preparation traditions, customs and ingredients often combine to create dishes unique to a particular region. 
            A cuisine is primarily influenced by traditional ingredients that are available locally or through trade, 
            they can even be made into distinct ingredients themselves when they become popular within a region, 
            take for example Japanese rice in Japanese cuisine and New Mexico chile in New Mexican cuisine. Religious food laws can also exercise a strong 
            influence on cuisine, such as Hinduism in Indian cuisine, Sikhism in Punjabi cuisine, Buddhism in East Asian cuisine, 
            Islam in Middle Eastern cuisine, and Judaism in Jewish cuisine and Israeli cuisine.</p>
          </div>
          <div className="about-card-back">
             <img className="about-card-img" alt=""></img>
          </div>
        </div>
      </div>
      <div className="about-wrapper">
        <div className="about-card">
          <div>
            <i className="icon-card1"></i>
          </div>
          <h2 className="about-h2">Evolution of cuisine</h2>
          <p className="about-p">
            Cuisines evolve continually, and created by innovation and
            cultural interaction...
          </p>
        </div>
        <div className="about-card">
          <div>
            <i className="icon-card2"></i>
          </div>
          <h2 className="about-h2">Global cuisine</h2>
          <p className="about-p">
            A global cuisine is a cuisine that is practiced around the world...
          </p>
        </div>
        <div className="about-card">
          <div>
            <i className="icon-card3"></i>
          </div>
          <h2 className="about-h2">Regional cuisines</h2>
          <p className="about-p">
            Regional cuisine is cuisine based upon national, state or local
            regions...
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
