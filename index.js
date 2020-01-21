function countingValleys(n, s) {
let sum = 0
let count = 0

  for (let i=0; i < n; i++){
    if (s[i] === "U"){
      if (++sum == 0) count++
    } 
    else (s[i] === "D") sum--
  }

  return count
}