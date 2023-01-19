import './App.css';
// import DisplayCardGrid from './pages/cardGridView';
import DisplayCardGrid from './pages/products/view/cardGridView';
import { Switch } from '@mui/material';
import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TablePage from './pages/products/view/tableView2';
import DatatablePage from './pages/products/view/pagination';
import StickyHeadTable from './pages/products/view/materialTable';



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



      <div className="courier" style={{textAlign:"right"}}> Grid<Switch {..."some"} defaultChecked onChange={toggleView} />Table</div>
      {/* <TableMaterial></TableMaterial> */}

    {/* { viewFlag && <DatatablePage></DatatablePage>}  */}
     {viewFlag && <StickyHeadTable></StickyHeadTable>
}
      
      {!viewFlag && <DisplayCardGrid></DisplayCardGrid>}

      
    </div>
  );
}

export default App;
