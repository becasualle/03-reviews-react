import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  // set index to select array item with review content
  const [index, setIndex] = useState(0);
  // destructure object to variables that we will use later as content
  const { name, job, image, text } = people[index];

  // prevents go beyond the limits of array when clicking buttons
  const checkNumber = number => {
    // returns index of first element when we exceed the limits, and when lower first element - return index of last element. 
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    // if conditions aren't met then just return back number
    return number;
  }

  // update index to lower one when click on previous element button
  const prevPerson = () => {
    setIndex(index => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  }

  // update index to bigger one when click on previous element button
  const nextPerson = () => {
    setIndex(index => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  }
  // genereates random number and set it as index
  const randomPerson = () => {
    // generate integer from 0 to 3 (depends on array length)
    let randomIndex = Math.floor(Math.random() * people.length);
    // preventing showing element with same index twice
    if (randomIndex === index) {
      randomIndex += 1;
    }
    // set new random index, but check if we exceed array length start with first item
    setIndex(checkNumber(randomIndex));
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        {/* set quote icon near photo */}
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        {/* when click button set new index and call new element */}
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      {/* when click button generate random index */}
      <button className="random-btn" onClick={randomPerson}>surprise me</button>
    </article>
  );
};

export default Review;
