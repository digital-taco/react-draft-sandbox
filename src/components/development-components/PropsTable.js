import React from 'react';
import PropTypes from 'prop-types'

import styles from './PropsTable.module.css'

function PropValue({ propName, propValue, propType }) {
  return (
    <>
      <div data-prop-type>{propType}</div>{' '}
      <div data-prop-name><i>{propName}</i></div>{' '}
      <div data-prop-value>{propValue}</div>
    </>
  )
}

function stringify(obj) {
  try {
    return JSON.stringify(obj, null, 4)
  } catch (e) {
    return 'Unable to stringify'
  }
}

function PropsTable({
  stringProp = 'Draft',
  numberProp = 1000,
  missingPropType,
  boolProp,
  objectProp,
  shapeProp,
  exactProp,
  funcProp,
  enumProp,
  arrayProp,
  nodeProp,
  customProp,
  thingsOftype,
}) {
  return (
    <div className={styles.propsTable}>
      <PropValue propType="string" propName="stringProp" propValue={stringProp} />
      <PropValue propType="number" propName="numberProp" propValue={numberProp} />
      <PropValue propType="boolean" propName="boolProp" propValue={boolProp ? 'true' : 'false'} />
      <PropValue propType="oneOf" propName="enumProp" propValue={enumProp} />
      <PropValue propType="object" propName="objectProp" propValue={stringify(objectProp)} />
      <PropValue propType="shape" propName="shapeProp" propValue={stringify(shapeProp)} />
      <PropValue propType="exact" propName="exactProp" propValue={stringify(exactProp)} />
      <PropValue propType="func" propName="funcProp" propValue={funcProp && funcProp.toString()} />
      <PropValue propType="array" propName="arrayProp" propValue={stringify(arrayProp)} />
      <PropValue propType="node" propName="nodeProp" propValue={nodeProp} />
      <PropValue propType="custom" propName="customProp" propValue={customProp} />
      {/* <PropValue propType="arrayOf" propName="thingsOftype" propValue={JSON.stringify(thingsOftype)} /> */}

      {/* Missing Prop Type */}
      <PropValue propType="string" propName="missingPropType" propValue={missingPropType} />

      {nodeProp}
      {objectProp && objectProp.test}
    </div>
  );
}

PropsTable.propTypes = {
  /** A number prop */
  numberProp: PropTypes.number,

  /** A boolean prop */
  boolProp: PropTypes.bool,

  /** An enum prop */
  enumProp: PropTypes.oneOf(['choiceOne', 'choiceTwo', 'choiceThree']),

  /** A string prop */
  stringProp: PropTypes.string,

  /** An array prop */
  arrayProp: PropTypes.array,

  /** An object prop */
  objectProp: PropTypes.object,

  /** A shape prop */
  shapeProp: PropTypes.shape({
    canHaveThis: PropTypes.string
  }),

  /** An exact prop */
  exactProp: PropTypes.exact({
    mustHaveThis: PropTypes.string
  }),

  /** A function prop */
  funcProp: PropTypes.func,

  /** A node prop */
  nodeProp: PropTypes.node,

  /** A custom prop */
  customProp: () => null,

}

export default PropsTable;