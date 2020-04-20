import * as R from "ramda";

export type Validation = (value: any) => boolean;

export const isValid = R.curry((validations: Validation[], val: any): boolean => R.allPass(validations)(val));



