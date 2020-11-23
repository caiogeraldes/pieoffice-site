const hittite = (input) => {
    // Special det
    input = input.replace(/'d/g,   "𒀭");
    input = input.replace(/'m/g,   "𒁹");

    // Akkado- and Sumerograms
    input = input.replace(/RÙ/g,   "𒀸");
    input = input.replace(/ABI/g,   "𒀀𒁉");
    input = input.replace(/ABU/g,   "𒀀𒁍");
    input = input.replace(/BAT/g,   "𒁁");
    input = input.replace(/BI/g,   "𒁉");
    input = input.replace(/DINGIR/g,   "𒀭");
    input = input.replace(/DUMU/g,   "𒌉");
    input = input.replace(/DU/g,   "𒆕");
    input = input.replace(/EGIR/g,   "𒂕");
    input = input.replace(/GAL/g,   "𒃲");
    input = input.replace(/GISH/g,   "𒄑");
    input = input.replace(/GURUSH/g,   "𒆗");
    input = input.replace(/GU/g,   "𒄖");
    input = input.replace(/HI/g,   "𒄭");
    input = input.replace(/IA/g,   "𒅀");
    input = input.replace(/IM/g,   "𒅎");
    input = input.replace(/ISH/g,   "𒄑");
    input = input.replace(/ISKUR/g,   "𒅎");
    input = input.replace(/KUR/g,   "𒆳");
    input = input.replace(/KÚR/g,   "𒉽");
    input = input.replace(/LIM/g,   "𒅆");
    input = input.replace(/LUGAL/g,   "𒈗");
    input = input.replace(/LÚ/g,   "𒇽");
    input = input.replace(/MA/g,   "𒈠");
    input = input.replace(/MESH/g,   "𒈩");
    input = input.replace(/QÍ/g,   "𒆠");
    input = input.replace(/SAG/g,   "𒊕");
    input = input.replace(/SHESH/g,   "𒋀");
    input = input.replace(/SHU/g,   "𒋗");
    input = input.replace(/SI/g,   "𒅆 ");
    input = input.replace(/UL/g,   "𒌌");
    input = input.replace(/URU/g,   "𒌷");
    input = input.replace(/UR/g,   "𒌨");
    input = input.replace(/ZAG/g,   "𒍠");
    input = input.replace(/ZA/g,   "𒍝");
    input = input.replace(/Ú/g,   "𒌋");
    input = input.replace(/BAL/g,   "𒁄");
    input = input.replace(/BE/g,   "𒁁");
    input = input.replace(/ÚS/g,   "𒁁");
    input = input.replace(/ÌR/g,    "𒀴");
    input = input.replace(/ARAD/g,    "𒀴");
    input = input.replace(/MUSEN/g,   "𒄷");
    input = input.replace(/SE12/g,  "𒈺");



    // Triple letters
    input = input.replace(/har/g,   "𒄯");
    input = input.replace(/kán/g,   "𒃷");
    input = input.replace(/mur/g,   "𒄯");
    input = input.replace(/pát/g,   "𒁁");
    input = input.replace(/pár/g,   "𒁇");
    input = input.replace(/mas/g,   "𒁇");
    input = input.replace(/sir/g,   "𒋓");
    input = input.replace(/tar/g,   "𒋻");
    input = input.replace(/ták/g,   "𒁖");
    input = input.replace(/ser/g,   "𒋓");
    input = input.replace(/ker/g,   "𒄫");
    input = input.replace(/kas/g,   "𒁉");
    input = input.replace(/kat/g,   "𒃰");
    input = input.replace(/hal/g,   "𒄬");
    input = input.replace(/pal/g,   "𒁄");
    input = input.replace(/ka4/g,   "𒋡");

    // Double letters
    input = input.replace(/qa/g,   "𒋡");
    input = input.replace(/ah/g,   "𒄴");
    input = input.replace(/ak/g,   "𒀝");
    input = input.replace(/an/g,   "𒀭");
    input = input.replace(/ar/g,   "𒅈");
    input = input.replace(/as/g,   "𒀸");
    input = input.replace(/at/g,   "𒀜");
    input = input.replace(/az/g,   "𒊍");
    input = input.replace(/da/g,   "𒁕");
    input = input.replace(/da/g,   "𒁕");
    input = input.replace(/di/g,   "𒁲");
    input = input.replace(/er/g,   "𒅕");
    input = input.replace(/es/g,   "𒌍");
    input = input.replace(/et/g,   "𒀉");
    input = input.replace(/ga/g,   "𒂵");
    input = input.replace(/ha/g,   "𒄩");
    input = input.replace(/he/g,   "𒄭");
    input = input.replace(/hi/g,   "𒄭");
    input = input.replace(/hu/g,   "𒄷");
    input = input.replace(/ia/g,   "𒅀");
    input = input.replace(/ik/g,   "𒅅");
    input = input.replace(/ir/g,   "𒅕");
    input = input.replace(/is/g,   "𒅖");
    input = input.replace(/it/g,   "𒀉");
    input = input.replace(/ka/g,   "𒅗");
    input = input.replace(/ke/g,   "𒆠");
    input = input.replace(/ki/g,   "𒆠");
    input = input.replace(/ku/g,   "𒆪");
    input = input.replace(/la/g,   "𒆷");
    input = input.replace(/li/g,   "𒇷");
    input = input.replace(/lu/g,   "𒇻");
    input = input.replace(/lu/g,   "𒇻");
    input = input.replace(/ma/g,   "𒈠");
    input = input.replace(/me/g,   "𒈨");
    input = input.replace(/mi/g,   "𒈪");
    input = input.replace(/mu/g,   "𒈬");
    input = input.replace(/na/g,   "𒈾");
    input = input.replace(/ne/g,   "𒉈");
    input = input.replace(/ni/g,   "𒉌");
    input = input.replace(/nu/g,   "𒉡");
    input = input.replace(/pa/g,   "𒉺");
    input = input.replace(/pa/g,   "𒉺");
    input = input.replace(/pi2/g,   "𒁉");
    input = input.replace(/pí/g,   "𒁉");
    input = input.replace(/ra/g,   "𒊏");
    input = input.replace(/ri/g,   "𒊑");
    input = input.replace(/ru/g,   "𒊒");
    input = input.replace(/sa/g,   "𒊓");
    input = input.replace(/si/g,   "𒅆 ");
    input = input.replace(/su/g,   "𒋗");
    input = input.replace(/ta/g,   "𒋫");
    input = input.replace(/te/g,   "𒋼");
    input = input.replace(/ti/g,   "𒋾");
    input = input.replace(/tu/g,   "𒌅");
    input = input.replace(/un/g,   "𒌦");
    input = input.replace(/up/g,   "𒌒");
    input = input.replace(/us/g,   "𒍑");
    input = input.replace(/wa/g,   "𒉿");
    input = input.replace(/wa/g,   "𒉿");
    input = input.replace(/wi5/g,   "𒃾");
    input = input.replace(/za/g,   "𒍝");
    input = input.replace(/zi/g,   "𒍣");
    input = input.replace(/zé/g,   "𒍢");

    // Single letters
    input = input.replace(/a/g,      "𒀀");
    input = input.replace(/e/g,   "𒂊");
    input = input.replace(/i/g,   "𒄿");
    input = input.replace(/ú/g,   "𒌑");


    input = input.replace(/-/g, "");
    return input;
}

export default hittite;
