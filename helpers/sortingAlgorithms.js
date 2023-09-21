class sortingAlgorithm{
    constructor({swapBars}){
        this.swapBars = swapBars;
    }
    bubblesort(array){
        const swaps =[]
        for(let i =0 ; i<array.length; i++){

            //last i element are already in place
            for (let j = 0; j < array.length - i-1; j++) {
                //checking if the item at present iteration is greather than the next iteration
                if (array[j]> array[j+1]) {
                    //if the condition is true, swap them
                    let temp = array[j]
                    array[j] = array[j+1]
                    array[j+1] = temp
                    swaps.push({firstPosition: j, lastPosition: j+1})

                }
                
            }
        }
        return swaps
    }
}