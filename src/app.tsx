import { useState } from 'react';
import { WelcomeScreen } from '@/modules/welcome-screen';
import { MainScreen } from './modules/main-screen';
import { Vignette } from './components';

export const App = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isLoadEnd, setIsLoadEnd] = useState(false);

  return (
    <>
      {!isLoadEnd && <Vignette onLoadEnd={() => setIsLoadEnd(true)} />}
      {!isOpened && <WelcomeScreen onOpen={() => setIsOpened(true)} />}
      <MainScreen isOpened={isOpened} />
    </>
  );
};
