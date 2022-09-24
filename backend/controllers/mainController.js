const db = require('../db/models');

module.exports = {

    //Mostrar todas las notas
    list: function(req, res){
        let arrayNotas = [];
        db.Nota.findAll({
        raw: true
        })
        .then((e) => {
            e.forEach( nota =>  arrayNotas.push(
                {
                    id: nota.id,
                    titulo: nota.titulo,
                    content: nota.content
                }
            ))
    
            let dataNotas = {
                count: e.length,
                notas: arrayNotas,
            }
            return res.json(dataNotas)
    }
    )
    },
    
    //Mostrar una nota
    show: (req, res) =>{
        db.Nota
            .findByPk(req.params.id)
            .then(nota=>{
                return res.json({
                    id: nota.id,
                    titulo: nota.titulo,
                    content: nota.content
                })
            })
            .catch(e => {
                console.log(e);
            });
    },

    //Crear nota
    create: (req, res) => {
        db.Nota.create({
            titulo: req.body.titulo,
            content: req.body.content
        })
        return res.json({
            "messagge": "Nota crerada con exito!"
        })
    },

    //Actualizar nota
    update: (req, res) => {
        db.Nota.update({
            titulo: req.body.titulo,
            content: req.body.content
        }, {where: {
                id:req.params.id
        }})
        return res.json({
            "messagge": "Nota actualizada con exito!"
        })
    },

    //Eliminar nota
    destroy: (req,res) => {
        db.Nota.destroy({
            where:{
                id: req.params.id
            }
        })
        return res.json({
            "messagge": "Nota eliminada con exito!"
        })
    }
}