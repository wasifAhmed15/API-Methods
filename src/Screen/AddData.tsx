import {Button,TextField,Typography,Paper,Box} from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
export default function AddData(){
    let [model,setmaodel]=useState<any>({});
    const param = useParams()
    let comentsdata = "https://jsonplaceholder.typicode.com/comments"



    const getDataId = ()=>{
        axios .get(`${comentsdata}/${param.id}` ).then((res)=>{
            console.log(res.data)
            setmaodel({...res.data})
        }).catch((err)=>{
            console.log(err)
        })
    }



    let update = ()=>{
        axios 
        .put(`${comentsdata}/${param.id}`,model).then((res)=>{
            console.log("update data",res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const submitPost = () => {
      
        axios
          .post(comentsdata, model)
          .then((res) => {
            console.log("Post Added Successfully ==>", res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    useEffect(()=>{
if (param.id){
    getDataId()
}
    },[])

    
    return <>
<Box className="Container d-flex justify-content-center align-item center py-4 border w-50" >
<Box className = "w-50 text-center mt-5">
    <Typography variant='h1' className="py-2">
        Add 

    </Typography>
    <Box className="py-2">

    <TextField label="name" type ="text" onChange={(e)=>setmaodel({...model,name:e.target.value})} value={model.name} fullWidth={true}/>
    </Box>
    <Box className="py-2">

    <TextField label="Email" type ="email" onChange={(e)=>setmaodel({...model,email:e.target.value})}  value={model.email} fullWidth={true}/>
    </Box>
   
<Box className="py-2">

    <TextField
         value={model.body}
          label="Body"
          multiline
          rows={4}
          
          variant="standard"
          onChange={(e)=>setmaodel({...model,body:e.target.value})}
         fullWidth={true}/>
</Box>

   
</Box>

</Box>
<button onClick={update}>Update</button>
<button onClick={submitPost}>Submit</button>

           


    
    </>
}