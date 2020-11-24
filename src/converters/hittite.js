const hittite = (input) => {
    // Special det
    input = input.replace(/'d/g,                                        "𒀭"); // 8
    input = input.replace(/'m/g,                                        "𒁹"); // 356
    input = input.replace(/gloss/g,                                     "𒑱"); // 248

    // Six letters
    input = input.replace(/GURUSH/g,                                    "𒆗");
    input = input.replace(/DINGIR/g,                                    "𒀭"); // 8
    input = input.replace(/BABBAR/g,                                    "𒌓"); // 316

    // Five letters
    input = input.replace(/ÉRIN/g,                                      "𒂟"); // 327
    input = input.replace(/sal|MUNUS|'f/g,                              "𒊩"); // 297
    input = input.replace(/URUDU/g,                                     "𒍏"); // 109
    input = input.replace(/GÉSPU|GESPU2/g,                              "𒋗𒉽𒉽");
    input = input.replace(/PÚ|TÚL|túl|GÍGIR|PU2|tul2|GIGIR2/g,          "𒇥"); // 180
    input = input.replace(/ISKUR/g,                                     "𒅎");
    input = input.replace(/LUGAL/g,                                     "𒈗"); // 115
    input = input.replace(/MUSEN/g,                                     "𒄷");
    input = input.replace(/EZEN4/g,                                     "􀀉"); // 107 (Special unicode)
    input = input.replace(/GASAN/g,                                     "𒃽"); // 336
    input = input.replace(/NINDA/g,                                     "𒃻"); // 369

    // Four Letters
    input = input.replace(/ANSE/g,                                      "𒀲"); // 302
    input = input.replace(/KARAS/g,                                     "𒆠𒆗𒁁"); // 313a
    input = input.replace(/GÌR|GIR3/g,                                  "𒄊"); // 301
    input = input.replace(/EGIR/g,                                      "𒂕"); // 126
    input = input.replace(/GIS|iz/g,                                    "𒄑"); // 178
    input = input.replace(/DUMU/g,                                      "𒌉"); // 237
    input = input.replace(/SE12/g,                                      "𒈺");
    input = input.replace(/GADA/g,                                      "𒃰"); // 173
    input = input.replace(/SIG7/g,                                      "𒅊"); // 239
    input = input.replace(/BÀD|BAD3/g,                                  "𒂦"); // 114
    input = input.replace(/TUG2|TÚG/g,                                  "𒌆"); // 212
    input = input.replace(/tas3|tàs/g,                                  "𒀾"); // 241
    input = input.replace(/tén|ten2|DIN/g,                              "𒁷");

    // Triple letters
    input = input.replace(/ANA/g,                                       "𒀀𒈾");
    input = input.replace(/INA/g,                                       "𒄿𒈾");
    input = input.replace(/ÍD|ID2/g,                                    "𒀀𒇉"); // 365
    input = input.replace(/MES/g,                                       "𒈩"); // 360
    input = input.replace(/SUM/g,                                       "𒋧"); // 350
    input = input.replace(/sar|SAR/g,                                   "𒊬"); // 353
    input = input.replace(/UTU|tam|pir/g,                               "𒌓"); // 316
    input = input.replace(/dam/g,                                       "𒁮"); // 298
    input = input.replace(/SÀ|SA3/g,                                    "𒊮"); // 294
    input = input.replace(/lis/g,                                       "𒇺"); // 286
    input = input.replace(/GE6/g,                                       "𒈪"); // 267
    input = input.replace(/GIG/g,                                       "𒈪𒉭"); // 269
    input = input.replace(/UGU/g,                                       "𒌋𒅗"); // 272
    input = input.replace(/gul/g,                                       "𒄢"); // 271
    input = input.replace(/KUS/g,                                       "𒋢"); // 210
    input = input.replace(/kis/g,                                       "𒆧"); // 273
    input = input.replace(/UDU/g,                                       "𒇻"); // 210
    input = input.replace(/NIR/g,                                       "𒉪"); // 204
    input = input.replace(/UZU/g,                                       "𒍜"); // 203
    input = input.replace(/dur/g,                                       "𒂉"); // 202
    input = input.replace(/kal|dan/g,                                   "𒆗"); // 196
    input = input.replace(/mar/g,                                       "𒈥"); // 191
    input = input.replace(/gur/g,                                       "𒄥"); // 185
    input = input.replace(/hat/g,                                       "𒉺"); // 174
    input = input.replace(/DUG/g,                                       "𒂁"); // 162
    input = input.replace(/GIM/g,                                       "𒁶"); // 165
    input = input.replace(/GU4|GUD/g,                                   "𒄞"); // 157
    input = input.replace(/kum/g,                                       "𒄣"); // 120
    input = input.replace(/hé|he2/g,                                    "𒃶"); // 113
    input = input.replace(/SES/g,                                       "𒋀"); // 79
    input = input.replace(/ARAD/g,                                      "𒀴"); // 16
    input = input.replace(/zé|ze2/g,                                    "𒍢"); // 108
    input = input.replace(/pí|pi2/g,                                    "𒁉"); // 153
    input = input.replace(/kán|kan2/g,                                  "𒃷");
    input = input.replace(/pát|pat2/g,                                  "𒁁"); // 13
    input = input.replace(/pár|par2/g,                                  "𒁇");
    input = input.replace(/ták|tak2/g,                                  "𒁖");
    input = input.replace(/SÍG|SIG/g,                                   "𒋠");
    input = input.replace(/pal|BAL/g,                                   "𒁄"); // 4
    input = input.replace(/GÁL|[ie]k/g,                                 "𒅅");
    input = input.replace(/MÈ|ME3/g,                                    "𒀞"); // 82
    input = input.replace(/az|AS\./g,                                   "𒊍"); // 92
    input = input.replace(/ABI/g,                                       "𒀀𒁉");
    input = input.replace(/ABU/g,                                       "𒀀𒁍");
    input = input.replace(/GAL/g,                                       "𒃲"); // 242
    input = input.replace(/GAM/g,                                       "𒃵"); // 247
    input = input.replace(/pur/g,                                       "𒁓"); // 245
    input = input.replace(/ISH/g,                                       "𒄑");
    input = input.replace(/KUR/g,                                       "𒆳"); // 329
    input = input.replace(/KÚR/g,                                       "𒉽");
    input = input.replace(/LIM/g,                                       "𒅆");
    input = input.replace(/SAG/g,                                       "𒊕"); // 192
    input = input.replace(/URU/g,                                       "𒌷"); // 237
    input = input.replace(/ZAG/g,                                       "𒍠"); // 238
    input = input.replace(/BAT/g,                                       "𒁁");
    input = input.replace(/AMA/g,                                       "𒂼");
    input = input.replace(/h[ae]r|mur/g,                                "𒄯"); // 333
    input = input.replace(/mas/g,                                       "𒁇");
    input = input.replace(/s[ie]r/g,                                    "𒋓"); // 5
    input = input.replace(/tar/g,                                       "𒋻"); // 7
    input = input.replace(/ker/g,                                       "𒄫");
    input = input.replace(/kas/g,                                       "𒁉"); // 153
    input = input.replace(/kat/g,                                       "𒃰"); // 173
    input = input.replace(/hal/g,                                       "𒄬"); // 2
    input = input.replace(/ka4/g,                                       "𒋡"); // 21
    input = input.replace(/wi5/g,                                       "𒃾"); // 131
    input = input.replace(/rat/g,                                       "𒋥");
    input = input.replace(/nam/g,                                       "𒉆"); // 39
    input = input.replace(/lam/g,                                       "𒇴"); // 306
    input = input.replace(/lum/g,                                       "𒈝"); // 310
    input = input.replace(/GAG|DU3|DÙ/g,                                "𒆕"); // 75
    input = input.replace(/kam|TU7/g,                                   "𒄰"); // 357

    // Double letters
    input = input.replace(/um|UM/g,                                     "𒌝"); // 98
    input = input.replace(/in/g,                                        "𒅔"); // 354
    input = input.replace(/pu/g,                                        "𒁍"); // 339
    input = input.replace(/se/g,                                        "𒊺"); // 338
    input = input.replace(/[ie]m/g,                                     "𒅎"); // 337
    input = input.replace(/ut/g,                                        "𒌓"); // 316
    input = input.replace(/uz/g,                                        "𒊻"); // 340
    input = input.replace(/gu/g,                                        "𒄖"); // 304
    input = input.replace(/ul/g,                                        "𒌌"); // 275
    input = input.replace(/zu/g,                                        "𒍪"); // 209
    input = input.replace(/ba/g,                                        "𒁀"); // 205
    input = input.replace(/al/g,                                        "𒀠"); // 183
    input = input.replace(/am/g,                                        "𒂔"); // 168
    input = input.replace(/du/g,                                        "𒁺"); // 128
    input = input.replace(/uk/g,                                        "𒊌"); // 93
    input = input.replace(/BE/g,                                        "𒁁"); // 13
    input = input.replace(/ÚS/g,                                        "𒁁"); // 13
    input = input.replace(/ÌR/g,                                        "𒀴"); // 16
    input = input.replace(/BI/g,                                        "𒁉");
    input = input.replace(/DU/g,                                        "𒆕");
    input = input.replace(/GU/g,                                        "𒄖");
    input = input.replace(/HI/g,                                        "𒄭");
    input = input.replace(/IA/g,                                        "𒅀");
    input = input.replace(/IM/g,                                        "𒅎");
    input = input.replace(/LÚ/g,                                        "𒇽"); // 78
    input = input.replace(/MA/g,                                        "𒈠");
    input = input.replace(/UL/g,                                        "𒌌");
    input = input.replace(/UR/g,                                        "𒌨");
    input = input.replace(/SI/g,                                        "𒅆 ");
    input = input.replace(/ZA/g,                                        "𒍝");
    input = input.replace(/QÍ/g,                                        "𒆠");
    input = input.replace(/as|RÙ/g,                                     "𒀸"); // 1
    input = input.replace(/ni|LÍ/g,                                     "𒉌");
    input = input.replace(/en|EN/g,                                     "𒂗");
    input = input.replace(/NA4/g,                                       "𒉌𒌓");
    input = input.replace(/KÙ/g,                                        "𒆬");
    input = input.replace(/ip/g,                                        "𒅁");
    input = input.replace(/gi/g,                                        "𒄀");
    input = input.replace(/qa/g,                                        "𒋡");
    input = input.replace(/[aeiu]h/g,                                   "𒄴"); // 332
    input = input.replace(/ak/g,                                        "𒀝"); // 81
    input = input.replace(/an/g,                                        "𒀭"); // 8
    input = input.replace(/ar/g,                                        "𒅈"); // 289
    input = input.replace(/at/g,                                        "𒀜"); //105
    input = input.replace(/da/g,                                        "𒁕"); // 214
    input = input.replace(/di/g,                                        "𒁲"); // 312
    input = input.replace(/es/g,                                        "𒌍");
    input = input.replace(/ga/g,                                        "𒂵"); // 159
    input = input.replace(/ha/g,                                        "𒄩"); // 367
    input = input.replace(/he/g,                                        "𒄭");
    input = input.replace(/hi/g,                                        "𒄭"); // 335
    input = input.replace(/hu/g,                                        "𒄷");
    input = input.replace(/ia/g,                                        "𒅀"); // 215
    input = input.replace(/[ie]r/g,                                     "𒅕"); // 77
    input = input.replace(/is/g,                                        "𒅖"); // 151
    input = input.replace(/[ei]t/g,                                     "𒀉"); // 215
    input = input.replace(/ka/g,                                        "𒅗"); // 133
    input = input.replace(/k[ie]/g,                                     "𒆠"); // 313
    input = input.replace(/ku/g,                                        "𒆪"); // 206
    input = input.replace(/la/g,                                        "𒆷"); // 95
    input = input.replace(/ap/g,                                        "𒀊"); // 97
    input = input.replace(/l[ie]/g,                                     "𒇷"); // 343
    input = input.replace(/lu/g,                                        "𒇻"); // 210
    input = input.replace(/ma/g,                                        "𒈠"); // 208
    input = input.replace(/me/g,                                        "𒈨"); // 357
    input = input.replace(/mi/g,                                        "𒈪"); // 267
    input = input.replace(/mu/g,                                        "𒈬"); // 17
    input = input.replace(/na/g,                                        "𒈾"); // 15
    input = input.replace(/ne/g,                                        "𒉈"); // 169
    input = input.replace(/nu/g,                                        "𒉡"); // 11
    input = input.replace(/pa/g,                                        "𒉺"); // 174
    input = input.replace(/ra/g,                                        "𒊏"); // 233
    input = input.replace(/ri/g,                                        "𒊑");
    input = input.replace(/ru/g,                                        "𒊒");
    input = input.replace(/sa/g,                                        "𒊓"); // 158
    input = input.replace(/si/g,                                        "𒅆"); // 288
    input = input.replace(/su|SU/g,                                     "𒋗");
    input = input.replace(/ta/g,                                        "𒋫"); // 160
    input = input.replace(/te/g,                                        "𒋼"); // 249
    input = input.replace(/ti/g,                                        "𒋾"); // 37
    input = input.replace(/tu/g,                                        "𒌅"); // 346
    input = input.replace(/un/g,                                        "𒌦"); // 197
    input = input.replace(/up/g,                                        "𒌒"); // 152
    input = input.replace(/us/g,                                        "𒍑"); // 132
    input = input.replace(/wa/g,                                        "𒉿"); // 317
    input = input.replace(/za/g,                                        "𒍝"); // 366
    input = input.replace(/zi/g,                                        "𒍣");
    input = input.replace(/ur/g,                                        "𒌨");
    input = input.replace(/BI/g,                                        "𒁉");
    input = input.replace(/BU/g,                                        "𒁍");

    // Single letters
    input = input.replace(/a|A/g,                                       "𒀀"); // 364
    input = input.replace(/e/g,                                         "𒂊"); // 187
    input = input.replace(/i|I/g,                                       "𒄿"); // 217
    input = input.replace(/ú/g,                                         "𒌑"); // 195
    input = input.replace(/Ú|u/g,                                       "𒌋"); // 261
    input = input.replace(/É/g,                                         "𒂍"); // 199


    // NUMBERS
    input = input.replace(/1\d/g,                                       "𒌋") // 261
    input = input.replace(/2/g,                                         "𒈫") // 361
    input = input.replace(/3/g,                                         "𒐈") // 367
    input = input.replace(/4/g,                                         "𒐉") // 370
    input = input.replace(/5/g,                                         "𒐊") // 371
    input = input.replace(/6/g,                                         "𒐋") // 372
    input = input.replace(/7/g,                                         "𒐌") // 373
    input = input.replace(/8/g,                                         "𒐍") // 374
    input = input.replace(/9/g,                                         "𒐎") // 375

    input = input.replace(/-/g,                                         "");

    return input;
}

export default hittite;
