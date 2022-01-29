let express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

data = [
    {
        id: 1,
        name: 'John',
        age: 20
    },
    {
        id: 2,
        name: 'Jane',
        age: 21
    },
    {
        id: 3,
        name: 'Jack',
        age: 22
    }
]


data2 = [
    {
        id: 1,
        name: 'John',
        age: 20,
        address: {
            street: '123 Main St',
            city: 'Anytown',
            state: 'CA'
        }
    },
    {
        id: 2,
        name: 'Jane',
        age: 21,
        address: {
            street: 'Street 1',
            city: 'City 1',
            state: 'State 1'
        }
    },
    {
        id: 3,
        name: 'Jack',
        age: 22,
        address: {
            street: 'Street 2',
            city: 'City 2',
            state: 'State 2'
        }
    }
]


app.get('/data', (req, res) => {
    res.json(data);
});

app.get('/data_multiline', (req, res) => {
    res.json(data2);
});

app.listen(PORT, () => {
    console.log(`API runnig in ${PORT}`)
});