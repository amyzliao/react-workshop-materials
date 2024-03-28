function changeColor() {
  document.getElementById('box').style.backgroundColor = 'yellow';
  document.getElementById('subheading').innerText = 'i am yellow';
}

function App() {
  return (
    <div
      id="box"
      style={{
        width: "200px",
        height: "300px",
        backgroundColor: "lightblue",
        textAlign: "center",
        paddingTop: "10px"
      }}
    >
      <h1 style={{ fontFamily: "verdana" }}>
        HELLO WORLD
      </h1>
      <h2
        id="subheading"
        style={{ fontFamily: "monospace" }}>
        i am blue
      </h2>
      <button
        id="button"
        style={{
          fontFamily: "monospace",
          borderRadius: "20px",
          backgroundColor: "lightpink"
        }}
        onClick={changeColor}
      >
        <h5 style={{ fontSize: "15px" }}>
          change the color
        </h5>
      </button>
    </div>
  );
}

export default App;
