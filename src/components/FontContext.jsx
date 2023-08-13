import { createContext, useContext, useState } from 'react';
import fontList from '../assets/fonts/fonts.json';

const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [fonts] = useState(fontList);

  return <FontContext.Provider value={fonts}>{children}</FontContext.Provider>;
};

export const useFonts = () => {
  return useContext(FontContext);
};
