const Moddirector = require('../modelos/Moddirector');


exports.addDirector = async (req, res) => {
    const director = new Moddirector(req.body);
    await director.save();
    
    res.status(201).json(director);
};


exports.getAllDirectors = async (req, res) => {
    const directors = await Moddirector.find();


    res.status(201).json(directors);

};

exports.modelsById = async (req, res) => {
    const id = req.params.id;
    const director = await Moddirector.findById(id);

    res.status(201).json(director);
};

exports.upDirectors = async (req, res) => {
    const NombreId = req.params.id;
    const updatedData = req.body;
    const updatedDirector = await Moddirector.findByIdAndUpdate(
        {_id: NombreId},
        {$set: updatedData},
        {new: true}
    );
    res.status(201).json(updatedDirector);

};

exports.delDirector = async(req, res) => {
    const idDirector = req.params.id;
    const borrarnombre = await Moddirector.findOneAndDelete(
       {_id: idDirector},
       {new: true} 
    );
    res.status(201).json(borrarnombre);

};