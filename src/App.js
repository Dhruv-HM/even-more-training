import './App.css';
import DisplayCardGrid from './pages/cardGridView';
import { Switch } from '@mui/material';
import { useState } from 'react';
import TablePage from './pages/tableView2';
import GitHubIcon from '@mui/icons-material/GitHub';


function App() {

  const [viewFlag, changeView] = useState(true);


  function toggleView() {
    changeView(!viewFlag);
    console.log("here");
    // console.log(viewFlag);
  }
  return (
    <div className="container">
      
    <a href="dhruv.com"><GitHubIcon></GitHubIcon></a> <h1> Products </h1>



      <div style={{textAlign:"right"}}> Table<Switch {..."some"} defaultChecked onChange={toggleView} />Grid</div>

      {viewFlag && <TablePage/>}
      {console.log(viewFlag)}
      
      {!viewFlag && <DisplayCardGrid></DisplayCardGrid>}
    </div>
  );
}

export default App;
