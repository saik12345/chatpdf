const url = "https://docxtract1.p.rapidapi.com/extract";
export async function convert(pdfFile) {
  const formData = new FormData();
  formData.append("file", pdfFile);
  formData.append(
    "Parameters",
    JSON.stringify([
      {
        Name: "StoreFile",
        Value: true,
      },
    ])
  );
  //   const data = pdfPath;

  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": "387204febbmshcd0af4814eb77e7p1573abjsn818521e3e073",
      "x-rapidapi-host": "docxtract1.p.rapidapi.com",
    },
    body: formData,
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(String(result.text));
    return result.text;
  } catch (error) {
    console.error(error);
    return error;
  }
}
