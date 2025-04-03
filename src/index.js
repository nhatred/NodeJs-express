import path, { extname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import route from './routes/index.js';

const port = 3001;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
                            app.use(express.json());

// //HTTP logger
app.use(morgan('combined'));

                                //Template engine
                                app.engine(
                                    'hbs',
    engine({
        extname: 'hbs',
    }),
);
app.set('view engine', 'hbs');
                // Tạo __dirname
                app.set('views', path.join(path.join(__dirname, 'resources/views')));

// gọi Router đến các trang cần đến
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
