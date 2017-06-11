import TreeGraph from '../ui/tree.js';

const margin = {
  top: 10,
  left: 30,
  right: 40,
  bottom: 80,
}

const data = {
  name: "T",
  children: [
    { name: "A"},
    { name: "B"},
    { name: "C"},
  ]
}

export default () => (
  <div>
    <TreeGraph
      width={500}
      height={300}
      margin={margin}
      data={data}
    />
  </div>
)
