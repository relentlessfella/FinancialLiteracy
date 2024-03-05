import Image from 'next/image';
import Header from '../../components/Header/Header';
import { MainContextProvider } from '../contexts/ContextProvider/ContextProvider';
import MainPage from './main/page';

export default function Home() {
  return (
    <MainContextProvider>
      <main>
        <MainPage />
      </main>
    </MainContextProvider>
  );
}
