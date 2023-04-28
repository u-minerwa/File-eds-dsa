const fs = require("fs"),
  crypto = require("crypto");

const PRIVATE_KEY_PATH = "./keys/private.pem",
  FILE_PATH = "./data.txt";

function createSign() {
  const key = fs.readFileSync(PRIVATE_KEY_PATH, "utf8");

  const privateKey = crypto.createPrivateKey({
    key: Buffer.from(key),
  });

  const message = fs.readFileSync(FILE_PATH, "utf8");

  const sign = crypto.createSign("SHA256");
  sign.update(message);
  sign.end();

  const signature = sign.sign(privateKey).toString("base64");

  console.log(`EDS: ${signature}`);

  fs.writeFile(`./signature.txt`, signature, (err) => {
    if (err) throw err;
    console.log("\nSignature is created successfully.");
  });
}

module.exports = {
  createSign,
};
