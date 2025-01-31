const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(50);
const ruc = Joi.string().length(11);
const direccion = Joi.string().min(5).max(100);
const estado = Joi.string().valid('active', 'inactive');
const is_active = Joi.boolean().required();

const createProviderSchema = Joi.object({
    name: name.required(),
    ruc: ruc.required(),
    direccion: direccion.required(),
    is_active: is_active
  });
  
  const updateProviderSchema = Joi.object({
    name: name,
    ruc: ruc,
    direccion: direccion,
    is_active: is_active
  });

const getProviderSchema = Joi.object({
  id: id.required()
});

module.exports = {
  createProviderSchema,
  updateProviderSchema,
  getProviderSchema
};