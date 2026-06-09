export type { Project } from './types';
export { default as safehire } from './safehire';
export { default as supplysync } from './supplysync';
export { default as littlehaven } from './littlehaven';
export { default as uitemplates } from './uitemplates';

import safehire from './safehire';
import supplysync from './supplysync';
import littlehaven from './littlehaven';
import uitemplates from './uitemplates';

export const projects = [safehire, supplysync, littlehaven, uitemplates];
