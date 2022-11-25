import { getConnection } from './../database/database';

const getroles = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM roles');
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getrol = async (req, res) => {
    try {
        const {id}=req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM roles WHERE id=?',id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const addrol = async (req, res) => {
    try {
        const { role } = req.body;
        if(role==undefined){
            res.status(400).json({message:'Mala peticion, por favor llena todos los campos'});
        }
        const newRole = {
            role
        }
        const connection = await getConnection();
        const result = await connection.query('INSERT INTO roles SET ?',[newRole]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleterol = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query('DELETE FROM roles WHERE id=?',id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updaterol = async (req, res) => {
    try {
        const {id} = req.params;
        const { role } = req.body;
        if(id==undefined || role==undefined){
            res.status(400).json({message:'Mala peticiom, por favor llena todos los campos'});
        }
        const newRole = {
            role
        }

        const connection = await getConnection();
        const result = await connection.query('UPDATE roles SET ? WHERE id=?',[newRole,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    getroles,
    getrol,
    addrol,
    updaterol,
    deleterol
};