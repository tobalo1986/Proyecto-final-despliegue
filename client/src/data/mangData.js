const onePieceDate = new Date(1997, 9, 27);

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
        description: "Ninjas, chakra y el camino del héroe",
        price: 8.95,
        year: 1999,
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQW_5RCRmlOekQyvL7QF9JH-FzQtURRAphHtgFF7uld1nWKWCtdWcYJLv-Np2SJehaQMCqAEnS5p_cyfzfsdIr_j3MRnWCsWcqOZEuB0SQ0HlTbOBC1O_x_Yw&usqp=CAc"
    },
    {
        id: 3,
        name: "Dragon Ball",
        author: "Akira Toriyama",
        description: "Aventuras y artes marciales",
        price: 9.99,
        year: 1984,
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRDr8jxvGTOIobwlMGafHJDPb_ZMxQcmzYlIuaKrNYDSoISb2uk6bULuK4VPPv22idqYrvGoxPwj8lyOKGwaoitUWsrkgV2-bk2kpPfWCYacBgmVm6Q0JET&usqp=CAc"
    },
    {
        id: 4,
        name: "Attack on Titan",
        author: "Hajime Isayama",
        description: "La humanidad contra los titanes",
        price: 10.99,
        year: 2009,
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSBrYeQxrZYWJxmMMCMKcprLZ2DDXvJxx-5qNGIAWJ-Cm3LM2yhgD_fLd9JU-lriK3HpQLkeXkH37-O726k9jUDcV4k12iXbD-XubMzAmotpbcwqdRgFg0xTw"
    },
    {
        id: 5,
        name: "Demon Slayer",
        author: "Koyoharu Gotouge",
        description: "Cazadores de demonios y espadas",
        price: 8.50,
        year: 2016,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSZSBGQZGX1Jckr-LAbZTkkYHLgWDE_8Fj1mxKlQQ1MRg5O2Uj2uSHY_RR1XUcxnvymlfvmm0rWmITRrXIqHW7B-03NdzKew0Vc6POA1JeQ"
    },
    {
        id: 6,
        name: "Death Note",
        author: "Tsugumi Ohba",
        description: "Thriller psicológico y sobrenatural",
        price: 7.99,
        year: 2003,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS_9A2J5FU5uvPjHJzJkoxiwQVRs2PKNHaqckE4nJV3mo3ZRGmEyTk94kron580gUlQJGQuaIghTxfMBo8t4pppoOoVPkVt"
    },

    /* --- NUEVOS MANGAS HASTA LLEGAR A 15 --- */

    {
        id: 7,
        name: "Bleach",
        author: "Tite Kubo",
        description: "Shinigamis, espíritus y batallas sobrenaturales",
        price: 8.99,
        year: 2001,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSK1Gye7E2NVzldPO7sTw0iC9jXbzDq29tb5Dv5X2E7vVXOLVbR6NFGB2BJn_RcZPBtNzzY9lVla6O465olqHWRdk2f1FYt"
    },
    {
        id: 8,
        name: "Fullmetal Alchemist",
        author: "Hiromu Arakawa",
        description: "Alquimia, aventuras y el vínculo entre hermanos",
        price: 9.50,
        year: 2001,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTFk5Vj6qH5NPFa8G3czT8j1F8cf5lZkU0NnMjdE7UgXbYg5oiZVPoY70IJlJnddTZvmwV2Z5VMBvVSZ5ZmyPAWVxv3wIS5"
    },
    {
        id: 9,
        name: "Tokyo Ghoul",
        author: "Sui Ishida",
        description: "Terror, ghouls y la lucha por la identidad",
        price: 9.25,
        year: 2011,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTS1u2W5d9GptAl-mhRvkgerEwbHk0QOUSST4lj4OFmYqFw7zuIg69C6lIBWlBaxnf8_ZNkn52bI87tKE7-zCuP3P8nnQKP"
    },
    {
        id: 10,
        name: "Jujutsu Kaisen",
        author: "Gege Akutami",
        description: "Hechicería, maldiciones y acción sobrenatural",
        price: 8.99,
        year: 2018,
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ8uFf8hRGzuKFMWatCHEP6ZEZaDuaBWl4ZFl4WQjVnv6ijQmPLk0FfN2_mW2o_4pM0KCrVFqsk0vWTdPXLq6eFFlgV2upj"
    },
    {
        id: 11,
        name: "Chainsaw Man",
        author: "Tatsuki Fujimoto",
        description: "Demonios, caos y acción sangrienta",
        price: 8.75,
        year: 2018,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQamg2mlYYMIyd80bfEptOgXiWiO2fjJS4ROpFCGjnzMvTG_rZ2ZB_kvkW9WeURJ5ESjTsK_JZcNUlKCfXR0Hvj8FuByGkC"
    },
    {
        id: 12,
        name: "Hunter x Hunter",
        author: "Yoshihiro Togashi",
        description: "Cazadores, aventuras y desafíos épicos",
        price: 9.80,
        year: 1998,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRj6-RZ6aBxM9E_mkAHxpyTbQ2cEhT0mqkeHIk1poNAn3-j3a4hCqiLFsxMC4uXUFCcki5HLtHJUKIHEyiydcND7heAgIYA"
    },
    {
        id: 13,
        name: "My Hero Academia",
        author: "Kohei Horikoshi",
        description: "Héroes, poderes y una escuela muy especial",
        price: 8.99,
        year: 2014,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRJEl9w3HxiWwV-e1QEgPgrkVY9ZBOyhMRs20myqmcI7XLf9drCmZ7P8iOD2z0KZsdVTPk0edSkAgLXyLrU5O5ScPN3DRta"
    },
    {
        id: 14,
        name: "The Promised Neverland",
        author: "Kaiu Shirai",
        description: "Niños, misterio y un orfanato con secretos",
        price: 9.10,
        year: 2016,
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRtekBupIt67z9rXT1xMwvO2z6kaclZsky7MeH8CkEXj4PmPoh2SPLPqgYw5OMH2wZXgTFVz-Fq5371K3IfNi8H6FxYbSpf"
    },
    {
        id: 15,
        name: "Berserk",
        author: "Kentaro Miura",
        description: "Oscuridad, fantasía y una historia brutal",
        price: 12.99,
        year: 1989,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTvVy_KqSpazhqcCfm_g5TJwQ07yqmh5bFb9bukVwhtM8-IfpPSMkzWOozfEJPELfDUrqFJssCiO4PF19e3FYX0anG7z62nmQ"
    }
];
export default mangas

// Meter mas informacion, eso por un lado