/**
 * An object with data about all stories
 * type: {id, title, prompts, generate(prompts)}
 */

export default {
  stories: {
    space: {
      id: "space",
      title: "Space",
      prompts: { animal: "", verb: "", adj: "", noun: "", planet: "" },
      generate: ({ animal, noun, verb, adj, planet }) =>
        `In the year 3021, it will be the year of the ${noun}. The alien ${animal} will ${verb} with the ${adj} penguins on ${planet}.`,
    },
    fairytale: {
      id: "fairytale",
      title: "Fairy Tale",
      prompts: { place: "", food: "", adj: "", country: "" },
      generate: ({ place, adj, food, country }) =>
        `Once upon a time, in a magical kingdom called ${place}, a ${adj} princess decided to eat ${food}. She was then banished to a boring place called ${country}.`,
    },
    superhero: {
      id: "superhero",
      title: "Superhero",
      prompts: { name: "", superpower: "", adj: "", verb: "", noun: "" },
      generate: ({ name, superpower, adj, verb, noun }) =>
        `On the planet Urf, a superhero by the name of ${name} defeated the evil ${noun} by ${superpower}. All the ${adj} Urfmans can now ${verb} in peace!`,
    },
  },
};
