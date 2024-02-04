import "./App.css";
import Select from "react-select";
import { allConverters } from "pieoffice";

function App() {
  return (
    <>
      <div className="bg-gray-100 h-screen">
        <h1 className="p-5 text-2xl font-mono text-center">PIE Office</h1>
        <div className="grid gap-5 m-5 p-1">
          <LangSelect name="thelist" />
          <TextIn />
          <TextOut />
        </div>
        <h6 className="text-xs text-center font-mono">
          See the transliteration schemes in <span />
          <a
            href="https://github.com/caiogeraldes/pieoffice-site#transliteration-schemes"
            className="font-mono text-teal-700"
          >
            GitHub
          </a>
          <br />
          <br />
          1.3.0 - 2024, Caio Geraldes - MIT License
          <br />
          Recently added: Greek with normalized with NFC
          <br />
        </h6>
      </div>
    </>
  );
}

function TextIn() {
  return (
    <div className="w-100">
      <div className="relative w-full">
        <textarea
          type="text"
          id="input"
          className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent px-3 py-2.5 font-sans text-md font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
          onChange={convertHandler}
        />
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Input
        </label>
      </div>
    </div>
  );
}

function TextOut() {
  return (
    <div className="w-100">
      <div className="relative w-full">
        <textarea
          type="text"
          id="output"
          className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent px-3 py-2.5 font-sans text-md font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
        />
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Output
        </label>
      </div>
    </div>
  );
}

var converter = (input) => {
  return input;
};

function convertHandler(e) {
  const lines = e.target.value.split("\n");
  document.getElementById("output").value = lines
    .map((value) => converter(value))
    .join("\n");
}

const LangSelect = () => {
  const handleChange = (e) => {
    converter = e.converter;
  };

  return (
    <Select
      placeholder={"Select a script"}
      className="text-sm"
      onChange={handleChange}
      options={allConverters}
    />
  );
};

export default App;
