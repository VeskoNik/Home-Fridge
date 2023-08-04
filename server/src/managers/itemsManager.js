const Items = require('../models/Items');
const userManager = require('./userManager')

exports.getAll = () => Items.find({});

exports.getOne = (itemsId) => Items.findById(itemsId); 

exports.donate = async (userId, itemsId) => {
    const animal = await Items.findById(itemsId);
    animal.donations.push(userId);
    await animal.save();
}

exports.create = async (ownerId, ItemsData) => {
    await Items.create({ owner: ownerId, ...ItemsData });
};

exports.edit = async (itemsId,itemsData) => {
   await Items.findByIdAndUpdate(itemsId , itemsData , {runValidators : true});
};

exports.delete = async (itemsId) => {
   await Items.findByIdAndDelete(itemsId);
};

exports.search = async (location) => {
    let animal = await this.getAll().lean();
    
    if(location) {
    animal = animal.filter((animal) => animal.location.toLowerCase() == location.toLowerCase());
    }

  
    return animal;
}