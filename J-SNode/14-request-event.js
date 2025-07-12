  const EvenEmitter = require('events');

  const customeEmmiter = new EvenEmitter();

  customeEmmiter.on('response', () => {
    console.log(`data received `);
  });
  customeEmmiter.on('response', ( name , id) => {
    console.log(`some other logic here ${name} with id ${id}`);
  });
//   customeEmmiter.on('shahid', () => {
//     console.log(`some other logic here `);
//   });

  customeEmmiter.emit('response',
    'shahid',
    34
  );
//   customeEmmiter.emit('shahid');/