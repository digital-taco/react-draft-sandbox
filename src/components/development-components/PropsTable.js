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

function PropsTable({
  stringProp = 'Draft',
  numberProp = 1000,
  missingPropType,
  boolProp,
  objectProp,
  funcProp,
  enumProp,
  arrayProp,
  thingsOftype,
}) {
  return (
    <div className={styles.propsTable}>
      <PropValue propType="string" propName="stringProp" propValue={stringProp} />
      <PropValue propType="number" propName="numberProp" propValue={numberProp} />
      <PropValue propType="boolean" propName="boolProp" propValue={boolProp ? 'true' : 'false'} />
      <PropValue propType="oneOf" propName="enumProp" propValue={enumProp} />
      <PropValue propType="object" propName="objectProp" propValue={JSON.stringify(objectProp)} />
      <PropValue propType="func" propName="funcProp" propValue={funcProp && funcProp.toString()} />
      <PropValue propType="array" propName="arrayProp" propValue={JSON.stringify(arrayProp)} />
      {/* <PropValue propType="arrayOf" propName="thingsOftype" propValue={JSON.stringify(thingsOftype)} /> */}

      {/* Missing Prop Type */}
      <PropValue propType="string" propName="missingPropType" propValue={missingPropType} />
    </div>
  );
}

PropsTable.propTypes = {
  /** A number prop */
  numberProp: PropTypes.number,

  /** A function prop */
  funcProp: PropTypes.func,

  /** An object prop */
  objectProp: PropTypes.object,

  /** A boolean prop */
  boolProp: PropTypes.bool,

  /** An enum prop */
  enumProp: PropTypes.oneOf(['choiceOne', 'choiceTwo', 'choiceThree']),

  /** A string prop */
  stringProp: PropTypes.string,

  /** An array prop */
  arrayProp: PropTypes.array,
}

export default PropsTable;