import { getConnection } from './../database/database';

const getservices = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM gym');
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getservice = async (req, res) => {
    try {
        const {id}=req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM gym WHERE id=?',id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const addservice = async (req, res) => {
    try {
        const { name,schedule } = req.body;
        if(name==undefined || schedule==undefined){
            res.status(400).json({message:'Mala peticion, por favor llena todos los campos'});
        }
        const newService = {
            name,
            schedule
        }
        const connection = await getConnection();
        const result = await connection.query('INSERT INTO gym SET ?', [newService]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteservice = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query('DELETE FROM gym WHERE id=?',id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateservice = async (req, res) => {
    try {
        const {id} = req.params;
        const { name,schedule } = req.body;
        if(id==undefined || name==undefined || schedule==undefined){
            res.status(400).json({message:'Mala peticion, por favor llena todos los campos'});
        }
        const newService = {
            name,
            schedule
        }

        const connection = await getConnection();
        const result = await connection.query('UPDATE gym SET ? WHERE id=?',[newService,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    getservices,
    getservice,
    addservice,
    deleteservice,
    updateservice
};