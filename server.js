import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/optimize", async (req, res) => {
  const { prompt, apiKey } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "No prompt provided" });
  }

  if (!apiKey) {
    return res.status(400).json({ error: "No API key provided" });
  }

  try {
    const client = new OpenAI({
      apiKey: apiKey
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",

      messages: [
        {
          role: "system",
          content: `
You are a prompt engineering expert.

Tasks:
1. Improve the prompt
2. Generate 2 different optimized versions
3. Score each version (clarity, specificity, effectiveness)

Return JSON:
{
  "versions": [
    {
      "style": "concise",
      "prompt": "...",
      "score": { "clarity": 0-10, "specificity": 0-10, "effectiveness": 0-10 }
    },
    {
      "style": "detailed",
      "prompt": "...",
      "score": { "clarity": 0-10, "specificity": 0-10, "effectiveness": 0-10 }
    }
  ],
  "best_version": "...",
  "reason": "why it's better"
}
          `
        },
        {
          role: "user",
          content: prompt
        }
      ],

      response_format: { type: "json_object" }
    });

    let result;


    try {
      result = JSON.parse(completion.choices[0].message.content);
    } catch (e) {
      console.log("RAW RESPONSE:", completion.choices[0].message.content);
      return res.status(500).json({
        error: "Invalid JSON from LLM"
      });
    }

    res.json(result);

  } catch (err) {
    console.error("FULL ERROR:", err);

    res.status(500).json({
      error: err.message,
      details: err.error || null
    });
  }
});

app.listen(3001, () => {
  console.log("Agent running on port 3001");
});