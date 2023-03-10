import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Root';


function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={routes}>

      </RouterProvider>
    </div >
  );
}

export default App;
