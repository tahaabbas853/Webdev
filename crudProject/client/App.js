import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Prod from './components/getprod/Prod'
import Add from './components/addprod/Add'
import Edit from './components/updateprod/Edit'


function App() {
  
  // creating routes for components
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Prod/>,
    },
    {
      path: "/add",
      element: <Add/>,
    },
    {
      path: "/edit/:id",
      element: <Edit/>, 
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
