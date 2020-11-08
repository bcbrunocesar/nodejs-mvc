import express from 'express';
import bodyParser from 'body-parser';

class Application {
  public app: express.Application;
  public port: number;

  constructor(controllers: any[], port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`server is running on port ${this.port}`);
    });
  }
  
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }
  
  private initializeControllers(controllers: any[]) {
    controllers.forEach((controller: any) => {
      this.app.use('/', controller.router);
    });
  }
}

export { Application };
