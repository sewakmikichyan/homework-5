import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("./client/build"));

class User {
    constructor(name, lastName, nickName, age) {
        this.name = name;
        this.lastName = lastName;
        this.fullName = `${this.name} ${this.lastName}`;
        this.id = nickName.toLowerCase();
        this.age = age;
    }
}

const users = [
    new User("Sara", "Petrosyan", "sarapetrosyan", 17),
    new User("Ashot", "Karapetyan", "Ash", 25),
    new User("Gurgen", "Melqonyan", "Gugo", 30),
];

app.get("/users", (req, res) => {
    res.json(users);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server run http://localhost:${PORT}`);
});