import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoApp from './TodoApp';
import Todo from './Todo';
// import WeatherApp from './WeatherApp';
import Calculator from './Calculator';
import ImageGallery from './ImageGallery';
import TaskTimer from './TaskTimer';
import Input from './Input';
import DynamicListState from './DynamicListState';
import DynamicList from './DynamicList';

function App() {
  return (
    <>

    <DynamicList />
    {/* <DynamicListState /> */}
    {/* <Input /> */}
    {/* <div className="App">
      <h1>Task Timer App</h1>
      <TaskTimer/>
    </div> */}


{/*     
    <div className="App">
      <h1 className="text-center mt-4">Image Gallery</h1>
      <ImageGallery/>
    </div> */}





    {/* <Calculator />
    {/* <WeatherApp /> */}
    {/* <TodoApp/>
    <Todo /> */} 
    </>
  );
}

export default App;
