const express = require('express');
const router = express.Router();

router.post('/login', async(req,res)=>{

    const { correo, password } = req.body;

    if(correo === 'admin@enos.com' && password === '123'){

        res.json({
            success:true,
            mensaje:'Login correcto'
        });

    }else{

        res.json({
            success:false,
            mensaje:'Credenciales incorrectas'
        });
    }
});

module.exports = router;