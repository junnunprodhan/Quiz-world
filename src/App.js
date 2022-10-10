
import './App.css';
import { RouterProvider} from 'react-router-dom';
import router from './Utilities/routes';




function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
