import logo from './logo.svg';
import './App.css';
import DisplayTable from './pages/tableView';
import DisplayCardGrid from './pages/cardGridView';
import { Switch } from '@mui/material';
import FormGroup from '@mui/material';
import FormControlLabel from '@mui/material';
import { useState } from 'react';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import CustomPaginationActionsTable from './pages/tableView2';
import TablePagination from './pages/tableView2';
import TablePage from './pages/tableView2';


function App() {

  const [viewFlag, changeView] = useState(true);


  function toggleView() {
    changeView(!viewFlag);
    console.log("here");
    // console.log(viewFlag);
  }
  return (
    <div className="container">

      <h1> Products </h1>


      <div style={{textAlign:"right"}}> Table<Switch {..."some"} defaultChecked onChange={toggleView} />Grid</div>

      {viewFlag && <TablePage/>}
      {console.log(viewFlag)}
      
      {!viewFlag && <DisplayCardGrid></DisplayCardGrid>}
    </div>
  );
}

export default App;
