const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://admin:admin@libraryapp.is8pbwr.mongodb.net/?retryWrites=true&w=majority");

const Schema =mongoose.Schema

var resSchema = new Schema({
        movie: String,
		actress: String,
		actor: String,
		
})

var movieInfo = mongoose.model("movies",resSchema)

module.exports=movieInfo

