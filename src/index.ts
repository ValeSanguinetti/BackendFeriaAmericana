import app from './app.js';
import appConfig from './config/app.config.js';

app.listen(appConfig.app.port, () => {
  console.log(`Server is running on http://localhost:${appConfig.app.port}`);
});
