import { createContext } from 'react';

const BrowserContext = createContext({
    isIE: undefined,
});

export default BrowserContext;