const navLinks = [
    {
        id: "cocktails",
        title: "Cocktails",
    },
    {
        id: "about",
        title: "A propos",
    },
    {
        id: "art",
        title: "Art",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const cocktailLists = [
    {
        name: "Chapel Hill Shiraz",
        country: "AU",
        detail: "Battle",
        price: "10 €",
    },
    {
        name: "Caten Malbee",
        country: "AU",
        detail: "Battle",
        price: "12 €",
    },
    {
        name: "Rhino Pale Ale",
        country: "CA",
        detail: "750 ml",
        price: "12 €",
    },
    {
        name: "Irish Guinness",
        country: "IE",
        detail: "600 ml",
        price: "15 €",
    },
];

const mockTailLists = [
    {
        name: "Tropical Bloom",
        country: "US",
        detail: "Battle",
        price: "10 €",
    },
    {
        name: "Fruitpassion Menthe",
        country: "US",
        detail: "Battle",
        price: "11 €",
    },
    {
        name: "Citrus Glow",
        country: "CA",
        detail: "750 ml",
        price: "11 €",
    },
    {
        name: "Lavender Fizz",
        country: "IE",
        detail: "600 ml",
        price: "12 €",
    },
];

const profileLists = [
    {
        imgPath: "/images/profile1.png",
    },
    {
        imgPath: "/images/profile2.png",
    },
    {
        imgPath: "/images/profile3.png",
    },
    {
        imgPath: "/images/profile4.png",
    },
];

const featureLists = [
    "Mélanges parfaitement équilibrés",
    "Garnis à la perfection",
    "Toujours glacés",
    "Secoués et remués avec expertise",
];

const goodLists = [
    "Ingrédients soigneusement sélectionnés",
    "Techniques signatures",
    "L’art du bar en action",
    "Saveurs fraîchement pilées",
];


const storeInfo = {
    heading: "Où nous trouver",
    address: "23, boulevard kerampont, Lannion",
    contact: {
        phone: "06.00.00.00.00",
        email: "bonjour@cocktail.com",
    },
};

const openingHours = [
    { day: "Lun–Jeu", time: "11h00 – 00h00" },
    { day: "Ven", time: "11h00 – 02h00" },
    { day: "Sam", time: "09h00 – 02h00" },
    { day: "Dim", time: "09h00 – 01h00" },
];


const socials = [
    {
        name: "Instagram",
        icon: "/images/insta.png",
        url: "#",
    },
    {
        name: "X (Twitter)",
        icon: "/images/x.png",
        url: "#",
    },
    {
        name: "Facebook",
        icon: "/images/fb.png",
        url: "#",
    },
];

const sliderLists = [
    {
        id: 1,
        name: "Mojito Classique",
        image: "/images/drink1.png",
        title: "Ingrédients Simples, Saveur Audacieuse",
        description:
            "Préparée avec de la tequila, du jus de citron vert et de la liqueur d’orange, la Margarita est facile à réaliser et pleine de caractère. Ajoutez un bord salé pour la boisson estivale parfaite.",
    },
    {
        id: 2,
        name: "Mojito Framboise",
        image: "/images/drink2.png",
        title: "Un Classique Pétillant Qui Ne Déçoit Jamais",
        description:
            "La Margarita est un classique qui équilibre le citron vert acidulé, la tequila douce et une touche de sucre. Secouée, glacée ou sur glace — toujours fraîche et rafraîchissante.",
    },
    {
        id: 3,
        name: "Brise Violette",
        image: "/images/drink3.png",
        title: "Ingrédients Simples, Saveur Audacieuse",
        description:
            "Préparée avec de la tequila, du jus de citron vert et de la liqueur d’orange, la Margarita est facile à réaliser et pleine de caractère. Ajoutez un bord salé pour la boisson estivale parfaite.",
    },
    {
        id: 4,
        name: "Mojito Curaçao",
        image: "/images/drink4.png",
        title: "Préparé Avec Soin, Servi Avec Amour",
        description:
            "Chaque cocktail est élaboré avec des ingrédients frais et la passion de peaufiner chaque service, que ce soit pour fêter un événement ou simplement se détendre.",
    },
];

export {
    navLinks,
    cocktailLists,
    mockTailLists,
    profileLists,
    featureLists,
    goodLists,
    openingHours,
    storeInfo,
    socials,
    sliderLists,
};