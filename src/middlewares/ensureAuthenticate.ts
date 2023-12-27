import { Request, Response, NextFunction } from 'express';
import { verify } from "jsonwebtoken";

export function ensureAuthenticate(request: Request,response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;

  if(!authToken) {
    return response.status(401).json({
      message: "Token is missing"
    })
  }

  const [, token] = authToken.split(" ");

  try {
    verify(token, 'teste')
    return next()
  } catch(err) {
    return response.status(401).json({
      message: "token invalid"
    })
  }
}