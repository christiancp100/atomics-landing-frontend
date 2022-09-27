import Hero from './hero';

const getComponent = (blockName: string) => {
  switch (blockName) {
    case `ComponentBlocksHero`:
      return Hero;
  }
};

export default getComponent;
