import React from 'react';
import { getSingleDog } from '../lib/api';
import { useParams } from 'react-router-dom';

const DogShow = () => {
  const [dog, setDog] = React.useState(null);

  const { point } = useParams();

  React.useEffect(() => {
    console.log(point);
    const getData = async () => {
      try {
        const { data } = await getSingleDog(point); /// using axios package. data is the key that we are using from API
        // setDog(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [point]);

  return (
    <section className="section">
      <div className="container">
        {!dog ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2 className="title has-text-centered">{dog.name}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={dog.image} alt={dog.name} />
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-8">Breed Group:</h4>
                <hr />
                <p>{dog.breed_group}</p>
                <hr />
                <h4 className="title is-4">Origin:</h4>
                <hr />
                <p>{dog.origin}</p>
                <h4 className="title is-4">Lifespan:</h4>
                <hr />
                <p>{dog.life_span}</p>
                <h4 className="title is-4">Temperament:</h4>
                <hr />
                <p>{dog.temperament}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DogShow;