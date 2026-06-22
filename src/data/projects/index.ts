export type { Project } from './types';
export { default as safehire } from './safehire';
export { default as supplysync } from './supplysync';
export { default as littlehaven } from './littlehaven';
export { default as uitemplates } from './uitemplates';
export { default as governanceCockpit } from './governance-cockpit';

import safehire from './safehire';
import supplysync from './supplysync';
import littlehaven from './littlehaven';
import uitemplates from './uitemplates';
import governanceCockpit from './governance-cockpit';

export const projects = [safehire, governanceCockpit, supplysync, littlehaven, uitemplates];
