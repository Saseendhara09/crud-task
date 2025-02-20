import mongoose from "mongoose";

const connecDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('db conn');
        

    }catch(err){
        console.log(`error in connecting db :${err}`);
        process.exit(1)
        
    }

}

export default connecDB;