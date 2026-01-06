import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Model from './Models/Koders.js'; 
import dotenv from "dotenv";


dotenv.config();


const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());



mongoose.connect(process.env.MONGO_URI );      


app.post('/', (req, res) => {
    const { title, description, status} = req.body;      

    Model.create({
        title,
        description,                                   
        status,
    })
        .then(result => res.json(result))
        .catch(err => res.json(err));
});




app.get('/get', (req, res) => {
    Model.find()
        .then(result => res.json(result))     
        .catch(err => res.json(err));
});







app.put('/update/:id', (req, res) => {

    const { id } = req.params;

    const { title, description, completed } = req.body;

    Model.findByIdAndUpdate(id, { title, description, completed }, { new: true })    


        .then(updatedTodo => {
            if (!updatedTodo) {                                                            

                return res.status(404).json({ error: 'Todo not found' });              
            }
            res.json(updatedTodo);
        })



        .catch(err => res.status(500).json({ error: 'failed', details: err.message }));
});




app.delete('/delete/:id', (req, res) => {


    const { id } = req.params;

    Model.findByIdAndDelete(id)                         
    
        .then(deletedTodo => {

            if (!deletedTodo) {                                                
                return res.status(404).json({ error: 'Todo not found' });
            }


            res.json({ message: 'deleted', deletedTodo });             
        })


        .catch(err => res.status(500).json({ error: 'fail', details: err.message }));
});






app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);                
});
