const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  },
  visible : {
    type: Boolean,
    required: true
  }
},  
{ collection : 'task' });

module.exports = mongoose.models.Task || mongoose.model('Task', taskSchema);