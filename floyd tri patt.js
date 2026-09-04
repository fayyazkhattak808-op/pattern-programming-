let n =5
 num = 1
for(let i=0;i<n;i++){
    let line = ""
    for( let j=0;j<i+1;j++){
        line +=  num + " "
        num++
    }
    console.log(line)
}