import './App.css';
import AuthenticationPage from './components/UserAuth/AuthenticationPage';
import HomePage from './components/Home/HomePage';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import { Provider } from './context/ProductContex';
function App() {
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<HomePage/>,
    },
    {
      path:'/login',
      element:<AuthenticationPage/>
    },
    {
      path:'/signup',
      element:<AuthenticationPage/>
    }
  ])
  return (
    <div className="App">
        <Provider>
        <RouterProvider router={appRouter}/>
        </Provider>
    </div>
  );
}

export default App;
