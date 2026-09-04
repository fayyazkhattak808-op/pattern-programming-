let n = 3
let ch = 65
for(let i=1;i<=n;i++){
    let line  = ""
    for(let j=1;j<=n; j++){
        line += String.fromCharCode(ch) + " "
        ch++
    }
    console.log(line)
}