import * as express from "express";
import { Category, User } from "../../entities";

declare global {
  namespace Express {
    interface Request {
      user: User;
      admin: boolean;
      id: number;
      category: Category;
    }
  }
}