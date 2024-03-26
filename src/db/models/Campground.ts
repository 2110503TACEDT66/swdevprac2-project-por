import mongoose from "mongoose";

const CampgroundSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Please add a name'],
        unique : true,
        maxlength: [50,'Name cannot be more than 50 characters']
    },
    address: {
        type:String,
        required: [true,'Please add an address']
    },
    tel: {
        type:String,
        required: [true,'Please add telephone number'],
        maxlength : 10
    },
    image:{
        type:String
    }
});

const Campground=mongoose.models.Campground || mongoose.model("Campground",CampgroundSchema);
export default Campground