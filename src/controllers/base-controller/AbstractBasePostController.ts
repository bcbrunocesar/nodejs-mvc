import { Request, Response } from 'express';
import { AbstractBaseController } from "./AbstractBaseController";

abstract class AbstractBasePostController extends AbstractBaseController {

  constructor(path: string) {
    super(path);
  }

  protected abstract execute(req: Request, res: Response): any;

  protected initializeRoute(): void {
    this.router.post(this.path, this.execute);
  }
}

export { AbstractBasePostController };
