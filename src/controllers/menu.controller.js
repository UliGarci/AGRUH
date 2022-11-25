import { getConnection } from './../database/database';

const getalimentos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM menu');
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getalimento = async (req, res) => {
    try {
        const {id}=req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM menu WHERE id=?',id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const addalimento = async (req, res) => {
    try {
        const { name, description, image, price } = req.body;
        if(name==undefined || description==undefined || image==undefined || price==undefined){
            res.status(400).json({message:'Mala peticiom, por favor llena todos los campos'});
        }
        const newAlimento = {
            name,
            description,
            image,
            price
        }
        const connection = await getConnection();
        const result = await connection.query('INSERT INTO menu SET ?', [newAlimento]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deletealimento = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query('DELETE FROM menu WHERE id=?',id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updatealimento = async (req, res) => {
    try {
        const {id} = req.params;
        const { name, description, image, price } = req.body;
        if(id==undefined || name==undefined || description==undefined || image==undefined || price==undefined){
            res.status(400).json({message:'Mala peticiom, por favor llena todos los campos'});
        }
        const newAlimento = {
            name,
            description,
            image,
            price
        }
        const connection = await getConnection();
        const result = await connection.query('UPDATE menu SET ? WHERE id=?',[newAlimento,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    getalimentos,
    getalimento,
    addalimento,
    deletealimento,
    updatealimento
};