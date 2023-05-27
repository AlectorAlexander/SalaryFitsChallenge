import express, { Express } from 'express';
import LaunchRoutes from './routes/LaunchRoutes';
import capsulesRoutes from './routes/CapsuleRoutes';
import coresRoutes from './routes/CoresRoutes';
import launchpadsRoutes from './routes/LaunchpadsRoutes';
import payloadsRoutes from './routes/PayloadRoutes';
import rocketsRoutes from './routes/RocketsRoutes';

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
    this.app.use('/launchpads', launchpadsRoutes);
    this.app.use('/payloads', payloadsRoutes);
    this.app.use('/rockets', rocketsRoutes);
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}

export default App;
