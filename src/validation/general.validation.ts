import * as R from "ramda";

// isNullOrUndefined :: a -> Bool
// Checks if the input value is NULL or UNDEFINED
export const isNullOrUndefined = (val: any): boolean => R.isNil(val);

// isInstanceOf :: a -> b -> Bool
// Checks if an object is an instance of a specified class
export const isInstanceOf = R.curry(
  (classObj: any, obj: any): boolean => obj instanceof classObj
);
