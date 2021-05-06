import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import { Base64 } from 'js-base64';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});



function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell sortDirection="desc">
          {row.id.substring(row.id.length - 3)}
        </TableCell>
        <TableCell component="th" scope="row">
          <a href={"/issue-details/"+row.id}>
          {row.issue}
          </a>
        </TableCell>
        
        <TableCell>{row.date}</TableCell>
        <TableCell size="small" padding="checkbox" style={{marginRight:0,paddingRight:10}}>{row.status == "OPEN" ? (<div style={{backgroundColor:"#DC143C",color:"white",padding:10,borderRadius:10,width:60,marginRight:10}}>OPEN</div>) : <div style={{backgroundColor:"#3CB371",padding:10,borderRadius:10,width:80,color:"white"}}>CLOSED</div>}</TableCell>
      </TableRow>
      
    </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };



export default function CollapsibleTable() {
  const [projectId,setProject] = React.useState('');
  const [call,setCall] = React.useState(true);
  const [rows,setRows] = React.useState([]);

  React.useEffect(() => {
    getIssues();
  },[projectId])
  

  const createData = (id,issue,date,status) => {
    let obj = {
      id,
      issue,
      date,
      status
    };
    console.log(rows);
    let arr = [...rows];
    arr.push(obj);
    setRows(arr);
  }

  const ip1 = "192.168.1.11:5000";
  const ip2 = "192.168.43.250:5000";

  const getIssues = () => {
    setProject(JSON.parse(localStorage.getItem('loginCredentials'))['0'].Active_Project);
    setCall(true);
    let data = projectId;
    data = Base64.encode(data);

    let key = "Project_Id";
    key = Base64.encode(key);
    console.log('http://192.168.1.11:5000/retrieve/issues/'+key+'/'+data);
    fetch('http://'+ip1+'/retrieve/issues/'+key+'/'+data)
    .then(result =>result.json())
    .then(resultJson => {
      console.log(resultJson);
      let arr = [...rows];
      resultJson.forEach(el => {
        let status;
        if(!el['Status']){
          status = "OPEN";
        }
        else{
          status = el['Status'];
        }
        let obj = {id: el['_id'],issue: el['Issue_Title'],date: el['Date'],status};
        
        arr.push(obj);
        
      })
      setRows(arr);
    })
    .catch(err => console.log(err))
    
  }

  return (
    <Grid xs = {10} style={{margin:"auto",marginTop:0,marginBottom:20}}>
      <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Issue Id</TableCell>
            <TableCell> Issue </TableCell>
            <TableCell >Date Issued</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(0).reverse().map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>

  );
}
