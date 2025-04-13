
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Form from './pages/Form';



const ProtectedRoute = ({ children, auth = false }) => {
  const loggedIn = localStorage.getItem('user:token') !== null || false; //true

  if (!loggedIn && auth) {
    return <Navigate to="/users/sign_in" />;
  } else if (loggedIn && ['/users/sign_in', '/users/sign_up'].includes(window.location.pathname)) {
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
            <ProtectedRoute auth={true}>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path={'/users/sign_Up'} element={
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