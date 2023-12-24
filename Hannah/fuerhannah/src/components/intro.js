import React, { useState, useEffect } from 'react';

function Intro({setScene}) {
  const [visibleTextIndex, setVisibleTextIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const texts = [
    "Bienvenida a tu regalo sorpresa!",
    "Espero que te diviertas y lo disfrutes.",
    "Empecemos con unas preguntas :)"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (visibleTextIndex < texts.length - 1) {
        setVisibleTextIndex((prevIndex) => prevIndex + 1);
      } else {
        setTimeout(() => {
          setShowButton(true);
        }, 1000);
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [visibleTextIndex]);

  const handleButtonClick = () => {
    setScene("question1")
  };

  return (
    <div className='container'>
      <div className='login-container'>
        <div className='text-container'>
          {texts.map((text, index) => (
            <h1
              key={index}
              style={{
                display: index <= visibleTextIndex ? 'block' : 'none',
                opacity: index === visibleTextIndex ? 1 : 0.5
              }}
            >
              {text}
            </h1>
          ))}
          {showButton && (
            <div className='login-button'>
              <button onClick={handleButtonClick}>Los geht's!</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Intro;
