module.exports = function reverse (n) {
    if(n > 0){
        return Number(n.toString().split("").reverse().join(""))
      }else if(n < 0){
        let b = n*(-1)
        return Number(b.toString().split("").reverse().join(""))
      }
}
