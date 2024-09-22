import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let adv = "it's time to work hard"

    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "have some fun";
    }

    res.render('index', {
        dayType: type,
        advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});

