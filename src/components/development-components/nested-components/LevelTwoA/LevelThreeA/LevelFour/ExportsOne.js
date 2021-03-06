import React from 'react';
import PropTypes from 'prop-types'

function BaconComponent({ propOne, propTwo = 2, propThree='Three', noPropTypeHere = 'missing prop types for this'}) {
  return (
    <div>
        <div>
          {propOne}
        </div>
        <div>
          {propTwo}
        </div>
        <div>
          {propThree}
        </div>
        <div>
          {noPropTypeHere}
        </div>
    </div>
  );
}

export default BaconComponent;

BaconComponent.propTypes = {
  propOne: PropTypes.string,
  propTwo: PropTypes.number,
  propThree: PropTypes.string,
}