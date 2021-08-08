import Select from 'react-select';

import pie from '/converters/pie.js';
import polygreek from '/converters/polytonicgreek.js';
import linearb from '/converters/linearb.js';
import cypriot from '/converters/cypriot.js';
import armenian from '/converters/armenian.js';
import avestan from '/converters/avestan.js';
import avestanTrans from '/converters/avestanTrans.js';
import oldpersian from '/converters/oldpersian.js';
import gothic from '/converters/gothic.js';
import hittite from '/converters/hittite.js';
import luwian from '/converters/luwian.js';
import lycian from '/converters/lycian.js';
import lydian from '/converters/lydian.js';
import carian from '/converters/carian.js';
import ogham from '/converters/ogham.js';
import oscan from '/converters/oscan.js';
import { hk_deva, hk_iast, hk_iso } from './converters/vedic.js';
import { glagolitic } from './converters/glagolitic.js';

function App() {
  return (
      <div id="main">
          <h1>PIE Office</h1>
          <LangSelect name="thelist"/>
          <TextIn />
          <TextOut />
          <h6>
          See the transliteration schemes in <a href="https://github.com/caiogeraldes/pieoffice-site#transliteration-schemes">GitHub</a>
          <br/>
          <br/>
          1.0.2 - 2021, Caio Geraldes - MIT License
          <br/>
          Recently added: auto-conversion for Vedic in HK notation with udatta accents marked to devanāgarī with anudatta and svarita.
          <br/>
          Separate schemes for IAST and ISO 15919 in Vedic.
          <br/>
          Proper BETACODE integration for polytonic Greek (testing)
          <br/>
          </h6>
      </div>
  );
}

function TextIn() {
    return (
        <textarea type="text" id="input" onChange={convertHandler}/>
    );
}

function TextOut() {
    return (
        <textarea type="text" id="output"/>
    );
}


const options = [
  { value: 'pie', label: 'Proto-Indo-European' },
  { value: 'polygreek', label: 'Polytonic Greek' },
  { value: 'linearb', label: 'Linear B' },
  { value: 'cypriot', label: 'Cypriot Syllabary' },
  { value: 'armenian', label: 'Armenian' },
  { value: 'vedicdeva', label: 'Vedic / Sanskrit (Devanāgarī)'},
  { value: 'vediciast', label: 'Vedic / Sanskrit (IAST)'},
  { value: 'vediciso', label: 'Vedic / Sanskrit (ISO)'},
  { value: 'avestan', label: 'Avestan (Script)' },
  { value: 'avestanTrans', label: 'Avestan (Translit)' },
  { value: 'oldpersian', label: 'Old Persian Cuneiform' },
  { value: 'gothic', label: 'Gothic' },
  { value: 'hittite', label: 'Hittite (Incomplete, only Van den Hout)' },
  { value: 'luwian', label: 'Hieroglyphic Luwian' },
  { value: 'lydian', label: 'Lydian' },
  { value: 'lycian', label: 'Lycian' },
  { value: 'carian', label: 'Carian' },
  { value: 'ogham', label: 'Ogham' },
  { value: 'oscan', label: 'Oscan' },
  { value: 'glagolitic', label: 'Glagolitic' },

]

var converter = (input) => {return input};

function convertHandler (e) {
    const lines = e.target.value.split("\n");
    document.getElementById("output").value = lines.map(value => converter(value)).join("\n");
}


const LangSelect = () => {

    var lang = "";
    const handleChange = (e) => {
        lang = e.value;
        if (lang === "pie") {
            converter = pie;
        } else if (lang === "linearb") {
            converter = linearb;
        } else if (lang === "cypriot") {
            converter = cypriot;
        } else if (lang === "armenian") {
            converter = armenian;
        } else if (lang === "vedicdeva") {
            converter = hk_deva;
        } else if (lang === "vediciast") {
            converter = hk_iast;
        } else if (lang === "vediciso") {
            converter = hk_iso;
        } else if (lang === "avestan") {
            converter = avestan;
        } else if (lang === "avestanTrans") {
            converter = avestanTrans;
        } else if (lang === "oldpersian") {
            converter = oldpersian;
        } else if (lang === "gothic") {
            converter = gothic;
        } else if (lang === "hittite") {
            converter = hittite;
        } else if (lang === "luwian") {
            converter = luwian;
        } else if (lang === "lycian") {
            converter = lycian;
        } else if (lang === "lydian") {
            converter = lydian;
        } else if (lang === "carian") {
            converter = carian;
        } else if (lang === "ogham") {
            converter = ogham;
        } else if (lang === "oscan") {
            converter = oscan;
        } else if (lang === "glagolitic") {
            converter = glagolitic;
        } else if (lang === "polygreek") {
            converter = polygreek
        }
    }

    return (
        <Select
            placeholder={"Select a script"}
            onChange={handleChange}
            options={options}
        />
    );
}

export default App;

//
// A Paixão é meu mozão.
//
