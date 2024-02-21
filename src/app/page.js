import Image from 'next/image';
import Header from '../../components/Header/Header';
import { MainContextProvider } from '../contexts/ContextProvider/ContextProvider';

export default function Home() {
  return (
    <MainContextProvider>
      <main></main>
    </MainContextProvider>
  );
}
