function hk_deva(input){
    input = hkUdToHkAnu(input);
    input = " " + input;
    input = input.replace(/([ ^])ai/g,  "$1ऐ");
    input = input.replace(/([ ^])au/g,  "$1औ");
    input = input.replace(/([ ^])a/g,   "$1अ");
    input = input.replace(/([ ^])A/g,   "$1आ");
    input = input.replace(/([ ^])i/g,   "$1इ");
    input = input.replace(/([ ^])I/g,   "$1ई");
    input = input.replace(/([ ^])u/g,   "$1उ");
    input = input.replace(/([ ^])U/g,   "$1ऊ");
    input = input.replace(/([ ^])e/g,   "$1ए");
    input = input.replace(/([ ^])o/g,   "$1ओ");
    input = input.replace(/([ ^])lR/g,  "$1लृ");
    input = input.replace(/([ ^])lRR/g, "$1लॄ");
    input = input.replace(/([ ^])RR/g,  "$1ॠ");
    input = input.replace(/([ ^])R/g,   "$1ऋ");
    input = input.replace(/ai/g,        "V ै");
    input = input.replace(/au/g,        "V ौ");
    input = input.replace(/a/g,         "V ");
    input = input.replace(/A/g,         "V ा");
    input = input.replace(/i/g,         "V ि");
    input = input.replace(/I/g,         "V ी");
    input = input.replace(/u/g,         "V ु");
    input = input.replace(/U/g,         "V ू");
    input = input.replace(/e/g,         "V े");
    input = input.replace(/o/g,         "V ो");
    input = input.replace(/lRR/g,       "V ॣ");
    input = input.replace(/lR/g,        "V ॢ");
    input = input.replace(/RR/g,        "V ॄ");
    input = input.replace(/R/g,         "V ृ");
    input = input.replace(/khV /g,      "ख");
    input = input.replace(/ghV /g,      "घ");
    input = input.replace(/chV /g,      "छ");
    input = input.replace(/jhV /g,      "झ");
    input = input.replace(/ThV /g,      "ठ");
    input = input.replace(/DhV /g,      "ढ");
    input = input.replace(/thV /g,      "थ");
    input = input.replace(/dhV /g,      "ध");
    input = input.replace(/phV /g,      "फ");
    input = input.replace(/bhV /g,      "भ");
    input = input.replace(/kV /g,       "क");
    input = input.replace(/gV /g,       "ग");
    input = input.replace(/GV /g,       "ङ");
    input = input.replace(/cV /g,       "च");
    input = input.replace(/jV /g,       "ज");
    input = input.replace(/JV /g,       "ञ");
    input = input.replace(/TV /g,       "ट");
    input = input.replace(/DV /g,       "ड");
    input = input.replace(/NV /g,       "ण");
    input = input.replace(/tV /g,       "त");
    input = input.replace(/dV /g,       "द");
    input = input.replace(/nV /g,       "न");
    input = input.replace(/pV /g,       "प");
    input = input.replace(/bV /g,       "ब");
    input = input.replace(/mV /g,       "म");
    input = input.replace(/yV /g,       "य");
    input = input.replace(/rV /g,       "र");
    input = input.replace(/lV /g,       "ल");
    input = input.replace(/vV /g,       "व");
    input = input.replace(/zV /g,       "श");
    input = input.replace(/SV /g,       "ष");
    input = input.replace(/sV /g,       "स");
    input = input.replace(/LLV /g,      "ऴ");
    input = input.replace(/LV /g,       "ळ");
    input = input.replace(/hV /g,       "ह");
    input = input.replace(/kh/g,      "ख्");
    input = input.replace(/gh/g,      "घ्");
    input = input.replace(/ch/g,      "छ्");
    input = input.replace(/jh/g,      "झ्");
    input = input.replace(/Th/g,      "ठ्");
    input = input.replace(/Dh/g,      "ढ्");
    input = input.replace(/th/g,      "थ्");
    input = input.replace(/dh/g,      "ध्");
    input = input.replace(/ph/g,      "फ्");
    input = input.replace(/bh/g,      "भ्");
    input = input.replace(/k/g,       "क्");
    input = input.replace(/g/g,       "ग्");
    input = input.replace(/G/g,       "ङ्");
    input = input.replace(/c/g,       "च्");
    input = input.replace(/j/g,       "ज्");
    input = input.replace(/J/g,       "ञ्");
    input = input.replace(/T/g,       "ट्");
    input = input.replace(/D/g,       "ड्");
    input = input.replace(/N/g,       "ण्");
    input = input.replace(/t/g,       "त्");
    input = input.replace(/d/g,       "द्");
    input = input.replace(/n/g,       "न्");
    input = input.replace(/p/g,       "प्");
    input = input.replace(/b/g,       "ब्");
    input = input.replace(/m/g,       "म्");
    input = input.replace(/y/g,       "य्");
    input = input.replace(/r/g,       "र्");
    input = input.replace(/l/g,       "ल्");
    input = input.replace(/v/g,       "व्");
    input = input.replace(/z/g,       "श्");
    input = input.replace(/S/g,       "ष्");
    input = input.replace(/s/g,       "स्");
    input = input.replace(/LL/g,      "ऴ्");
    input = input.replace(/L/g,       "ळ्");
    input = input.replace(/h/g,       "ह्");

    input = input.replace(/M/g,         "ं");
    input = input.replace(/H/g,         "ः");
    input = input.replace(/\\/g,        "॑");
    input = input.replace(/=/g,         "॒");
    input = input.replace(/&/g,         "ँ");
    input = input.replace(/'/g,         "ऽ");

    input = input.replace(/V /g, " ");

    input = input.replace(/1/g,         "१");
    input = input.replace(/2/g,         "२");
    input = input.replace(/3/g,         "३");
    input = input.replace(/4/g,         "४");
    input = input.replace(/5/g,         "५");
    input = input.replace(/6/g,         "६");
    input = input.replace(/7/g,         "७");
    input = input.replace(/8/g,         "८");
    input = input.replace(/9/g,         "९");
    input = input.replace(/0/g,         "०");

    input = input.replace(/\|\|/g,      "॥");
    input = input.replace(/\|/g,        "।");

    // fixing silliness
    input = input.replace(/(\u094d)[\u0951\u0952]$/g, "$1");
    input = input.replace(/\/[\u0951\u0952]/g, "");
    input = input.replace(/^ /g, "");

	return input;
}


function hk_iast(input) {
    input = input.replace(/A/g,         "ā");
    input = input.replace(/I/g,         "ī");
    input = input.replace(/U/g,         "ū");
    input = input.replace(/lRR/g,       "l̥̄");
    input = input.replace(/lR/g,        "l̥");
    input = input.replace(/RR/g,        "r̥̄");
    input = input.replace(/R/g,         "r̥");
    input = input.replace(/T/g,      "ṭ");
    input = input.replace(/D/g,      "ḍ");
    input = input.replace(/G/g,       "ṅ");
    input = input.replace(/J/g,       "ñ");
    input = input.replace(/N/g,       "ṇ");
    input = input.replace(/z/g,       "ś");
    input = input.replace(/S/g,       "ṣ");
    input = input.replace(/L/g,       "ḷ");

    input = input.replace(/MM/g,         "ṁ");
    input = input.replace(/M/g,         "ṃ");
    input = input.replace(/H/g,         "ḥ");
    input = input.replace(/\//g,        "́");
    input = input.replace(/\\/g,        "̀");
    input = input.replace(/&/g,         "m̐");


    return input;
}


function hkUdToHkAnu (hkUdStr) {
    var hkSyllab = hkToSyllables(hkUdStr);
    const hkAcc = hkAccentuation(hkSyllab);

    hkSyllab = hkSyllab.split(".");
    const hkAnuAcc = udToAnu(hkAcc).split("");


    const hkAnuStr = hkSyllab.map(function (value, index) {
        if (hkAnuAcc[index] === "A") {
            return value +"=";
        } else if (hkAnuAcc[index] === "S") {
            return value + "\\";
        } else {
            return value.replace(/\//g, "");
        }
    })

    return hkAnuStr.join("");
}

function udToAnu (udStr) {
    // Converts a string of udatta marked syllables to
    // an anudatta marked one. Notation:
    // U = udatta
    // A = anudatta
    // S = svarita
    // B = unmarked in udatta notation
    // D = unmarked in anudatta notation
    //
    // Example:
    // udToAnu('BBUBBUUB') => // AADSADDS

    var anuStr = udStr;

    anuStr = anuStr.replace(/BU/g,        "AU");
    anuStr = anuStr.replace(/UB/g,        "US");
    anuStr = anuStr.replace(/U/g,         "D");

    while (anuStr.includes("BA") || anuStr.includes("BD")) {
        anuStr = anuStr.replace(/^(B*)[BD](A)/g, "$1A$2");
        anuStr = anuStr.replace(/\n(B*)[BD](A)/g, "$1A$2");
        anuStr = anuStr.replace(/([ADSB])B([AD])/g, "$1D$2");
        anuStr = anuStr.replace(/B$/g,        "D");
    }
    return anuStr;
}

function hkToSyllables (hkStr) {
    var hkSyllab = hkStr;
    hkSyllab = hkSyllab.replace(/([aeiouAEIOUR])/g, "$1.");
    hkSyllab = hkSyllab.replace(/a\.([ui])\./,      "a$1.");
    hkSyllab = hkSyllab.replace(/\.\//g,            "/.");
    hkSyllab = hkSyllab.replace(/\.([HM&])/g,        "$1.");
    hkSyllab = hkSyllab.replace(/R\.R/g,            "RR");

    hkSyllab = hkSyllab.replace(/\.$/g,             "");

    return hkSyllab;
}

function hkAccentuation (hkSyllab) {
    var hkAcc = hkSyllab.split(".");

    hkAcc = hkAcc.map(val => val.includes("/") ? "U" : "B");
    return hkAcc.join("");
}

export { hk_deva, hk_iast };
