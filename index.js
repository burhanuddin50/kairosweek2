const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost/burhankart');
}
const kittySchema = new mongoose.Schema({
  name: String
});
kittySchema.methods.speak =  function speak() {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
};
const Kitten = mongoose.model('Kitten', kittySchema);
const silence = new Kitten({ name: 'Sil' });
console.log(silence.name); 
const fluffy = new Kitten({ name: 'fluffy' });
fluffy.save(function (err,fluffy){
  if(err) return console.error(err);
  fluffy.speak();
});
Kitten.find({name:'fluffy'},function (err,kittens){
  if(err) return console.error(err);
  console.log(kittens);
});
