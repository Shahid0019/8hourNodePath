const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(result)
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile("./content/result-async.txt", `${first},${second}`,(err,reuslt)=>{
        if(err){
            console.log(err)
            return 
        }
        console.log(result)
    });
  });
});
 