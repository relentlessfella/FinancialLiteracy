// 'use client';
// import { useContext, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import AuthContext from '@/contexts/authContext2/AuthContext';
// const withAuth = (WrappedComponent) => {
//   return (props) => {
//     const { user, authTokens } = useContext(AuthContext);
//     const router = useRouter();

//     useEffect(() => {
//       if (!user && !authTokens) {
//         router.push('/login');
//       }
//     }, [user, authTokens]);

//     if (!user) {
//       return null; // or a loading spinner
//     }

//     return <WrappedComponent {...props} />;
//   };
// };

// export default withAuth;
