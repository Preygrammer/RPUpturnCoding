import _ from "lodash";

/**
 * This function is for getting properties of an array of objects and handling null TypeError
 *
 * First parameter is an array of objects
 * Second parameter is the property that you want to target
 *
 * If second parameter is not provided it will return the array
 *
 * @param array
 * @param property
 */
export default function getProperty(array, property) {
  if (property === null) {
    return (array && array[0]) || {};
  }

  if (!_.isArray(array)) {
    return {
      errMessage: `Expected Array as a parameter but received an ${typeof array}`,
    };
  }
  return ((array && array[0]) || {})[property];
}
