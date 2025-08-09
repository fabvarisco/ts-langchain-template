import { OpenAI, } from "npm:openai";


const openai = new OpenAI();

const main = async (): Promise<void> => {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{
        role: 'user',
        content: "test"
      }]
    })
    console.log(response.choices[0].message.content)
}

 main();

