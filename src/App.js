import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import './App.css';
import Api from './Components/Api/Api';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import NotFound from './Components/NotFound/NotFound';

let routers = createHashRouter([{
  path: "", element:<Layout/>,children:[
    {index:true, element:<Home/>},
    {path: 'api', element:<Api/>},
    {path: '*', element:<NotFound/>}
  ]
}])

function App() {
  return <>
    <RouterProvider router={routers}/>
  </>;
}

export default App;
