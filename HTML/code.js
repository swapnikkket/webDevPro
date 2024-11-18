document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("submit");

  btn.addEventListener("click", async () => {
    const number = document.getElementById("number").value;
    const limit = document.getElementById("limit").value;
    const url = `https://api.freeapi.app/api/v1/users/google`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
      const { data } = json;
      console.log(data.data[0].dob.age);
    } catch (error) {
      console.error("Error:", error.message);
    }
  });
  document.createAttribute("div")
});
