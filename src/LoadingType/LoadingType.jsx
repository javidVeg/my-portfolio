import React, { useState, useEffect, useRef } from 'react'

const LoadingType = () => {
  const index = useRef(1);

  const [currentText, setCurrentText] = useState('');
  const [text, setText] = useState('....Hello World')

  useEffect(() => {
    index.current = 0;
    setCurrentText('')
  }, [text])

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setCurrentText((value) => value + text.charAt(index.current));
      index.current += 1;
    }, 200);
    return () => {
      clearTimeout(timeoutID)
    };
  }, [currentText, text]);

  return <p>{currentText}</p>
  
};

export default LoadingType;