import React, { useState }  from 'react';
import './Spinner.css';

const Privacy = ({entries}) => {

const [isEntryOpen, setIsEntryOpen] = useState({});

function toggleEntry(title) {
    setIsEntryOpen({
      ...isEntryOpen,
      [title]: !isEntryOpen[title],
    });
  }

  return (
    <section className="privacy-container">
    <h1 className="privacy-h1">Privacy Policy</h1>
    <div className="privacy-accordion">
      {Object.keys(entries).map((title) => {
        const isOpen = isEntryOpen[title];
        return (
          <div
            key={title}
            className={`privacy-acc-entry ${ isOpen ? "privacy-acc-entry-open" : "" }`}>
            <button
              className="privacy-acc-title"
              onClick={() => toggleEntry(title)} >
              {title}
            </button>
            <div className="privacy-acc-body">{entries[title]}</div>
          </div>
        );
      })}
    </div>
  </section>
  );
};

export default Privacy;