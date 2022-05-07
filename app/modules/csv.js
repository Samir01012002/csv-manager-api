const fs = require('fs')
const csv = require('csv-parser');

const Csv = require('../database/models/Csv').default
const multiformDataHelper = require('./../utils/tools/multiform-data-helper');
const textFormatter = require('./../utils/tools/text-formatter').textFormatter;


module.exports.insert = async (req, res) => {

  let csv = {
    csv: {
      name: "", 
      data: [] 
    }
  }

  let parse = await multiformDataHelper.parseRequest(req);
  let fields = parse.fields;
  let files = parse.files;

  if(!files.file || !files.file.name.endsWith('.csv')){
    return res.status(404).send({message: "Intente con archivo CSV"});
  }

  let text = fs.readFileSync(files.file.path, 'utf-8').toString();

  csv.csv.name = files.file.name;
  let textData = textFormatter(text)

  csv.csv.data = textData;

  let csvObject = new Csv(csv);

  try {
    let saved = await csvObject.save();
    return res.send({data : saved});
  } catch (error) {
    return res.status(404).send({message: "Error insertando el CSV"});
  }
}

module.exports.getCsvs = async (req, res) => {
  const csvs = await Csv.find();
  return res.json(csvs);
};

module.exports.getCsvById = async (req, res) => {
  const { id } = req.params;
  try {
    const csv = await Csv.findById(id);
    res.status(200).json(csv);
  } catch (error) {
    res.status(404).send({message: "Error consultando"});
  }
};
