import {getConnection} from './../database/database';

const getreservaciones = async(req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM reservations');
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getreservacion = async (req, res) => {
    try {
        const {id}=req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM reservations WHERE id=?',id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addreservacion = async (req, res) => {
    try {
        const { iduser,datein,dateout,hourin,hourout,numkid,numadult,idroom } = req.body;
        if(iduser==undefined || datein==undefined || dateout==undefined || hourin==undefined || hourout==undefined || numkid==undefined || numadult==undefined || idroom==undefined){
            res.status(400).json({message:'Mala peticion, por favor llena todos los campos'});
        }
        const newReservacion = {
            iduser,datein,dateout,hourin,hourout,numkid,numadult,idroom
        }
        const connection = await getConnection();
        const result = await connection.query('INSERT INTO reservations SET ?', [newReservacion]);
        var precioRoom = await connection.query('SELECT price FROM rooms WHERE id=?',idroom);
        var precionrum = JSON.parse(JSON.stringify(precioRoom));
        //console.log('Precio Habitacion:',precionrum);
        var totalGastado = await connection.query('SELECT spent FROM users WHERE id=?',iduser);
        var tot=JSON.parse(JSON.stringify(totalGastado));
        //console.log('Total:',tot);
        tot=tot[0].spent+precionrum[0].price;
        //console.log('Precio a pagar: ',tot)
        await connection.query('UPDATE users set spent=? WHERE id=?',[tot,iduser]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deletereservacion = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query('DELETE FROM reservations WHERE id=?',id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updatereservacion = async (req, res) => {
    try {
        const {id} = req.params;
        const { iduser,datein,dateout,hourin,hourout,numkid,numadult,idroom } = req.body;
        if(iduser==undefined || datein==undefined || dateout==undefined || hourin==undefined || hourout==undefined || numkid==undefined || numadult==undefined || idroom==undefined){
            res.status(400).json({message:'Mala peticion, por favor llena todos los campos'});
        }
        const newReservacion = {
            iduser,datein,dateout,hourin,hourout,numkid,numadult,idroom
        }

        const connection = await getConnection();
        const result = await connection.query('UPDATE reservations SET ? WHERE id=?',[newReservacion,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods={
    getreservaciones,
    getreservacion,
    addreservacion,
    deletereservacion,
    updatereservacion
}