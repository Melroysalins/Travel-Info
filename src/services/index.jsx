const url = "https://cardgpt.in/apitest";

const headers = {
  Accept: "application/json, text/plain, */*",
  "Accept-Language": "en-US,en;q=0.9,hi;q=0.8",
  "Cache-Control": "no-cache",
  "Content-Type": "application/json",
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
};

export async function fetchData({ originvalue, destinationvalue, inputvalue }) {
  const jsonData = {
    origin: originvalue,
    destination: destinationvalue,
    partnerPrograms: [
      "Air Canada",
      "United Airlines",
      "KLM",
      "Qantas",
      "American Airlines",
      "Etihad Airways",
      "Alaska Airlines",
      "Qatar Airways",
      "LifeMiles",
    ],
    stops: 2,
    departureTimeFrom: "2024-07-09T00:00:00Z",
    departureTimeTo: "2024-10-07T00:00:00Z",
    isOldData: "false",
    limit: 302,
    offset: 0,
    cabinSelection: inputvalue,
    date: "2024-07-09T12:00:17.796Z",
  };

  try {
    console.log("Request data:", jsonData);
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(jsonData),
    });
    console.log("Raw response:", response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}
