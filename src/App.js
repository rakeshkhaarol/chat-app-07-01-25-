
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Form from './pages/Form';



const ProtectedRoute = ({ children }) => {
  const loggedIn = localStorage.getItem('user:token') !== null || true;

  if (!loggedIn) {
    return <Navigate to="/users/sign_in" />;
  }

  if (loggedIn && ['/users/sign_in', '/users/login'].includes(window.location.pathname)) {
    console.log('Redirecting to home');
    return <Navigate to="/" />;
  }

  return children;
};
// const ProtectedRoute=({Children}) =>{
//   const isLogedIn = localStorage.getItem('user:token') !==null || true;
//   console.log('bbcshxzcbhxbc00',isLogedIn)

//   if(!isLogedIn){
//     return(

//       <Link to={'users/sign_in'}></Link>
//     )
//   }
//   return Children
// }

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }/>
          <Route path={'/users/login'} element={
            <ProtectedRoute>

              <Form isSignInPage={true} />
            </ProtectedRoute>
          }></Route>
          <Route path={'/users/sign_in'} element={
            <ProtectedRoute>

              <Form isSignInPage={false} />
            </ProtectedRoute>
          }></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
