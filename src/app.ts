import express, { Express } from 'express';
import LaunchRoutes from './routes/LaunchRoutes';
import capsulesRoutes from './routes/CapsuleRoutes';
import coresRoutes from './routes/CoresRoutes';

class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private routes(): void {
    this.app.use('/launches', LaunchRoutes);
    this.app.use('/capsules', capsulesRoutes);
    this.app.use('/cores', coresRoutes);
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}

export default App;
