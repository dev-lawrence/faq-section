import Star from './assets/images/icon-star.svg';
import { faqData } from './faqData';
import IconsMinus from './assets/images/icon-minus.svg';
import IconsPlus from './assets/images/icon-plus.svg';
import { useState } from 'react';

const App = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleFaq = (index) => {
    setIsClicked((prevClicked) => (prevClicked === index ? null : index));
  };

  return (
    <div className="container">
      <div className="bg-img"></div>

      <div className="faq-container">
        {/* Title */}
        <div className="title">
          <img className="star" src={Star} alt="" />
          <h1>Faq demo</h1>
        </div>

        {/* Faq data */}
        {faqData.map((item, index) => (
          <div key={index} className="faq" onClick={() => toggleFaq(index)}>
            <div className="question">
              <h2>{item.question}</h2>

              {isClicked === index ? (
                <img className="icon" src={IconsMinus} alt="" />
              ) : (
                <img className="icon" src={IconsPlus} alt="" />
              )}
            </div>

            <p className={`content ${isClicked === index ? 'show' : ''}`}>
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
