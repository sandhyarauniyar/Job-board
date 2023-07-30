import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import JobsPage from './pages/JobsPage';
import JobDetail from './pages/JobDetail';

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JobsPage/>}/>
          <Route path="/jobDetail" element={<JobDetail/>}/>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
