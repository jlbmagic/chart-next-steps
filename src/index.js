import c3 from "c3";

window.loadChart = function (json) {
  const obj = JSON.parse(json);

  const productsArray = ["Apples", "Peaches", "Pears", "Bananas"];
  const { data, type, width, height, colors } = obj;
  console.log(colors);
  const options = {
    bindto: "#chart",
    size: { width: width, height: height },
    axis: {
      x: { type: "category" },
    },
    data: {
      onclick: function (dogs) {
        console.log(dogs);
        const { index, name } = dogs;
        const product = productsArray[index];
        console.log(product);
        const toSendToFM = { name: name, product: product };
        console.log(toSendToFM);
        FileMaker.PerformScript("Chart Click", JSON.stringify(toSendToFM));
      },
      colors: colors,
      keys: { x: "name", value: ["Jan", "Feb", "Mar"] },
      type: type,

      json: data,
    },
  };
  const chart = c3.generate(options);
};
