function showFields() {
    const polygonType = document.getElementById("polygonType").value;

    document.getElementById("triangleFields").classList.add("hidden");
    document.getElementById("rectangleFields").classList.add("hidden");
    document.getElementById("circleFields").classList.add("hidden");
    document.getElementById(`${polygonType}Fields`).classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
  }

  async function calculate(event) {
    event.preventDefault();

    // You need to use the area obtained from the server response
    fetch('/areacalculator', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        polygonType: document.getElementById("polygonType").value,
        base: document.getElementById("triangleBase").value,
        height: document.getElementById("triangleHeight").value,
        length: document.getElementById("rectangleLength").value,
        width: document.getElementById("rectangleWidth").value,
        radius: document.getElementById("circleRadius").value,
      }),
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById("area").value = data.area;
      document.getElementById("result").classList.remove("hidden");
    });
  }