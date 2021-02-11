import React,{useState} from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {makeStyles} from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
//import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import ReactHtmlParser from 'react-html-parser';



const useStyles = makeStyles((theme) => ({
    root: {
      width: '213vh',
      height: '35vh',
      margin: '10px',
      borderRadius: '6px',
      backgroundColor: theme.palette.grey[100]
    }
 
 
 }))
 


function Fceditor(){
    const [value, setValue] = useState('')
    const handleOnChange = (e, editor) => {
        const data = editor.getData()
        setValue(data)
    }
    const classes = useStyles(); 
    return(
       <Container className = {classes.root}>
          <h2>Instruction</h2>
          <CKEditor 
             editor = {ClassicEditor}
             onChange = {handleOnChange}
          
          />
          <div>
              {ReactHtmlParser(value)}
          </div>
       </Container>
    )
}

export default Fceditor