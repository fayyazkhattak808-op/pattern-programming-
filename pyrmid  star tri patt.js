let n = 4

for(let i = 0; i < n; i++){

    let line = ""

    // spaces
    for(let s = 0; s < n-i-1; s++){
        line += " "
    }

    // numbers
    for(let j = 0; j < 2*i+1; j++){
        line += "*"
    }

    console.log(line)
}