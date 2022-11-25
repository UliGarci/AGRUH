import { getConnection } from './../database/database';

const gethabitaciones = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM rooms');
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const gethabitacion = async (req, res) => {
    try {
        const {id}=req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM rooms WHERE id=?',id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const addhabitacion = async (req, res) => {
    try {
        const { room, price, description, image } = req.body;
        if(room==undefined || price==undefined || description==undefined || image==undefined){
            res.status(400).json({message:'Mala peticiom, por favor llena todos los campos'});
        }
        const newRoom = {
            room,
            price,
            description,
            image
        }
        const connection = await getConnection();
        const result = await connection.query('INSERT INTO rooms SET ?', [newRoom]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deletehabitacion = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query('DELETE FROM rooms WHERE id=?',id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updatehabitacion = async (req, res) => {
    try {
        const {id} = req.params;
        const { room, price, description, image } = req.body;
        if(id==undefined || room==undefined || price==undefined || description==undefined || image==undefined){
            res.status(400).json({message:'Mala peticiom, por favor llena todos los campos'});
        }
        const newRoom = {
            id,
            room,
            price,
            description,
            image
        }

        const connection = await getConnection();
        const result = await connection.query('UPDATE rooms SET ? WHERE id=?',[newRoom,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    gethabitaciones,
    addhabitacion,
    gethabitacion,
    deletehabitacion,
    updatehabitacion
};