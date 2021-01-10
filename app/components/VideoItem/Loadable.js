/**
 *
 * Asynchronously loads the component for VideoItem
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
