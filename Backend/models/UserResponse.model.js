// Schema is used as a template essentially for the mongoDB Attributes/fields!
// I helps to tells Mongo the type it should be and overconditions!
// This will help us to throw a error if they do not meet these conditions 
const mongooses = require('mongoose')

const Schema = mongooses.Schema;

const UserResponseSchema = new Schema(
    {
    UserResponse: {
        type: String,
    },
    UserName: {
        type: String,
    }
    }, { 
        timestamps: true, 
        //timestamp add to be able to filter by most recent (if i need to>)
})

const UserResponse = mongooses.model("UserResponse",UserResponseSchema);
module.exports = UserResponse;

