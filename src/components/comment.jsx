import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { addComment } from '../features/comments/comments.api';
import { useParams } from 'react-router-dom';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height:500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  color: "black",
  p: 4,
};

export  function Comment({onClose}) {
  const [text, setText] = React.useState("")
  const [rate, setRate] = React.useState(1)
  const {id:bookID} = useParams()
  const dispatch = useDispatch()

  const handleAddComment = () => {
    if(text.trim()) {
      dispatch(addComment({id:bookID, commentData:{text, rate:Number(rate), book:bookID}}))
      .unwrap()
      setText("")
      setRate(1)
      onClose()
    }
  }


  return (
    <div>
      <Modal
        open={true}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2"  >
            
            <input 
            className='input-field'
            placeholder='add a comment'
            value={text}
            onChange={e => setText(e.target.value)}

            

            />
            <button onClick={handleAddComment}>Add</button>
            <select className='select-rate' value={rate} onChange={e => setRate(e.target.value)}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2}}>
           
          </Typography>
          <button className='close-button' onClick={onClose}>Close</button>
        </Box>
      </Modal>
    </div>
  );
}
