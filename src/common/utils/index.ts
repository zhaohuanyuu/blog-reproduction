export { default as storage } from './storage';

export { default as framers } from './framers';

export const chunk = (arr: ReadonlyArray<Queries.MdxEdge>, size: number) => Array.from({ length: Math.ceil(arr.length / size)}, (v, i) => arr.slice(i * size, i * size + size));
