// import { OpenAI, } from "npm:openai";
// import {encoding_for_model} from 'tiktoken';

// const openai = new OpenAI();

// const main = async (): Promise<void> => {
//     const response = await openai.chat.completions.create({
//       model: "gpt-4o",
//       messages: [{
//         role: 'user',
//         content: "test"
//       }]
//     })
//     console.log(response.choices[0].message.content)
// }

// const encodePromt = () => {
//   const prompt = "how are you today?"
//   const encoder = encoding_for_model('gpt-4o')
//   const words = encoder.encode(prompt);
//   console.log("words");
// }


//  main();

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <pre>
           __
          / _)
   .-^^^-/ /
 __/       /
<__.|_|-|_|
    </pre>
    <p>Welcome to the DENOsaur API xD</p>
  `);
});
app.listen(8000);
console.log(`Server is running on http://localhost:8000`);


