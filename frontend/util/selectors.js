export const benchToArray = (benches) => {
  return Object.keys(benches).map(id => benches[id]);
}
