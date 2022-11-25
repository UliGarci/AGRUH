import {getConnection} from './../database/database';

const getusuarios = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM users');
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getusuario = async (req, res) => {
    try {
        const {id}=req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM users WHERE id=?',id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addusuario = async (req, res) => {
    try {
        const {name,surname,email,password,phone,card,idmembership,idrole,spent} = req.body;
        if(name==undefined || surname==undefined || email==undefined || password==undefined || card==undefined || idmembership==undefined || idrole==undefined || spent==undefined){
            res.status(400).json({message:'Mala peticion, por favor llena todos los campos'});
        }
        const newUser = {
            name,
            surname,
            email,
            password,
            phone,
            card,
            idmembership,
            idrole,
            spent
        }
        const connection = await getConnection();
        const result = await connection.query('INSERT INTO users SET ?', [newUser]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteusuario = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query('DELETE FROM users WHERE id=?',id);
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateusuario = async (req, res) => {
    try {
        const {id} = req.params;
        const {name,surname,email,password,phone,card,idmembership,idrole,spent} = req.body;
        if(id==undefined || name==undefined || surname==undefined || email==undefined || password==undefined || card==undefined || idmembership==undefined || idrole==undefined || spent==undefined){
            res.status(400).json({message:'Mala peticiom, por favor llena todos los campos'});
        }

        const newUser = {
            name,
            surname,
            email,
            password,
            phone,
            card,
            idmembership,
            idrole,
            spent
        }

        const connection = await getConnection();
        const result = await connection.query('UPDATE users SET ? WHERE id=?',[newUser,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getusuarios,
    getusuario,
    addusuario,
    deleteusuario,
    updateusuario
};