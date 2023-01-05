const amount = 9;
if (amount < 10 ){
    console.log('small number');
}else{
    console.log('large number');
}
console.log('first node app!');


setInterval(() => {
    console.log('hello world')
 }, 1000)
 // Globals - no window!!!

// __dirname - path to current directory
// __filename - file name 
// require  - function to use modules (common js )
// module - info about current module (file)
// process - info about  env where the program is being executed 