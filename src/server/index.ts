import { AppDataSource } from "../database/config"
import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors"
import {router} from '../routes';
const app = express();
const port = 3000;
AppDataSource
  .initialize()
  .then(async () => {
    app.use(express.json())
    app.use(router)

    // app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    //   return response.json({
    //     status: "Error",
    //     message: error.message
    //   })
    // })

    app.listen(port, () => {
      console.log(`console run in server ${port}`)
    })
  })
  .catch(error => console.log(error))
  

