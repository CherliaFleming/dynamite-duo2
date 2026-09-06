const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Megladon",
            power: "laser beams"
        },
        {
            id: 2,
            name: "The Joker",
            power: "Mind control powers"
        }
    ]
}

export const getVillains = () => {
    return structuredClone(database.villains);
}
