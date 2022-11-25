import {getConnection} from './../database/database';

const getproductos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM store');
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getproducto = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM store WHERE id=?',id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addproducto = async (req, res) => {
    try {
        const { souvenir, image, price,quantity } = req.body;
        if(souvenir==undefined || image==undefined || price==undefined || quantity==undefined){
            res.status(400).json({message:'Mala peticiom, por favor llena todos los campos'});
        }
        const newproducto = {
            souvenir,
            image,
            price,
            quantity
        }
        const connection = await getConnection();
        const result = await connection.query('INSERT INTO store SET ?', [newproducto]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteproducto = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query('DELETE FROM store WHERE id=?',id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateproducto = async (req, res) => {
    try {
        const {id} = req.params;
        const { souvenir, image, price, quantity} = req.body;
        if(id==undefined || souvenir==undefined || image==undefined || price==undefined || quantity==undefined){
            res.status(400).json({message:'Mala peticiom, por favor llena todos los campos'});
        }
        const newProducto = {
            id,
            souvenir,
            image,
            price,
            quantity
        }

        const connection = await getConnection();
        const result = await connection.query('UPDATE store SET ? WHERE id=?',[newProducto,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    addproducto,
    getproducto,
    getproductos,
    deleteproducto,
    updateproducto
}