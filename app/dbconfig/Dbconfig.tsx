import mongoose from "mongoose";

export async function connect() {
    
    try {
        mongoose.connect(process.env.MANGOBD_URI!);
        const connection = mongoose.connection;

        connection.on('connecter', () =>{
            console.log('Mangodb connecté avec succès');
            
        })

        connection.on('error', (err)=>{
            console.log('MangoDb erreur de connection '+ err);
            process.exit();
            
        })
    } catch (error) {
        console.log(error);
        
    }
}