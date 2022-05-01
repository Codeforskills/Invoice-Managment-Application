
import './App.css';
import { useState } from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import DataTable from './components/DataTable';
import  highradiuslogo from './highradiuslogo.png'
import ABCproducts from './ABCproducts.png'
import AddingInvoice from './components/AddingInvoice';
import DeletingInvoice from './components/DeletingInvoice';
import UpdateInvoice from './components/UpdateInvoice';
import Analytics from './components/Analytics';
import PredictInvoice from './components/PredictInvoice';
import AdvanceSearch from './components/AdvanceSearch';
import SimpleBackdrop from './components/BackDrop';
import CustomizedSnackbars from './components/Snackbar';
import { CustomizedSnackbarsEdit } from './components/Snackbar';
import { CustomizedSnackbarsDelete } from './components/Snackbar';
import { useEffect } from 'react';
import axios from 'axios';
function App() {
  const url="http://localhost:8080/HRCProject/searchServlet";

   const[selectedrowid,setRowId]=useState('');
   const[toggle,setToggle]=useState(true);
   const[togglepredict,setTogglePredict]=useState(true);
   const[backdrop,setBackDrop]=useState(true);
   const[isvisible,setSnackBar]=useState(false);
   const[editsnackbar,setEditSnackBar]=useState(false);
   const[deletesnackbar,setDeleteSnackBar]=useState(false);
   const [tableData,setTableData]=useState([]);
   const[matchedInvoices,setMatchedInvoices]=useState([]);
   const[advanceSearchInvoices,setadvanceSearchInvoices]=useState([]);

  useEffect(()=>
  {
      fetch("http://localhost:8080/HRCProject/Servlet").then((data)=>data.json()).then((data)=>{ setTableData(data);setBackDrop(false);})
  }, [])

  const handleSearch=(e)=>
  {
    
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        searchcustomerid:e.target.value
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
  .then(response => response.json())
  .then(json =>setMatchedInvoices(json));
  }
 
  const onRefresh=()=>
  {
  
    window.location.reload(true)
    fetch("http://localhost:8080/HRCProject/Servlet").then((data)=>data.json()).then((data)=>{ setTableData(data);setBackDrop(false)});   
  }
  return (
    <div>
  
      <div className='imagecontainer'>
      <img src={ABCproducts} alt="ABC Company Logo" height="90" width="220" className='abclogo'/>  
      <div style={{color:'white',}} className="invoice-list">Invoice List</div>
     <img src={highradiuslogo} alt="HighRadius Logo" height="90" width="260" className='hrclogo'/>
      </div>

      <div className='buttons-container'>
        <PredictInvoice togglepredictbtn={togglepredict} predictinvoiceids={selectedrowid}></PredictInvoice>
        <Analytics></Analytics>
        <AdvanceSearch setadvsearchinvoices={setadvanceSearchInvoices}></AdvanceSearch>
    
       
        <button class="refresh" style={{cursor:'pointer'}} onClick={onRefresh}><RefreshIcon></RefreshIcon></button>
        
        <input  onChange={handleSearch}   type='text' placeholder=' Search Customer Id' className='searchbar'></input>
        <AddingInvoice settingsnackbar={setSnackBar}></AddingInvoice>
        <UpdateInvoice editinvoiceid={selectedrowid} updatetoggle={toggle} settingeditsnackbar={setEditSnackBar} ></UpdateInvoice>
        
        <DeletingInvoice setdelete={setRowId} deleteinvoiceid={selectedrowid} setdatafterdel={setTableData} settingdeletesnackbar={setDeleteSnackBar} deleteinvoice={selectedrowid}></DeletingInvoice>
      </div>
       <CustomizedSnackbars setvisible={isvisible} ></CustomizedSnackbars>
        <CustomizedSnackbarsEdit seteditsnackbar={editsnackbar} message="Record Updated Sucessfully"></CustomizedSnackbarsEdit>
         <CustomizedSnackbarsDelete setdeletesnackbar={deletesnackbar} ></CustomizedSnackbarsDelete>
       <SimpleBackdrop showoverlay={backdrop} ></SimpleBackdrop>
      <div className='records'>
    
    <DataTable className='cls' currentrowid={setRowId} setpredict={setTogglePredict} toggling={setToggle} tabledata={tableData}  matchedinvoices={matchedInvoices} advsearchinvoices={advanceSearchInvoices}></DataTable>
    </div> 
    <footer>
      <span className='pp'><a href="https://www.highradius.com/privacy-policy/" target='_blank' style={{color:'#007bff'}}>Privacy Policy</a></span>
      <span>|&#169;2022 HighRadius Corporation.All rights reserved</span>
    </footer>
    </div>
  );
}

export default App;





