export const BR = '\n';
export const I = '  ';
export const II = '    ';
export const III = '      ';

export class UnreachableCaseError extends Error {
  constructor(value: never) {
    super(`Unreachable case ${value}`);
  }
}
