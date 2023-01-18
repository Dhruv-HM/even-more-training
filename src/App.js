import logo from './logo.svg';
import './App.css';
import DisplayTable from './pages/tableView';
import DisplayCardGrid from './pages/cardGridView';
import { Switch } from '@mui/material';
import FormGroup from '@mui/material';
import FormControlLabel from '@mui/material';
import { useState } from 'react';


function App() {

  const [viewFlag, changeView] = useState(true);


  function toggleView() {
    changeView(!viewFlag);
    console.log("here");
    // console.log(viewFlag);
  }
  return (
    <div className="App">

      <h1> Products </h1>


      <Switch {..."some"} defaultChecked onChange={toggleView} />

      {viewFlag && <DisplayTable></DisplayTable>}
      {console.log(viewFlag)}
      {!viewFlag && <DisplayCardGrid></DisplayCardGrid>}
    </div>
  );
}

export default App;
