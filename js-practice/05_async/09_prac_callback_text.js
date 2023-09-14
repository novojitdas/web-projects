const transformText = (text,callback) => {
      return callback(text);
};

const upper = (text) => {
      return text.toUpperCase();
};

const lower = (text) => {
      return text.toLowerCase();
};

console.log(transformText("stay here",upper));
console.log(transformText("Hi",lower));
