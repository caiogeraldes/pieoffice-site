const cypriot = (input) => {
    input = input.replace(/-/g,"")

    input = input.replace(/wa/g, "𐠲")
    input = input.replace(/we/g, "𐠳")
    input = input.replace(/wi/g, "𐠴")
    input = input.replace(/wo/g, "𐠵")
    input = input.replace(/za/g, "𐠼")
    input = input.replace(/zo/g, "𐠿")
    input = input.replace(/ja/g, "𐠅")
    input = input.replace(/jo/g, "𐠈")
    input = input.replace(/ka/g, "𐠊")
    input = input.replace(/ke/g, "𐠋")
    input = input.replace(/ki/g, "𐠌")
    input = input.replace(/ko/g, "𐠍")
    input = input.replace(/ku/g, "𐠎")
    input = input.replace(/la/g, "𐠏")
    input = input.replace(/le/g, "𐠐")
    input = input.replace(/li/g, "𐠑")
    input = input.replace(/lo/g, "𐠒")
    input = input.replace(/lu/g, "𐠓")
    input = input.replace(/ma/g, "𐠔")
    input = input.replace(/me/g, "𐠕")
    input = input.replace(/mi/g, "𐠖")
    input = input.replace(/mo/g, "𐠗")
    input = input.replace(/mu/g, "𐠘")
    input = input.replace(/na/g, "𐠙")
    input = input.replace(/ne/g, "𐠚")
    input = input.replace(/ni/g, "𐠛")
    input = input.replace(/no/g, "𐠜")
    input = input.replace(/nu/g, "𐠝")
    input = input.replace(/ksa/g, "𐠷")
    input = input.replace(/kse/g, "𐠸")
    input = input.replace(/pa/g, "𐠞")
    input = input.replace(/pe/g, "𐠟")
    input = input.replace(/pi/g, "𐠠")
    input = input.replace(/po/g, "𐠡")
    input = input.replace(/pu/g, "𐠢")
    input = input.replace(/ra/g, "𐠣")
    input = input.replace(/re/g, "𐠤")
    input = input.replace(/ri/g, "𐠥")
    input = input.replace(/ro/g, "𐠦")
    input = input.replace(/ru/g, "𐠧")
    input = input.replace(/sa/g, "𐠨")
    input = input.replace(/se/g, "𐠩")
    input = input.replace(/si/g, "𐠪")
    input = input.replace(/so/g, "𐠫")
    input = input.replace(/su/g, "𐠬")
    input = input.replace(/ta/g, "𐠭")
    input = input.replace(/te/g, "𐠮")
    input = input.replace(/ti/g, "𐠯")
    input = input.replace(/to/g, "𐠰")
    input = input.replace(/tu/g, "𐠱")
    input = input.replace(/a/g, "𐠀")
    input = input.replace(/e/g, "𐠁")
    input = input.replace(/i/g, "𐠂")
    input = input.replace(/o/g, "𐠃")
    input = input.replace(/u/g, "𐠄")

    input = input.replace(/V/g, "𐄾")
    input = input.replace(/M/g, "𐄸")
    input = input.replace(/N/g, "𐄹")
    input = input.replace(/T/g, "𐄼")
    input = input.replace(/P/g, "𐄺")
    input = input.replace(/Q/g, "𐄻")
    input = input.replace(/L/g, "𐄷")
    input = input.replace(/S/g, "𐄽")
    input = input.replace(/Z/g, "𐄿")

    return input;
}

export default cypriot;
