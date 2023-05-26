import App from './app';
import 'dotenv/config';

const PORT = Number(process.env.APP_PORT) || 3001;

const app = new App();
app.start(PORT);
