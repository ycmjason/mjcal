import { useContext } from 'react';
import { LocaleContext } from '../contexts/LocaleContext';

export const useLocale = () => {
  const locale = useContext(LocaleContext);
  if (!locale) {
    throw new Error('no locale context found');
  }
  return locale;
};
