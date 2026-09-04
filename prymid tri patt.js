let n = 4
for(let i=1;i<=n;i++){
    let line  = ""
    for(let s=1;s<=n-i;s++){
        line += " "
    }
    for(let j=1;j<=i;j++){
        line += j
    }
    for(let j=i-1;j>=1;j--){
        line += j
    }
    console.log(line)
}