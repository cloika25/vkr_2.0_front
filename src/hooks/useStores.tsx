import React from 'react';
import { storeContext } from '../contexts';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useStores = () => React.useContext(storeContext);
