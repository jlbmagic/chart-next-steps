import c3 from "c3";

window.loadChart = function (json) {
  const obj = JSON.parse(json);
  const data = obj.data;
  const type = obj.type;

  const options = {
    bindto: "#chart",
    size: { width: 600, height: 400 },
    axis: {
      x: { type: "category" },
    },
    data: {
      colors: {
        Apples: "#ff0000",
        Peaches: "#00ff00",
        Bananas: "#0000ff",
      },
      keys: { x: "name", value: ["Jan", "Feb", "Mar"] },
      type: type,

      json: data,
    },
  };
  const chart = c3.generate(options);
};
