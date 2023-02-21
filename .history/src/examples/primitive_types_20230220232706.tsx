import { Fragment, useEffect, useState } from 'react';
// import { ICard } from "../utils/interfaces";

function Card() {
  const [count, setCount] = useState(0);
  return (
    <Fragment>
      <div>
        <div className="review">
          <div className="review-image">
            <img src="https://source.unsplash.com/random" alt="" />
          </div>
          <div className="review-info">
            Review total <strong>3</strong> | Last reviewed by{' '}
            <strong>Evondev</strong> ⭐️
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
