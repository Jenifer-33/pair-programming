import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AboutLobe } from './molecules/AboutLobe';
import { MainHeading } from './molecules/MainHeading';


function App() {
  return (
    <div>
      <AboutLobe/>
      <MainHeading/>
    </div>
  );
}

export default App;
