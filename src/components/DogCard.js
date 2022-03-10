import React from 'react';
import { Link } from 'react-router-dom';

const DogCard = ({
  id,
  name,
  breed_group,
  life_span,
  temperament,
  origin,
  image,
}) => {
  //console.log(name);
  return (
    <div className='column $tile-header-shadow is-one-quarter-desktop is-one-third-tablet'>
      <Link to={`/dogs/${name.toLowerCase()}`}>
        {/* <div className='card'>
          <div className='card-header'>
            <h2 className='card-header-title'>{name}</h2>
          </div> */}
        <div className='tile is-parent'>
          <article className='tile is-child notification is-warning'>
            <p className='title'>{name}</p>
            <figure className='image is-5by5'>
              <img id='doggo' src={image.url} alt={name} />
            </figure>
          </article>
        </div>
        {/* </div> */}
      </Link>
    </div>
  );
};

export default DogCard;