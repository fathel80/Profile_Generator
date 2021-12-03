let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("What's your name? ", (answer1) => {
  rl.question("Where are you from? ", (anwser2) => {
    rl.question("what are your goals? ", (answer3) => {
      rl.question("what is your favorite programming language ", (answer4) => {
        rl.question("how long have you been coding? ", (answer5) => {
          rl.question("Tell us a quirky fact about yourself ", (answer6) => {
            rl.question(`My name is Fathel Mohamud ${answer1}. ${answer1} I'm from Toronto ${anwser2}, ${answer1} to finish this bootcamp and continue to progress into a SR developer ${answer3}. ${answer1} My favorite language is slowly becoming Javascript ${answer4}. ${answer1} I have been coding for a little over two months now ${answer5}. And lastly... ${answer1} a quirky fact is im unfortunatly an Atlanta Falcon fan ${answer6}`);
          })
        })
      })
    })
  })
})