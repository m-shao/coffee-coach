import { useState } from "react";
import { OpenAI } from "langchain/llms/openai";

const model = new OpenAI({ openAIApiKey: "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", temperature: 0.9 });

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await model.call(input);
    setOutput(res.res);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input:
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>Output: {output}</p>
    </div>
  );
}

export default App;