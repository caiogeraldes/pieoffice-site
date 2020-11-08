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


    input = input.replace(/1(\d\d\d\d)/g, "𐄫$1");
    input = input.replace(/2(\d\d\d\d)/g, "𐄬$1");
    input = input.replace(/3(\d\d\d\d)/g, "𐄭$1");
    input = input.replace(/4(\d\d\d\d)/g, "𐄮$1");
    input = input.replace(/5(\d\d\d\d)/g, "𐄯$1");
    input = input.replace(/6(\d\d\d\d)/g, "𐄰$1");
    input = input.replace(/7(\d\d\d\d)/g, "𐄱$1");
    input = input.replace(/8(\d\d\d\d)/g, "𐄲$1");
    input = input.replace(/9(\d\d\d\d)/g, "𐄳$1");

    input = input.replace(/1(\d\d\d)/g, "𐄢$1");
    input = input.replace(/2(\d\d\d)/g, "𐄣$1");
    input = input.replace(/3(\d\d\d)/g, "𐄤$1");
    input = input.replace(/4(\d\d\d)/g, "𐄥$1");
    input = input.replace(/5(\d\d\d)/g, "𐄦$1");
    input = input.replace(/6(\d\d\d)/g, "𐄧$1");
    input = input.replace(/7(\d\d\d)/g, "𐄨$1");
    input = input.replace(/8(\d\d\d)/g, "𐄩$1");
    input = input.replace(/9(\d\d\d)/g, "𐄪$1");
    
    input = input.replace(/1(\d\d)/g, "𐄙$1");
    input = input.replace(/2(\d\d)/g, "𐄚$1");
    input = input.replace(/3(\d\d)/g, "𐄛$1");
    input = input.replace(/4(\d\d)/g, "𐄜$1");
    input = input.replace(/5(\d\d)/g, "𐄝$1");
    input = input.replace(/6(\d\d)/g, "𐄞$1");
    input = input.replace(/7(\d\d)/g, "𐄟$1");
    input = input.replace(/8(\d\d)/g, "𐄠$1");
    input = input.replace(/9(\d\d)/g, "𐄡$1");

    input = input.replace(/1(\d)/g, "𐄐$1");
    input = input.replace(/2(\d)/g, "𐄑$1");
    input = input.replace(/3(\d)/g, "𐄒$1");
    input = input.replace(/4(\d)/g, "𐄓$1");
    input = input.replace(/5(\d)/g, "𐄔$1");
    input = input.replace(/6(\d)/g, "𐄕$1");
    input = input.replace(/7(\d)/g, "𐄖$1");
    input = input.replace(/8(\d)/g, "𐄗$1");
    input = input.replace(/9(\d)/g, "𐄘$1");

    input = input.replace(/0/g, "");

    input = input.replace(/1/g, "𐄇");
    input = input.replace(/2/g, "𐄈");
    input = input.replace(/3/g, "𐄉");
    input = input.replace(/4/g, "𐄊");
    input = input.replace(/5/g, "𐄋");
    input = input.replace(/6/g, "𐄌");
    input = input.replace(/7/g, "𐄍");
    input = input.replace(/8/g, "𐄎");
    input = input.replace(/9/g, "𐄏");

    return input;
}

export default cypriot;
