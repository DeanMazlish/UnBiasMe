// Function to make an API call to GPT-4 and generate an unbiased article
async function generateUnbiasedArticle() {
    const articleText = document.getElementById("articleText").value;
    
    // Make sure to replace 'your-api-key-here' with your actual API key
    const apiKey = 'your-api-key-here';
    
    const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt: `Unbiased summary: ${articleText}`,
        max_tokens: 150
      })
    });
  
    const data = await response.json();
    
    // Extract and display the generated summary
    const unbiasedArticle = data.choices[0].text.trim();
    document.getElementById("unbiasedArticle").innerText = unbiasedArticle;
  }
  