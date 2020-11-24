import { Request, Response } from "express";
import { CrudController } from "../CrudController";

export class UserController extends CrudController {
  public create(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): void {
    throw new Error("Create method not implemented");
  }
  public read(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): void {
    throw new Error("Read method not implemented");
  }
  public update(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): void {
    throw new Error("Update method not implemented");
  }
  public delete(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): void {
    throw new Error("Delete method not implemented");
  }
}
