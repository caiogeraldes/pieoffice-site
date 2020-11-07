const ogham = (input) => {

    input = input.replace(/,ear,/g, "ᚕ")
    input = input.replace(/,or,/g, "ᚖ")
    input = input.replace(/,uilleann,/g, "ᚗ")
    input = input.replace(/,ifin,/g, "ᚘ")
    input = input.replace(/,eam,/g, "ᚙ")
    input = input.replace(/,peith, /g, "ᚚ")

    input = input.replace(/b/g, "ᚁ")
    input = input.replace(/l/g, "ᚂ")
    input = input.replace(/w/g, "ᚃ")
    input = input.replace(/s/g, "ᚄ")
    input = input.replace(/n/g, "ᚅ")
    input = input.replace(/j/g, "ᚆ")
    input = input.replace(/h/g, "ᚆ")
    input = input.replace(/d/g, "ᚇ")
    input = input.replace(/t/g, "ᚈ")
    input = input.replace(/kw /g, "ᚊ")
    input = input.replace(/k/g, "ᚉ")
    input = input.replace(/cw /g, "ᚊ")
    input = input.replace(/c/g, "ᚉ")
    input = input.replace(/m/g, "ᚋ")
    input = input.replace(/gw /g, "ᚍ")
    input = input.replace(/g/g, "ᚌ")
    input = input.replace(/S/g, "ᚎ")
    input = input.replace(/r/g, "ᚏ")
    input = input.replace(/a/g, "ᚐ")
    input = input.replace(/o/g, "ᚑ")
    input = input.replace(/u/g, "ᚒ")
    input = input.replace(/e/g, "ᚓ")
    input = input.replace(/i/g, "ᚔ")
    input = input.replace(/>/g, "᚛")
    input = input.replace(/</g, "᚜")

    return input;
}

export default ogham;
