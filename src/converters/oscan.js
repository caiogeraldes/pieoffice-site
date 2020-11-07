const oscan = (input) => {
    input = input.replace(/a/g,"𐌀")
    input = input.replace(/b/g,"𐌁")
    input = input.replace(/g/g,"𐌂")
    input = input.replace(/k/g,"𐌂")
    input = input.replace(/d/g,"𐌃")
    input = input.replace(/e/g,"𐌄")
    input = input.replace(/v/g,"𐌅")
    input = input.replace(/z/g,"𐌆")
    input = input.replace(/h/g,"𐌇")
    input = input.replace(/i/g,"𐌉")
    input = input.replace(/l/g,"𐌋")
    input = input.replace(/m/g,"𐌌")
    input = input.replace(/n/g,"𐌍")
    input = input.replace(/p/g,"𐌐")
    input = input.replace(/ś/g,"𐌑")
    input = input.replace(/r/g,"𐌓")
    input = input.replace(/s/g,"𐌔")
    input = input.replace(/t/g,"𐌕")
    input = input.replace(/u/g,"𐌖")
    input = input.replace(/f/g,"𐌚")
    input = input.replace(/ú/g,"𐌞")
    input = input.replace(/í/g,"𐌝")
    return input

}

export default oscan;
