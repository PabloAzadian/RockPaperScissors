import React, { useState, useEffect } from 'react';

function Intro({setScene}) {
  const [visibleTextIndex, setVisibleTextIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const texts = [
    "Feliz navidad y felices 2 meses!",
    "Te amo mucho, espero que te haya gustado",
    "Tengo otro regalo para vos cuando nos veamos :)",
    "mit extra liebe -Pablo"
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
    }, 4000);

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
              <button onClick={handleButtonClick}>Ver mas fotos</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Intro;
