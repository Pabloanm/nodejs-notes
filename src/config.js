import { config } from "dotenv";
config();

/*
Localhost example - Docker
export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/notesdb"; 
*/


//Cloud example - Mongo Atlas
export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://michaeljackson:captaineo01@cluster0.roeumwh.mongodb.net/?retryWrites=true&w=majority"; 
