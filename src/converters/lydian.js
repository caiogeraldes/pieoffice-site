const lydian = (input) => {
    input = input.replace(/a/g, "𐤠")
    input = input.replace(/b/g, "𐤡")
    input = input.replace(/p/g, "𐤡")
    input = input.replace(/g/g, "𐤢")
    input = input.replace(/d/g, "𐤣")
    input = input.replace(/e/g, "𐤤")
    input = input.replace(/v/g, "𐤥")
    input = input.replace(/w/g, "𐤥")
    input = input.replace(/i/g, "𐤦")
    input = input.replace(/y/g, "𐤧")
    input = input.replace(/k/g, "𐤨")
    input = input.replace(/l/g, "𐤩")
    input = input.replace(/m/g, "𐤪")
    input = input.replace(/n/g, "𐤫")
    input = input.replace(/o/g, "𐤬")
    input = input.replace(/r/g, "𐤭")
    input = input.replace(/S/g, "𐤮")
    input = input.replace(/ś/g, "𐤮")
    input = input.replace(/t/g, "𐤯")
    input = input.replace(/u/g, "𐤰")
    input = input.replace(/f/g, "𐤱")
    input = input.replace(/q/g, "𐤲")
    input = input.replace(/s/g, "𐤳")
    input = input.replace(/sh/g,"𐤳")
    input = input.replace(/T/g, "𐤴")
    input = input.replace(/ã/g, "𐤵")
    input = input.replace(/A/g, "𐤵")
    input = input.replace(/ẽ/g, "𐤶")
    input = input.replace(/E/g, "𐤶")
    input = input.replace(/L/g, "𐤷")
    input = input.replace(/N/g, "𐤸")
    input = input.replace(/c/g, "𐤹")
    input = input.replace(/\./g, "")

    return input
}

export default lydian;
