import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title key="headline" headline="Planetas" />
        {Planets.map(
          (e, i) => <PlanetCard key={ i } planetName={ e.name } planetImage={ e.image } />
          ,
        )}
      </div>
    );
  }
}

export default SolarSystem;
