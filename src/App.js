import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import './App.css';
import Api from './Components/Api/Api';
import Home from './Components/Home/Home';
import NavBar from './Components/navbar/NavBar';
import Layout from './Components/Layout/Layout';

let routers = createHashRouter([{
  path: "", element:<Layout/>,children:[
    {index:true, element:<Home/>},
    {path: 'api', element:<Api/>}
  ]
}])

function App() {
  return (<>
    <RouterProvider router={routers}></RouterProvider>
  </>);
}

export default App;
