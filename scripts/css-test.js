import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      {"role": "system", "content": "You are an extraordinary Principal AEM Developer. Please generate the css based on user's #request . Do not comment any words except css code. Please refer to the #knowledge for the specification about block css. Please generate the full css and make sure it works."}, 
      {"role": "user", "content": "#request AEM Cloud Services Edge Delivery Services leverages blocks. Could you please generate css of Card block? Using css, please add interaction that when user hovers the card block, it will highlight the entire card block in yellow.  #knowldge --- # Adobe AEM Boilerplate Repository CSS Structure The Adobe AEM Boilerplate repository uses a structured approach to CSS, separating global styles and block-specific styles for maintainability and clarity. ## Global Styles (styles.css) **Purpose**: Define general resets, base typography, and common utility classes. **Scope**: Applied site-wide. **Example**:  css :root { --body-font-family: Arial, sans-serif; --background-color: white; --link-color: #035fe6; --link-hover-color: #136ff6; --light-color: #eee; --dark-color: #ccc; --text-color: black; } body { font-family: var(--body-font-family); background-color: var(--background-color); color: var(--text-color); margin: 0; padding: 0; line-height: 1.6; } ## Block-Specific Styles **Purpose**: Define styles unique to individual components (e.g., cards, buttons). **Scope**: Applied only to specific blocks or components. ### Cards (blocks/cards/cards.css)  css .cards > ul { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(278px, 1fr)); grid-gap: 16px; } .cards > ul > li { border: 1px solid var(--dark-color); background-color: var(--background-color); transition: transform 0.3s, box-shadow 0.3s; } .cards > ul > li:hover { transform: translateY(-5px); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); } .cards .cards-card-body { margin: 16px; background-color: yellow; transition: background-color 0.3s; } .cards .cards-card-image { line-height: 0; } .cards .cards-card-body > *:first-child { margin-top: 0; } .cards > ul > li img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; } ### Buttons (styles/buttons.css)  css a.button:any-link, button { font-family: var(--body-font-family); display: inline-block; box-sizing: border-box; text-decoration: none; border: 2px solid transparent; padding: 5px 30px; text-align: center; font-style: normal; font-weight: 600; cursor: pointer; color: var(--background-color); background-color: var(--link-color); margin: 16px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; border-radius: 30px; } a.button:hover, a.button:focus, button:hover, button:focus { background-color: var(--link-hover-color); cursor: pointer; } button:disabled, button:disabled:hover { background-color: var(--light-color); cursor: unset; } a.button.secondary, button.secondary { background-color: unset; border: 2px solid currentcolor; color: var(--text-color); } ## Summary - **Global Styles (styles.css)**: Include general resets, typography, and utility classes. - **Block-Specific Styles**: Contain styles specific to each component, ensuring modularity and maintainability. ---"}
    ],
    model: "gpt-4o",
  });

  // console.log(completion);
  console.log(completion.choices[0]);
  console.log(completion.choices[0].message.content)
}

main();