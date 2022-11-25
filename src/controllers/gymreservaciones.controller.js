import {getConnection} from './../database/database'

const getGymReservaciones = async(req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM gymreservations');
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getGymReservacion = async (req, res) => {
    try {
        const {id}=req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM gymreservations WHERE id=?',id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addGymReservacion = async (req, res) => {
    try {
        const { iduser,idgym } = req.body;
        if(iduser==undefined || idgym==undefined){
            res.status(400).json({message:'Mala peticion, por favor llena todos los campos'});
        }
        const newgymreservacion = {
            iduser,idgym
        }
        const connection = await getConnection();
        const result = await connection.query('INSERT INTO gymreservations SET ?', [newgymreservacion]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteGymReservacion = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query('DELETE FROM gymreservations WHERE id=?',id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateGymReservacion = async (req, res) => {
    try {
        const {id} = req.params;
        const { iduser,idgym } = req.body;
        if(iduser==undefined || idgym==undefined){
            res.status(400).json({message:'Mala peticion, por favor llena todos los campos'});
        }
        const newGymReservacion = {iduser,idgym}
        const connection = await getConnection();
        const result = await connection.query('UPDATE gymreservations SET ? WHERE id=?',[newGymReservacion,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods={
    getGymReservaciones,
    getGymReservacion,
    addGymReservacion,
    updateGymReservacion,
    deleteGymReservacion
}