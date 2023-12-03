// Array of IDs
// Get all the div elements with the desired class
const divElements = document.getElementsByClassName('music_master_score_back');

// Convert the HTMLCollection to an array
const divElementsArray = Array.from(divElements);

// Iterate over the array of div elements
const inputValues = divElementsArray.map(divElement => {
  // Get the input element within each div
  const inputElement = divElement.querySelector('input[name="idx"]');
  
  // Get the value of the input element
  let inputValue = inputElement.value;
  inputValue = inputValue.replace(/\+/g, '%2B').replace(/\//g, '%2F').replace(/=/g, '%3D');

  // Return the input value
  return inputValue;
});

console.log(`https://maimaidx-eng.com/maimai-mobile/record/musicDetail/?idx=${inputValues[0]}`)

// Function to fetch the last played date for a given ID
const fetchLastPlayedDate = async (id) => {
  const url = `https://maimaidx-eng.com/maimai-mobile/record/musicDetail/?idx=${id}` // Replace with the URL pattern of your web page
  try {
    const response = await fetch(url)
    const html = await response.text()
    const parsedData = parseHTML(html) // Parse HTML and extract the last played date
    return parsedData
  } catch (error) {
    console.error(`Error fetching data for ID ${id}:`, error)
  }
}

// Array to store the results
const results = []

// Function to fetch the last played date for all IDs
const fetchAllLastPlayedDates = async () => {
  for (let i = 0; i < inputValues.length; i++) {
    const id = inputValues[i]
    const result = await fetchLastPlayedDate(id)
    results.push(result)
  }
  console.log("All results:", results)
}

function parseHTML(html) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, "text/html")

  const elements = doc.querySelectorAll(".m_5")

  let title = ""

  if (elements.length >= 2) {
    title = elements[1].textContent
  }

  // Extract the last played date using DOM traversal or other methods
  // Find the element with class "music_master_score_back"
  const targetElement = doc.querySelector(".music_master_score_back")
  let lastPlayedDate = ""

  if (targetElement) {
    const tableRows = targetElement.querySelectorAll("table tr")
    for (const row of tableRows) {
      const cells = row.querySelectorAll("td")
      if (cells.length === 2 && cells[0].textContent === "Last played date：") {
        lastPlayedDate = cells[1].textContent
        break
      }
    }
  }

  // Return the parsed data
  return {
    title, lastPlayedDate,
  }
}

// Call the function to fetch the last played date for all IDs
fetchAllLastPlayedDates()

// 69e983eaae9a7e3dda9e5495680cc08bbac842453d18347b0b4e43b0a80291dc9b64baa473eb06196f3468a2afa316b90c2440aa6eae181e5bb9f45791aa7820GaushzRQ68zCHf5fiISrHCQE%2Bxo6%2ByOCEFyi1rh%2BG%2FM%3D

//69e983eaae9a7e3dda9e5495680cc08bbac842453d18347b0b4e43b0a80291dc9b64baa473eb06196f3468a2afa316b90c2440aa6eae181e5bb9f45791aa7820GaushzRQ68zCHf5fiISrHCQE+xo6+yOCEFyi1rh+G/M=
