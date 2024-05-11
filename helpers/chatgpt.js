const url = "https://chatgpt-best-price.p.rapidapi.com/v1/chat/completions";
export async function getData(submittedText, query) {
  console.log("submittedText", submittedText);
  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": "387204febbmshcd0af4814eb77e7p1573abjsn818521e3e073",
      "x-rapidapi-host": "chatgpt-best-price.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `This is the information :${submittedText}. Answer the query - ${query}`,
        },
      ],
    }),
  };

  try {
    console.log("submittedText", submittedText);
    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result);
    return JSON.stringify(result.choices[0].message.content);
  } catch (error) {
    console.error(error);
    return "Error" + error;
  }
}
