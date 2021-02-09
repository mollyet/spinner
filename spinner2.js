const spinner = ["\r|  ", "\r/  ", "\r-  ", "\r\\  ", "\r|  ", "\r/  ", "\r-  ", "\r\\  ", "\r|  "];

let delay = 100
for(const stage of spinner){
  setTimeout(() => {
    process.stdout.write(stage);
  }, delay);
  delay += 200
}