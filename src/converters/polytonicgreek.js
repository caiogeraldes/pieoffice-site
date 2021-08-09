const polygreek = (input) => {
    // Reordering diacritics
    // Bringing breathings and diairesis first, then accents, then subscript iota
    input = input.replace(/([\\/=])(\|)?([()+])?/g,   "$3$1$2");

    input = input.replace(/S|\*s/g,     "Σ");
    input = input.replace(/B|\*b/g,     "Β");
    input = input.replace(/G|\*g/g,     "Γ");
    input = input.replace(/D|\*d/g,     "Δ");
    input = input.replace(/Z|\*z/g,     "Ζ");
    input = input.replace(/Q|\*q/g,     "Θ");
    input = input.replace(/K|\*k/g,     "Κ");
    input = input.replace(/L|\*l/g,     "Λ");
    input = input.replace(/M|\*m/g,     "Μ");
    input = input.replace(/N|\*n/g,     "Ν");
    input = input.replace(/J|\*j/g,     "Ξ");
    input = input.replace(/P|\*p/g,     "Π");
    input = input.replace(/R|\*r/g,     "Ρ");
    input = input.replace(/T|\*t/g,     "Τ");
    input = input.replace(/C|\*c/g,     "Ψ");
    input = input.replace(/X|\*x/g,     "Χ");
    input = input.replace(/F|\*f/g,     "Φ");
    input = input.replace(/A|\*a/g,     "Α");
    input = input.replace(/E|\*e/g,     "Ε");
    input = input.replace(/H|\*h/g,     "Η");
    input = input.replace(/I|\*i/g,     "Ι");
    input = input.replace(/O|\*o/g,     "Ο");
    input = input.replace(/U|\*u/g,     "Υ");
    input = input.replace(/W|\*w/g,     "Ω");

    input = input.replace(/s /g,    "ς ");
    input = input.replace(/s/g,     "σ");
    input = input.replace(/b/g,     "β");
    input = input.replace(/g/g,     "γ");
    input = input.replace(/d/g,     "δ");
    input = input.replace(/z/g,     "ζ");
    input = input.replace(/q/g,     "θ");
    input = input.replace(/k/g,     "κ");
    input = input.replace(/l/g,     "λ");
    input = input.replace(/m/g,     "μ");
    input = input.replace(/n/g,     "ν");
    input = input.replace(/j/g,     "ξ");
    input = input.replace(/p/g,     "π");
    input = input.replace(/t/g,     "τ");
    input = input.replace(/c/g,     "ψ");
    input = input.replace(/x/g,     "χ");
    input = input.replace(/f/g,     "φ");
    input = input.replace(/r/g,     "ρ");
    input = input.replace(/a/g,     "α");
    input = input.replace(/e/g,     "ε");
    input = input.replace(/h/g,     "η");
    input = input.replace(/i/g,     "ι");
    input = input.replace(/o/g,     "ο");
    input = input.replace(/u/g,     "υ");
    input = input.replace(/w/g,     "ω");

    // others
    // lunate sigma
    input = input.replace(/σ3/g,    "\u03f2");
    input = input.replace(/Σ3/g,    "\u03f9");
    // fixed σ
    input = input.replace(/σ2/g,    "σ");
    // koppa
    input = input.replace(/\*#2/g, "\u03de");
    input = input.replace(/#2/g,   "\u03df");
    // koppa (archaic)
    input = input.replace(/\*#3/g, "\u03d8");
    input = input.replace(/#3/g,   "\u03d9");
    //sampi
    input = input.replace(/\*#4/g, "\u03e0");
    input = input.replace(/#4/g,   "\u03e1");

    // Diacritics
    // breathings
    input = input.replace(/\)/g,    "\u0313");
    input = input.replace(/\(/g,    "\u0314");
    input = input.replace(/\+/g,    "\u0308");
    // accents
    input = input.replace(/\\/g,    "\u0300");
    input = input.replace(/\//g,    "\u0301");
    input = input.replace(/=/g,     "\u0342");
    // subscript iota
    input = input.replace(/\|/g,    "\u0345");
    // dot below
    input = input.replace(/\?/g,    "\u0323");
    // breve
    input = input.replace(/%27/g,  "\u0306");
    // longa / macron
    input = input.replace(/%26/g,  "\u0304");

    // Punctuation
    // middle dot
    input = input.replace(/:/g,     "\u00b7");
    input = input.replace(/'/g,     "\u02bc");

    return input;
}

export default polygreek
