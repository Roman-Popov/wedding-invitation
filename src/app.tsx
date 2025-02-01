import { useState } from 'react';
import { WelcomeScreen } from '@/modules/welcome-screen';
import { MainScreen } from './modules/main-screen';

export const App = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      {!isOpened && <WelcomeScreen onOpen={() => setIsOpened(true)} />}
      <MainScreen isOpened={isOpened} />
    </>
  );
};
