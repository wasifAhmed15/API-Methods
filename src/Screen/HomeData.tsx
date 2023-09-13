import axios from "axios"
import { useState, useEffect } from "react";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";

export default function HomeData(){
  let [gettext,getsettext]=useState<any>([])
    
    const getData =  ()=>{

        axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
            console.log(res.data)
            getsettext([...res.data])
        }).catch((err)=>{
            console.log(err)
        })
    }

   useEffect(()=>{
getData()
   },[])

  let Navigate = useNavigate ()



    return <>
    
    {
      gettext.map((x:any,i:any)=>{
        
        return  <TableContainer component={Paper}>
      

          <TableHead>

          <TableRow >
          <TableCell align="right">{x.id}</TableCell>
          <TableCell align="right">{x.email}</TableCell>
          <TableCell align="right">{x.body}</TableCell>
          </TableRow>

          </TableHead>

        </TableContainer>
        
        
      })
    }
    <button onClick={()=>{
      Navigate("/add")
    }}>ADD</button>
    </>
}



