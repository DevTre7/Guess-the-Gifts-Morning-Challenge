const wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

const presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];


function guessGifts(wishlist, presents) {
    let guess = [];

    for(let i = 0; i < wishlist.length; i++) {
        for(let j = 0; j < presents.length; j++) {
            if(wishlist[i].clatters === presents[j].clatters && 
                wishlist[i].size === presents[j].size &&
                wishlist[i].weight === presents[j].weight) {
                    guess.push(wishlist[i].name);
                }
        }
    }

    return guess;
}