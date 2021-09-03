# PIE Office (still on another platform)

[![Netlify Status](https://api.netlify.com/api/v1/badges/75abcf2a-931f-436a-a40b-7c1280777e49/deploy-status)](https://app.netlify.com/sites/pieoffice/deploys)

This is a simple web-browser app built for those who need or would like to type in the writings systems for ancient Indo-European languages.
This is actually the third implementation of the same program originally written as a command line utility, the [`pieoffice`](https://pypi.org/project/pieoffice/), followed by a GUI version, the [`pieoffice-gui`](https://pypi.org/project/pieoffice-gui).

The main converting engine is a node module of mine, so you could also use on your JS applications ([`pieoffice-js`](https://github/caiogeraldes/pieoffice-js)).

The project is currently stored [here](https://pieoffice.netlify.app/).

## Transliteration schemes

I still must find a way to implement the transliteration schemes in the webapp itself, this will probably come in a later and "final" version of it.
For now, I offer the following sections with the information needed, but I do think that the best thing possible is to check the files in `src/converters/`, since I might forget something.

### Proto-Indo-European

Follows closely the Harvard-Kyoto transliteration scheme for Sanskrit. Resonants are encoded as uppercase, accents as slashes. w' = w; k', g' = ḱ, ǵ.

### Polytonic Greek

Transliteration scheme based on [BETACODE](http://stephanus.tlg.uci.edu/encoding/BCM.pdf), including all the major diacritics (breathings, acute, grave, perispomenon and diairesis), breve and macron, koppa (including the archaic) and some bits and pieces.
The full support for betacode is still a work in progress.

### Linear B

Glyphs with known syllabic values should be written in lower-case, syllabically
and numbered if +2. Glyphs with known logographic values should be written in
upper-case. The only exception for said rule are the gendered logograms, which
should be followed without space by a f or m. Glyphs with unknown value should
be written with an asterisk followed by the number (2 or 3 digits).

This conversion scheme supports Aegean numbers and measurements.

> Example:\
> po-ro EQUf 120 --> 𐀡𐀫 𐂄 𐄙𐄑

### Cypriot Syllabary

|            |            |            |            |            |
|------------|------------|------------|------------|------------|
| a       𐠀 | e        𐠁 | i       𐠂 | o       𐠃 | u       𐠄 |
| wa      𐠲 | we       𐠳 | wi      𐠴 | wo      𐠵 |            |
| za/ga      𐠼 |            |            | zo      𐠿 |            |
| ja      𐠅 |            |            | jo      𐠈 |            |
| ka      𐠊 | ke       𐠋 | ki      𐠌 | ko      𐠍 | ku      𐠎 |
| la      𐠏 | le      𐠐 | li      𐠑 | lo      𐠒 | lu      𐠓 |
| ma      𐠔 | me      𐠕 | mi      𐠖 | mo      𐠗 | mu      𐠘 |
| na      𐠙 | ne      𐠚 | ni      𐠛 | no      𐠜 | nu      𐠝 |
| pa      𐠞 | pe      𐠟 | pi      𐠠 | po      𐠡 | pu      𐠢 |
| ra      𐠣 | re      𐠤 | ri      𐠥 | ro      𐠦 | ru      𐠧 |
| sa      𐠨 | se      𐠩 | si      𐠪 | so      𐠫 | su      𐠬 |
| ta      𐠭 | te      𐠮 | ti      𐠯 | to      𐠰 | tu      𐠱 |
| ksa     𐠷 | kse     𐠸 |            |            |            |

### Armenian

|               |          |            |          |       |
|---------------|----------|------------|----------|-------|
| a   ա         | b     բ  | g  գ       | d     դ  | e  ե  |
|               | z      զ | ee  է      | e'     ը | t'  թ |
| zh  ժ         | i     ի  | l  լ       | x     խ  | c  ծ  |
| k   կ         | h      հ | j  ձ       | g.     ղ | l.  ղ |
| ch. / c'h  ճ  | m      մ | y  յ       | n      ն | sh  շ |
| o   ո         | ch     չ | p  պ       | jh     ջ | r.  ռ |
| s          ս  | v     վ  | t        տ | r     ր  | c'  ց |
| w          ւ  | p'     փ | k'       ք | o'     օ | f   ֆ |
| u          ու | ew     և | ?        ՞ | .      ։ | .'  ՝ |
| ;          ՟  | ;'     ՛ | !        ՜ | ``     « | ''  » |
 
For the particulars of the transliteration schemes, see the article on [Wikipedia](https://en.wikipedia.org/wiki/Armenian_alphabet#Transliteration).


### Vedic / Sanskrit

Use the [Harvard-Kyoto](https://en.wikipedia.org/wiki/Harvard-Kyoto) encoding for
both outputs. Udatta (only for IAST), anudatta and svarita are assigned by `/`,
`=`, and ```\``` after the vowel (or vowel + M), but the script also converts
text marked with udatta to devanagari with anudatta and svarita notation (**BETA**).

### Avestan

|            |            |            |         |         |           |
|------------|------------|----------- |---------|---------|-----------|
| a   a   𐬀  | A   ā   𐬁  |  á   å  𐬂  | Á ā̊  𐬃  | ã  ą  𐬄 | ãã  ą̇   𐬅 |
| æ   ə   𐬆  | Æ   ə̄   𐬇  |  e   e  𐬈  | E ē  𐬉  | o  o  𐬊 | O   ō   𐬋 |
| i   i   𐬌  | I   ī   𐬍  |  u   u  𐬎  | U ū  𐬏  | k  k  𐬐 | x   x   𐬑 |
| X   x́   𐬒  | xw  xᵛ  𐬓  |  g   g  𐬔  | G ġ  𐬕  | gh γ  𐬖 | c   č   𐬗 |
| j   ǰ   𐬘  | t   t   𐬙  |  th  ϑ  𐬚  | d d  𐬛  | dh δ  𐬜 | T   t̰   𐬝 |
| p   p   𐬞  | f   f   𐬟  |  b   b  𐬠  | B β  𐬡  | ng ŋ  𐬢 | ngH ŋ́   𐬣 |
| ngW ŋ   𐬤  | n   n   𐬥  |  ñ   ń  𐬦  | N ṇ  𐬧  | m  m  𐬨 | M   m̨   𐬩 |
| Ẏ   ẏ   𐬪  | y   y   𐬫  |  v   v  𐬬  | r r  𐬭  | s  s  𐬯 | z   z   𐬰 |
| sh  š   𐬱  | zh  ž   𐬲  |  shy š́  𐬳  | S ṣ̌  𐬴  | h  h  𐬵 |           |

If you find it troublesome to type æ in your keyboard, try `Alt gr + a`, else try using ê.

### Old Persian Cuneiform

|       |       |       |       |       |       |       |
|--------|--------|--------|--------|--------|--------|---------|
| a    𐎠 | i    𐎡 | u    𐎢 | k    𐎣 | ku   𐎤 | x    𐎧 | xi   𐎧  |
| xu   𐎧 | g    𐎥 | gu   𐎦 | c    𐎨 | ç    𐏂 | j    𐎩 | ji   𐎪  |
| t    𐎫 | ti   𐎫 | tu   𐎬 | th   𐎰 | d    𐎭 | di   𐎮 | du   𐎯  |
| p    𐎱 | f    𐎳 | b    𐎲 | n    𐎴 | ni   𐎴 | nu   𐎵 | m    𐎶  |
| mi   𐎷 | mu   𐎸 | y    𐎹 | v    𐎺 | vi   𐎻 | r    𐎼 | ri   𐎽  |
| l    𐎾 | s    𐎿 | z    𐏀 | š    𐏁 | sh   𐏁 | h    𐏃 |         |
| ahuramazda1  𐏈 | ahuramazda2  𐏉 | ahuramazda3 𐏊  | | | | |
| xshayathia   𐏋 | dahyaus1     𐏌 | dahyaus2    𐏌  | | | | |
| baga         𐏎 | bumis        𐏏 |                | | | | |

### Gothic

|         |         |         |         |         |         |         |
|---------|---------|---------|---------|---------|---------|---------|
| a     𐌰 | b     𐌱 | g     𐌲 | d     𐌳 | e     𐌴 | q     𐌵 | z     𐌶 |
| h     𐌷 | th    𐌸 | i     𐌹 | k     𐌺 | l     𐌻 | m     𐌼 | n     𐌽 |
| j     𐌾 | u     𐌿 | p     𐍀 | q'    𐍁 | r     𐍂 | s     𐍃 | t     𐍄 |
| w     𐍅 | f     𐍆 | x     𐍇 | hw    𐍈 | o     𐍉 | z'    𐍊 |         |

### Hittite

I tried to keep the system as flexible as possible allowing diacritics (zá) and numerical typing (za2).
So far it only covers the signs used in Van den Hout's textbook, with many issues concerning the fonts which employ workarounds to cover the Unicode chart's shortcomings.
If you use either HPM or Ullikummi font it should be properly displayed, even if not in the browser.
I strongly recommend to check the file at `src/converters` if you can not figure out how to type a value, I'm manually including the HZL numbers for future proofing.
Please feel free to report any inconsistencies.

The rules for 10 𔗁, 100 𔗃, and 1000 𔗄 are currently unavailable. If necessary, use the forms DECEM, CENTUM and MILLE for them.

Example:

> input:
> [ UM-MA 'd-UTU]-SI 'm-mur-si-li LUGAL-GAL LUGAL KUR ha-at-ti UR-SAG
> [ DUMU 'm-su-up-]pí-lu-li-u-ma LUGAL-GAL UR-SAG
> ku-it-ma-an-za-kán ANA GIS-GU-ZA ABI-IA na-[wi5] e-es-ha-at nu-mu a-ra-as-zé-na-as
> KUR-KUR-MES LÚ-KÚR hu-u-ma-an-te-es ku-u-ru-ri-ia-ah-he-er nu-za ABU-IA ku-wa-pí DINGIR-LIM-is DÙ-at
> 'm-ar-nu-an-da-as-ma-za-kán SES-IA ANA GIS-GU-ZA ABI-SU e-sa-at EGIR-an-ma-as
> ir-ma-li-ia-at-ta-at-pát ma-ah-ha-an-ma KUR-KUR-MES LÚ-KÚR 'm-ar-nu-an-da-an SES-IA ir-ma-an
> is-ta-ma-as-ser nu KUR-KUR-MES LÚ-KÚR ku-u-ru-ri-ia-ah-hi-is-ke-u-an da-a-[er]
> output:
> [ 𒌝𒈠 𒀭𒌓]𒅆  𒁹𒄯𒅆𒇷 𒈗𒃲 𒈗 𒆳 𒄩𒀜𒋾 𒌨𒊕
> [ 𒌉 𒁹𒋗𒌒]𒁉𒇻𒇷𒌋𒈠 𒈗𒃲 𒌨𒊕
> 𒆪𒀉𒈠𒀭𒍝𒃷 𒀀𒈾 𒄑𒄖𒍝 𒀀𒁉𒅀 𒈾[𒃾] 𒂊𒌍𒄩𒀜 𒉡𒈬 𒀀𒊏𒀸𒍢𒈾𒀸
> 𒆳𒆳𒈩 𒇽𒉽 𒄷𒌋𒈠𒀭𒋼𒌍 𒆪𒌋𒊒𒊑𒅀𒄴𒄭𒅕 𒉡𒍝 𒀀𒁍𒅀 𒆪𒉿𒁉 𒀭𒅆𒅖 𒆕𒀜
> 𒁹𒅈𒉡𒀭𒁕𒀸𒈠𒍝𒃷 𒋀𒅀 𒀀𒈾 𒄑𒄖𒍝 𒀀𒁉𒋗 𒂊𒊓𒀜 𒂕𒀭𒈠𒀸
> 𒅕𒈠𒇷𒅀𒀜𒋫𒀜𒁁 𒈠𒄴𒄩𒀭𒈠 𒆳𒆳𒈩 𒇽𒉽 𒁹𒅈𒉡𒀭𒁕𒀭 𒋀𒅀 𒅕𒈠𒀭
> 𒅖𒋫𒈠𒀸𒋓 𒉡 𒆳𒆳𒈩 𒇽𒉽 𒆪𒌋𒊒𒊑𒅀𒄴𒄭𒅖𒆠𒌋𒀭 𒁕𒀀[𒅕]

### Hieroglyphic Luwian

Glyphs with known syllabic values should be written in lower-case, syllabically
and with the proper diacritic or numbered if +4. Glyphs with known logographic
values should be written in upper-case. Variants of known glyphs should be
followed by one or more dots (.), generally the undotted variant is the more
frequent one.  Glyphs with unknown value should be written with an asterisk
followed by the number (3 digits, including the 0).

Example:
> "MAGNUS.REX MAGNUS-TONITRUS MAGNUS.REX HEROS ka-ra-ka-mi-sà REGIO REX || X-pa-VIR-ti-sa MAGNUS.REX HEROS INFANS-ní-mu-za || wa-tu-tá-a CORNU-ra-ti REGIO LIS arha.-SPHINX || \*273"\\
> 𔐒 𔖙𔓢 𔐒 𔐕 𔕢𔗷𔗧𔖻𔑶 𔔆 𔐑 || X𔕸𔕠𔑣𔗔 𔐒 𔐕 𔐰𔓵𔑾𔖪 || 𔗬𔑢𔐞𔗷 𔒂𔖱𔑣 𔔆 𔐘 𔓹𔒒 || 𔔴

### Lydian

|         |         |         |         |         |         |         |
|---------|---------|---------|---------|---------|---------|---------|
| a     𐤠 | b,p   𐤡 | g     𐤢 | d     𐤣 | e     𐤤 | v,w   𐤥 | i     𐤦 |
| y     𐤧 | k     𐤨 | l     𐤩 | m     𐤪 | n     𐤫 | o     𐤬 | r     𐤭 |
| S,ś   𐤮 | t     𐤯 | u     𐤰 | f     𐤱 | q     𐤲 | s,sh  𐤳 | T     𐤴 |
| ã     𐤵 | A     𐤵 | ẽ     𐤶 | E     𐤶 | L     𐤷 | N     𐤸 | c     𐤹 |
| .      |         |         |         |         |         |         |

### Lycian

|      |      |      |      |      |      |
|------|------|------|------|------|------|
| a  𐊀 | b  𐊂 | g  𐊄 | d  𐊅 | i  𐊆 | w  𐊇 |
| z  𐊈 | h  𐊛 | th 𐊉 | j  𐊊 | y  𐊊 | k  𐊋 |
| l  𐊍 | m  𐊎 | n  𐊏 | u  𐊒 | p  𐊓 | k  𐊔 |
| r  𐊕 | s  𐊖 | t  𐊗 | e  𐊁 | ã  𐊙 | ẽ  𐊚 |
| M  𐊐 | N  𐊑 | T  𐊘 | q  𐊌 | B  𐊃 | x  𐊜 |

### Carian

|          |          |          |          |          |          |
|----------|----------|----------|----------|----------|----------|
| a      𐊠 | b      𐊡 | d      𐊢 | l      𐊣 | y      𐊤 | y2     𐋐 |
| r      𐊥 | L      𐊦 | L2     𐋎 | A2     𐊧 | q      𐊨 | b      𐊩 |
| m      𐊪 | o      𐊫 | D2     𐊬 | t      𐊭 | sh     𐊮 | sh2    𐊯 |
| s      𐊰 | 18     𐊱 | u      𐊲 | N      𐊳 | c      𐊴 | n      𐊵 |
| T2     𐊶 | p      𐊷 | 's,ś   𐊸 | i      𐊹 | e      𐊺 | ý,'y   𐊻 |
| k      𐊼 | k2     𐊽 | dh     𐊾 | w      𐊿 | G      𐋀 | G2     𐋁 |
| z2     𐋂 | z      𐋃 | ng     𐋄 | j      𐋅 | 39     𐋆 | T      𐋇 |
| y3     𐋈 | r2     𐋉 | mb     𐋊 | mb2    𐋋 | mb3    𐋌 | mb4    𐋍 |
| e2     𐋏 |          |          |          |          |          |

### Ogham

|               |               |               |                |
|---------------|---------------|---------------|----------------|
| b           ᚁ | l           ᚂ | w           ᚃ | s           ᚄ  |
| n           ᚅ | j           ᚆ | h           ᚆ | d           ᚇ  |
| t           ᚈ | k           ᚉ | kw          ᚊ | c           ᚉ  |
| cw          ᚊ | m           ᚋ | g           ᚌ | gw          ᚍ  |
| S           ᚎ | r           ᚏ | a           ᚐ | o           ᚑ  |
| u           ᚒ | e           ᚓ | i           ᚔ | ,ear,       ᚕ  |
| ,or,        ᚖ | ,uilleann,  ᚗ | ,ifin,      ᚘ | ,eam,       ᚙ  |
| ,peith,     ᚚ | >           ᚛ | <           ᚜ |                |

### Oscan

|     |     |       |     |     |     |     |
|-----|-----|-------|-----|-----|-----|-----|
| a 𐌀 | b 𐌁 | g,k 𐌂 | d 𐌃 | e 𐌄 | v 𐌅 | z 𐌆 |
| h 𐌇 | i 𐌉 | l   𐌋 | m 𐌌 | n 𐌍 | p 𐌐 | ś 𐌑 |
| r 𐌓 | s 𐌔 | t   𐌕 | u 𐌖 | f 𐌚 | ú 𐌞 | í 𐌝 |

### Glagolitic

|       |       |       |       |       |       |
|-------|-------|-------|-------|-------|-------|
| a Ⰰ   | b Ⰱ   | v Ⰲ   | g Ⰳ   | d Ⰴ   | e Ⰵ   |
| zh Ⰶ  | dz Ⰷ  | z Ⰸ   | ii Ⰹ  | iy Ⰺ  | i Ⰻ   |
| j Ⰼ   | k Ⰽ   | l Ⰾ   | m Ⰿ   | n Ⱀ   | o Ⱁ   |
| p ⱂ   | r Ⱃ   | s Ⱄ   | t Ⱅ   | u Ⱆ   | f Ⱇ   |
| x Ⱈ   | oo Ⱉ  | w Ⱉ   | sht Ⱋ | ts Ⱌ  | ch Ⱍ  |
| sh Ⱎ  | '' Ⱏ  | 'i Ⰺ  | ' Ⱐ   | ya Ⱑ  | yo Ⱖ  |
| yu Ⱓ  | ẽ Ⱔ   | e~ Ⱔ  | yẽ Ⱗ  | ye~ Ⱗ | õ Ⱘ   |
| o~ Ⱘ  | yõ Ⱙ  | yo~ Ⱙ | th Ⱚ  | v Ⱛ   |       |

## Acknowledgments

- Obrigado Alex por indicar alguns erros crassos que tinham passado despercebidos em Grego e Avesta.
- Obrigado Thiago por notar que o antigo IAST do védico era um misto de IAST com ISO.
- Obrigado `burlemarxista`, `laranjadinho` e Everton por terem ajudado nos testes quando o Edge e Chrome decidiram não colaborar.

## Known Issues

For whatever reason, Edge and sometimes Chrome on Windows have problems loading the website due to the longer scripts for
Luwian. It happened out of the blue, so I don't have a perfect fix for it.
