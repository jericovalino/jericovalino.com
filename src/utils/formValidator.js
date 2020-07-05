import regex from './regex';

export const nameValidator = (e) => e.target.value.length >= 4;
export const emailValidator = (e) => e.target.value.match(regex.email);
export const messageValidator = (e) => e.target.value.length >= 9;