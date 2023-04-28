const prompt = require("prompt"),
  keysGenerator = require("./keysGenerator"),
  signature = require("./signature"),
  verify = require("./verify");

console.log(`
    1.Generate key pair in "./keys/"
    2.Create electronic digital signature for "data.txt"
    3.Verify "data.txt" by eds
    `);

prompt.start();

prompt.get(["mode"], function (err, result) {
  switch (+result.mode) {
    case 1:
      keysGenerator.generateKeys();
      break;
    case 2:
      signature.createSign();
      break;
    case 3:
      verify.checkVerify();
      break;
    default:
      return;
  }
});
