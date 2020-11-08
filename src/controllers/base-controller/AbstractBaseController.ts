import express, { Router } from 'express';

abstract class AbstractBaseController {

  public router: Router;
  public path: string;

  constructor(path: string) {      
    this.path = path;
    this.router = express.Router();

    this.initializeRoute();
  }

  protected abstract initializeRoute(): void;
}

export { AbstractBaseController };
