// Data source: https://open.toronto.ca/dataset/street-tree-data/

type RawTree = [string, number, number, number];

type Tree = {
  key: string;
  name: string;
  lat: number;
  lng: number;
  price: number;
};

const trees: RawTree[] = [
  ['822 68th Street, Brooklyn NY 11214', 40.630437, -74.013848, 1400000],
  ['1608 83rd Street, Brooklyn NY 11214', 40.611510, -74.005410, 1150000]
];

const formatted: Tree[] = trees.map(([name, lat, lng, price]) => ({
  name,
  lat,
  lng,
  price,
  // key: JSON.stringify({name, lat, lng})
  key: JSON.stringify(price),
  address: JSON.stringify(name),
}));

export default formatted;
