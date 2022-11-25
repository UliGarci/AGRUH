import {getConnection} from '../database/database'

const getmembresias = async(req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM memberships');
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getmembresia = async (req, res) => {
    try {
        const {id}=req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM memberships WHERE id=?',id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addmembresia = async (req, res) => {
    try {
        const { membership,price } = req.body;
        if(membership==undefined || price==undefined){
            res.status(400).json({message:'Mala peticion, por favor llena todos los campos'});
        }
        const newmembresia = {
            membership,price
        }
        const connection = await getConnection();
        const result = await connection.query('INSERT INTO memberships SET ?', [newmembresia]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deletemembresia = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query('DELETE FROM memberships WHERE id=?',id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updatemembresia = async (req, res) => {
    try {
        const {id} = req.params;
        const { membership,price } = req.body;
        if(membership==undefined || price==undefined){
            res.status(400).json({message:'Mala peticion, por favor llena todos los campos'});
        }
        const newmembresia = {membership,price}
        const connection = await getConnection();
        const result = await connection.query('UPDATE memberships SET ? WHERE id=?',[newmembresia,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods={
    getmembresias,
    getmembresia,
    addmembresia,
    updatemembresia,
    deletemembresia
}