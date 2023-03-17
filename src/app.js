function dNameGenerator() {
  const pronoun = ["the", "your"];

  const adj = ["grand", "big"];

  const noun = [".com", ".net"];

  let generator = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let m = 0; m < adj.length; m++) {
      for (let n = 0; n < noun.length; n++) {
        let domain = pronoun[i] + adj[m] + noun[n];
        generator.push(domain);
      }
    }
  }
  return generator;
}
document.querySelector(".domain-name").innerHTML = dNameGenerator().join(
  "<br/>"
);
