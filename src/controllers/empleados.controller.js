import {getConnection} from './../database/database';

const getempleados=async(req,res)=>{
    try{
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM employees');
        res.json(result);
    }catch(error){
        res.status(400);
        res.send(error.message);
    }
};

const getempleado = async (req, res) => {
    try {
        const {id}=req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM employees WHERE id=?',id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addempleado = async (req, res) => {
    try {
        const { name,surname,email,password,idrole } = req.body;
        if(name==undefined || surname==undefined || email==undefined || password==undefined || idrole==undefined){
            res.status(400).json({message:'Mala peticion, por favor llena todos los campos'});
        }
        const newEmpleado = {
            name,
            surname,
            email,
            password,
            idrole
        }
        const connection = await getConnection();
        const result = await connection.query('INSERT INTO employees SET ?', [newEmpleado]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteempleado = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query('DELETE FROM employees WHERE id=?',id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateempleado = async (req, res) => {
    try {
        const {id} = req.params;
        const { name,surname,email,password,idrole } = req.body;
        if(id==undefined || name==undefined || surname==undefined || email==undefined || password==undefined || idrole==undefined){
            res.status(400).json({message:'Mala peticion, por favor llena todos los campos'});
        }
        const newEmpleado = {
            name,
            surname,
            email,
            password,
            idrole
        }
        const connection = await getConnection();
        const result = await connection.query('UPDATE employees SET ? WHERE id=?',[newEmpleado,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods={
    getempleado,
    getempleados,
    addempleado,
    updateempleado,
    deleteempleado
}