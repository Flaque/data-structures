import TreeGraph from "./TreeGraph.js";

const margin = {
  top: 40,
  left: 50,
  right: 50,
  bottom: 40
};

export default ({
  data,
  width,
  height
}) => (
  <div
    style={{
      background: "#eff1fa",
      margin: "25px 0",
      "border-radius": "5px"
    }}
  >
    <TreeGraph
      width={width}
      height={height}
      margin={margin}
      data={data}
    />
  </div>
)
