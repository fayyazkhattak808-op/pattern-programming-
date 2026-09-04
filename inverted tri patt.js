let n = 5
for(let i=0;i<n;i++){
    let line = ""
    for(let s=0;s<i;s++){
        line += " "
    }
    for(let j=0;j<n-i;j++){
        line += i+1 
    }
    console.log(line)
}