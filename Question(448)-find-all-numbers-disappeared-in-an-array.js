/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const uzunluk = nums.length
    const kucuktenBuyugeSiralama = nums.sort(function(a, b){return a - b});
    const kacaKadarGidecek = uzunluk === Math.max(...kucuktenBuyugeSiralama) ? kucuktenBuyugeSiralama[uzunluk-1] : uzunluk
    
    const eksikVeriler = []
    
    for(var i = 1; i <kacaKadarGidecek + 1; i++){
        const varMi = kucuktenBuyugeSiralama.find(j => j === i)
        if(varMi === undefined){
            eksikVeriler.push(i)
        }
    }
    return eksikVeriler
};