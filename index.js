// Code your solutions in this file
//   const gifts = ["teddy bear", "drone", "doll"];
//   function wrapGifts(gifts) {
//     for (let i=0; i<gifts.length; i++) {
//         console.log(`wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }

//     return gifts;
//   }

//   wrapGifts(gifts);


  const names = ["Guadalupe", "Ollie", "Aki"]
  let event = "graduation"

  function writeCards(names, event) {
    const messages = [];
    for (let i=0; i<names.length; i++) {
        console.log(`Thank you ${names[i]} for the wonderful ${event} gift!`);
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }

    return messages;
  }

  writeCards(names, event)

  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }

  countDown(10)