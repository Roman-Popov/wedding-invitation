import { useState, useCallback } from 'react';
import { WelcomeScreen } from '@/modules/welcome-screen';
import { MainScreen } from './modules/main-screen';
import { Vignette } from './components';

export const App = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isLoadEnd, setIsLoadEnd] = useState(false);
  const onOpen = useCallback(() => setIsOpened(true), []);

  return (
    <>
      {!isLoadEnd && <Vignette onLoadEnd={() => setIsLoadEnd(true)} />}
      {!isOpened && <WelcomeScreen onOpen={onOpen} />}
      {isLoadEnd && <MainScreen isOpened={isOpened} />}
    </>
  );
};
