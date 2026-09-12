const cloudinary = require('cloudinary').v2;
//import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || 'hpz0amwd',
  api_key: process.env.API_KEY || '786634787962869',
  api_secret: process.env.API_SECRET || 'TrJKDxx2uozgnirIZFdHp2zqptE',
});

module.exports = cloudinary;