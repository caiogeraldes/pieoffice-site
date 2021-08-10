import Select from 'react-select';

import { allConverters } from "pieoffice";


function App() {
  return (
    <div className="App">
        <div id="main">
          <h1>PIE Office</h1>
          <LangSelect name="thelist"/>
          <TextIn />
          <TextOut />
          <h6>
          See the transliteration schemes in <a href="https://github.com/caiogeraldes/pieoffice-site#transliteration-schemes">GitHub</a>
          <br/>
          <br/>
          1.1.0 - 2021, Caio Geraldes - MIT License
          <br/>
          Recently added: auto-conversion for Vedic in HK notation with udatta accents marked to devanāgarī with anudatta and svarita.
          <br/>
          Separate schemes for IAST and ISO 15919 in Vedic.
          <br/>
          Proper BETACODE integration for polytonic Greek (testing)
          <br/>
        </h6>
        </div>
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

var converter = (input) => {return input};

function convertHandler (e) {
    const lines = e.target.value.split("\n");
    document.getElementById("output").value = lines.map(value => converter(value)).join("\n");
}


const LangSelect = () => {

    const handleChange = (e) => {
            converter = e.converter;
    }

    return (
        <Select
            placeholder={"Select a script"}
            onChange={handleChange}
            options={allConverters}
        />
    );
}

export default App;
