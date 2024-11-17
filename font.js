const boldItalic = {
  a: '𝒶', b: '𝒷', c: '𝒸', d: '𝒹', e: '𝑒', f: '𝒻',
  g: '𝑔', h: '𝒽', i: '𝒾', j: '𝒿', k: '𝓀', l: '𝓁',
  m: '𝓂', n: '𝓃', o: '𝑜', p: '𝓅', q: '𝓆', r: '𝓇',
  s: '𝓈', t: '𝓉', u: '𝓊', v: '𝓋', w: '𝓌', x: '𝓍',
  y: '𝓎', z: '𝓏',
  A: '𝒜', B: '𝐵', C: '𝒞', D: '𝒟', E: '𝐸', F: '𝐹',
  G: '𝒢', H: '𝐻', I: '𝒾', J: '𝒥', K: '𝒦', L: '𝐿',
  M: '𝑀', N: '𝒩', O: '𝒪', P: '𝒫', Q: '𝒬', R: '𝒭',
  S: '𝒮', T: '𝒯', U: '𝒰', V: '𝒱', W: '𝒲', X: '𝒳',
  Y: '𝒴', Z: '𝒵',
  0: '𝟬', 1: '𝟭', 2: '𝟮', 3: '𝟯', 4: '𝟰',
  5: '𝟱', 6: '𝟲', 7: '𝟳', 8: '𝟴', 9: '𝟵'
};

function one(text, fontMap) {
  return text.replace(/[a-zA-Z0-9]/g, (char) => fontMap[char] || char);
}

const bold = {
  a: '𝗮', b: '𝗯', c: '𝗰', d: '𝗱', e: '𝗲', f: '𝗳',
  g: '𝗴', h: '𝗵', i: '𝗶', j: '𝗷', k: '𝗸', l: '𝗹',
  m: '𝗺', n: '𝗻', o: '𝗼', p: '𝗽', q: '𝗾', r: '𝗿',
  s: '𝘀', t: '𝘁', u: '𝘂', v: '𝘃', w: '𝘄', x: '𝘅',
  y: '𝘆', z: '𝘇',
  A: '𝗔', B: '𝗕', C: '𝗖', D: '𝗗', E: '𝗘', F: '𝗙',
  G: '𝗚', H: '𝗛', I: '𝗜', J: '𝗝', K: '𝗞', L: '𝗟',
  M: '𝗠', N: '𝗡', O: '𝗢', P: '𝗣', Q: '𝗤', R: '𝗥',
  S: '𝗦', T: '𝗧', U: '𝗨', V: '𝗩', W: '𝗪', X: '𝗩',
  Y: '𝗬', Z: '𝗭',
  0: '𝟬', 1: '𝟭', 2: '𝟮', 3: '𝟯', 4: '𝟰',
  5: '𝟱', 6: '𝟲', 7: '𝟳', 8: '𝟴', 9: '𝟵'
};


function apply(text, fontMap) {
  return text.replace(/[a-zA-Z0-9]/g, (char) => fontMap[char] || char);
}



// Exporting functions
module.exports = { 
  bold,
  apply,
  boldItalic,
  one
};
