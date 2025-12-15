const onePieceDate = new Date(1997,9,27);

const mangas = [
    {
        id: 1,
        name: "One Piece",
        author: "Eichiro Oda",
        description: "Mangas de piratas",
        price: 9.99,
        year: onePieceDate.getFullYear(),
        image: "https://cdn.kobo.com/book-images/f29137c9-3258-4e45-9250-6b87a4ab690b/1200/1200/False/one-piece-vol-1.jpg"
    },

    {
        id: 2,
        name: "Naruto",
        author: "Masashi Kishimoto",
        description: "La historia de un ninja rechazado que sueña con ser Hokage.",
        price: 8.99,
        year: new Date("1999").getFullYear(),
        image: "https://m.media-amazon.com/images/I/81FtwcJpYiL.jpg"
    },
    {
        id: 3,
        name: "Bleach",
        author: "Tite Kubo",
        description: "Un joven adquiere poderes de shinigami para proteger a los vivos y a los muertos.",
        price: 8.50,
        year: new Date("2001").getFullYear(),
        image: "https://m.media-amazon.com/images/I/81d9E2sVXUL.jpg"
    },
    {
        id: 4,
        name: "Dragon Ball",
        author: "Akira Toriyama",
        description: "La aventura de Goku para hacerse más fuerte y proteger la Tierra.",
        price: 10.50,
        year: new Date("1984").getFullYear(),
        image: "https://m.media-amazon.com/images/I/81cRw9B1NAL.jpg"
    },
    {
        id: 5,
        name: "Attack on Titan",
        author: "Hajime Isayama",
        description: "La humanidad lucha por sobrevivir dentro de murallas frente a los titanes.",
        price: 11.99,
        year: new Date("2009").getFullYear(),
        image: "https://m.media-amazon.com/images/I/81kHtyJgREL.jpg"
    },
    {
        id: 6,
        name: "Death Note",
        author: "Tsugumi Ohba y Takeshi Obata",
        description: "Un estudiante encuentra un cuaderno capaz de matar a quien escriba su nombre.",
        price: 9.50,
        year: new Date("2003").getFullYear(),
        image: "https://m.media-amazon.com/images/I/81LZ7Vt-YoL.jpg"
    },
    {
        id: 7,
        name: "Fullmetal Alchemist",
        author: "Hiromu Arakawa",
        description: "Dos hermanos alquimistas buscan la piedra filosofal para recuperar sus cuerpos.",
        price: 9.90,
        year: new Date("2001").getFullYear(),
        image: "https://m.media-amazon.com/images/I/81fX6PvxOGL.jpg"
    },
    {
        id: 8,
        name: "Chainsaw Man",
        author: "Tatsuki Fujimoto",
        description: "Denji se fusiona con un demonio motosierra y empieza una vida llena de caos.",
        price: 8.99,
        year: new Date("2018").getFullYear(),
        image: "https://m.media-amazon.com/images/I/81yGJtJwGoL.jpg"
    },
    {
        id: 9,
        name: "Jujutsu Kaisen",
        author: "Gege Akutami",
        description: "Un estudiante se une a la escuela de hechicería para combatir maldiciones.",
        price: 9.75,
        year: new Date("2018").getFullYear(),
        image: "https://m.media-amazon.com/images/I/81xQLnLsYvL.jpg"
    },
    {
        id: 10,
        name: "Tokyo Ghoul",
        author: "Sui Ishida",
        description: "Un estudiante se convierte en mitad ghoul y debe adaptarse a un mundo peligroso.",
        price: 9.25,
        year: new Date("2011").getFullYear(),
        image: "https://m.media-amazon.com/images/I/91nWf9WavZL.jpg"
    },
    {
        id: 11,
        name: "My Hero Academia",
        author: "Kohei Horikoshi",
        description: "En un mundo lleno de héroes, un chico sin poderes quiere convertirse en uno.",
        price: 8.99,
        year: new Date("2014").getFullYear(),
        image: "https://m.media-amazon.com/images/I/81aA7E5vWdL.jpg"
    },
    {
        id: 12,
        name: "Demon Slayer",
        author: "Koyoharu Gotouge",
        description: "Un joven lucha contra demonios para salvar a su hermana.",
        price: 8.99,
        year: new Date("2016").getFullYear(),
        image: "https://m.media-amazon.com/images/I/81y9hy1n4jL.jpg"
    },
    {
        id: 13,
        name: "The Promised Neverland",
        author: "Kaiu Shirai y Posuka Demizu",
        description: "Unos niños descubren un terrible secreto en el orfanato donde viven.",
        price: 9.20,
        year: new Date("2016").getFullYear(),
        image: "https://m.media-amazon.com/images/I/81PqF3Wf1bL.jpg"
    },
    {
        id: 14,
        name: "Hunter x Hunter",
        author: "Yoshihiro Togashi",
        description: "Gon se convierte en cazador para buscar a su padre.",
        price: 9.95,
        year: new Date("1998").getFullYear(),
        image: "https://m.media-amazon.com/images/I/81ELpAo-VlL.jpg"
    },
    {
        id: 15,
        name: "Berserk",
        author: "Kentaro Miura",
        description: "La historia oscura y brutal del guerrero Guts.",
        price: 12.99,
        year: new Date("1989").getFullYear(),
        image: "https://m.media-amazon.com/images/I/81wqY5T2yJL.jpg"
    }
];
export default mangas

// Meter mas informacion, eso por un lado