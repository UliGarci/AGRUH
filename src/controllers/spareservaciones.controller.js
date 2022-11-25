import {getConnection} from './../database/database'

const getSpaReservaciones = async(req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM spareservations');
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getSpaReservacion = async (req, res) => {
    try {
        const {id}=req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM spareservations WHERE id=?',id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addSpaReservacion = async (req, res) => {
    try {
        const { iduser,idspa } = req.body;
        if(iduser==undefined || idspa==undefined){
            res.status(400).json({message:'Mala peticion, por favor llena todos los campos'});
        }
        const newspareservacion = {
            iduser,idspa
        }
        const connection = await getConnection();
        const result = await connection.query('INSERT INTO spareservations SET ?', [newspareservacion]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteSpaReservacion = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query('DELETE FROM spareservations WHERE id=?',id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateSpaReservacion = async (req, res) => {
    try {
        const {id} = req.params;
        const { iduser,idspa } = req.body;
        if(iduser==undefined || idspa==undefined){
            res.status(400).json({message:'Mala peticion, por favor llena todos los campos'});
        }
        const newspareservacion = {iduser,idspa}
        const connection = await getConnection();
        const result = await connection.query('UPDATE spareservations SET ? WHERE id=?',[newspareservacion,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods={
    getSpaReservacion,
    getSpaReservaciones,
    addSpaReservacion,
    updateSpaReservacion,
    deleteSpaReservacion
}