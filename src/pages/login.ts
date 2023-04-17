import { Request, Response } from 'express';


export const Login = async (req:Request, response:Response) => {
  const a =  response.json({message:"Hello shashi Bhaiya"})
    return a; 
};