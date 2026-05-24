const express = require('express');
const router = express.Router();

let reportes = [];

// Obtener reportes
router.get('/', (req, res) => {

    res.json(reportes);
});

// Agregar reporte
router.post('/', (req, res) => {

    const nuevoReporte = {

        id: reportes.length + 1,
        ...req.body
    };

    reportes.push(nuevoReporte);

    res.json({
        mensaje: 'Reporte agregado correctamente'
    });
});

// Eliminar reporte
router.delete('/:id', (req, res) => {

    const id = parseInt(req.params.id);

    reportes = reportes.filter(r => r.id !== id);

    res.json({
        mensaje: 'Reporte eliminado'
    });
});

module.exports = router;