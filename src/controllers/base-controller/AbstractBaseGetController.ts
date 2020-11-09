import { NextFunction, Request, Response } from 'express';
import { AbstractBaseController } from './AbstractBaseController';

abstract class AbstractBaseGetController extends AbstractBaseController {  

  constructor(path: string) {
    super(path);
  }

  protected abstract execute(req: Request, res: Response): any;

  protected initializeRoute(): void {
    this.router.get(this.path, this.execute);
  }
}

export { AbstractBaseGetController };
