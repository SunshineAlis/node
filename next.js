import chalk from "chalk";
console.log(chalk.blue("hello world!"));
import figlet from "figlet";

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
// import ora from "ora";

// const spinner = ora("Loading unicorns").start();

// setTimeout(() => {
//   spinner.color = "yellow";
//   spinner.text = "Loading rainbows";
// }, 1000);
import pokemon from "pokemon";

console.log(pokemon.random());
//=> ['Bulbasaur', …]
import { faker } from "@faker-js/faker";

export function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}
export function createRandomCompany() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}
console.log(
  faker.helpers.fake(
    "Hello {{person.prefix}} {{person.lastName}}, how are you today?"
  )
);

import inquirer from "inquirer";
const questions = [
  {
    type: "list",
    name: "dataType",
    message: "What type of data would you like to generate?",
    choices: ["User Profile", "Company Info", "Product Details"],
  },
  {
    type: "number",
    name: "count",
    message: "How many entries would you like?",
    default: 1,
  },
];
inquirer
  .prompt(questions)
  .then((answers) => {
    if (answers.dataType == "User Profile") {
      const result = Array(answers.count)
        .fill()
        .map(() => {
          return createRandomUser();
        });
      console.log(result);
    } else if (answers.dataType == "Company Info") {
      const result = Array(answers.count)
        .fill()
        .map(() => {
          return createRandomCompany();
        });
      console.log(result);
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

console.log();
