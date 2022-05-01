import React ,{useState,useEffect}  from 'react'
import {DataGrid} from '@material-ui/data-grid'
import { makeStyles, TablePagination } from "@material-ui/core";
const columns=[
    
    {field:'serialNo',headerName:'Sl No',width:80},
    {field:'businessCode',headerName:'Business Code',width:105},
    {field:'custNumber',headerName:'Customer Number',width:115},
    {field:'clearDate',headerName:'Clear Date' ,width:105},
    {field:'businessYear',headerName:'Business Year',width:105},
    {field:'docId' ,headerName:'Document Id', width:115},
    {field:'postingDate' ,headerName:'Posting Date',width:110  },
    {field:'documentCreateDate',headerName:'Document Create Date',width:110  }, 
    {field:'dueInDate',headerName:'Due Date',width:105  },
    {field:'invoiceCurrency',headerName:'Invoice Currency',width: 105 },
    {field:'documentType',headerName:'Document Type',width: 113  },
    {field:'postingId',headerName:'Posting Id',width: 94 },
    {field:'totalopenAmount',headerName:'Total Open Amount',width: 105  },
    {field:'baselineCreateDate',headerName:'BaseLine Create Date',width: 120 },
    {field:'custPaymentTerms',headerName:'Customer Payment Terms',width: 110  },
    {field:'invoiceId',headerName:'Invoice ID',width: 120  },
    {field:'agingBucket',headerName:'Aging Bucket',width: 90 },
    {field:'',headerName:'Predicted',width: 110  },
 ]
 const useStyle = makeStyles({
  root:{
    "& .MuiDataGrid-columnHeaderTitle": {
      overflow: "visible",
      lineHeight: "1.43rem",
      whiteSpace: "normal",
      color:'white',
      // fontWeight:'bold',
},
    
    "& .MuiDataGrid-row":{
      color:'white'
    } ,
    "& .MuiTablePagination-selectRoot ":
    {
      color:'white'
    } 
    ,
    "& .MuiTablePagination-root ":
    {
      color:'white'
    },
    "& .MuiTablePagination-menuItem":
    {
      color:'white'
    },
    "& .MuiTablePagination-selectIcon":
  {
    color:'white'
  },
  "& .MuiDataGrid-selectedRowCount":
  {
    color:'white' 
  },
  "& .MuiDataGrid-checkboxInput":{color:'white',},
  "&  .MuiDataGrid-sortIcon":{color:'white'}
  }
});
let str1='';

 function DataTable(props) {
    const[delRows,setDelRows]=useState('');
    const [pageSize,setPageSize]=useState(10);
    let arr=props.matchedinvoices;
    console.log("founs",arr)
    console.log("MatchedLength:",props.matchedinvoices.length)
    
    const classes = useStyle(); 

  return (
    <div style={{height:520,width:'100%'}} className='invoicedata'>
      <DataGrid
       rowHeight={35}
      
      advsearchinvoices
      
      rows={props.advsearchinvoices.length ===0 && props.matchedinvoices.length===0?props.tabledata:
        props.advsearchinvoices.length!==0?props.advsearchinvoices:props.matchedinvoices.length!==0?
        props.matchedinvoices:props.tabledata}
     
      columns={columns}
      pageSize={pageSize}
      headerHeight={80}
    getRowId={(tableData) => tableData.serialNo}
    className={classes.root }
    disableColumnMenu={true}
    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
     rowsPerPageOptions={[5,10,15]}
    
     onSelectionModelChange={(ids) => {
      const id = new Set(ids);
      
        str1 = Array.from(id).join(',');
        if(str1==='')
        {
          props.toggling(true)
          props.setpredict(true)
          console.log("Empty")
        }
        else{  
          var b=str1.split(",").length===1?false:true;
         console.log("isdisabled=",b)
         console.log(str1);
        props.currentrowid(str1)
        props.toggling(b)
        props.setpredict(false)
          console.log("Not")
        }
        
        
    }}
      checkboxSelection
     
   
> </DataGrid>
    </div>
  
  )
 
}
export default DataTable;

export {str1};
































