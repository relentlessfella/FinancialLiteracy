import {
  Alfa_Slab_One,
  Inter,
  Nunito,
  DM_Sans,
  Poppins,
  Architects_Daughter,
} from 'next/font/google';
export const alfaSlabOne = Alfa_Slab_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-alfaSlabOne',
});
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter',
});
export const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '900'],
  variable: '--font-nunito',
});
export const DMSans = DM_Sans({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-DMSans',
});
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});
export const architects = Architects_Daughter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-architects',
});
