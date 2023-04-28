const fs = require("fs"),
  crypto = require("crypto");

const PUBLIC_KEY_PATH = "./keys/public.pem",
  FILE_PATH = "./data.txt",
  SIGNATURE_PATH = "./signature.txt";

function checkVerify() {
  const key = fs.readFileSync(PUBLIC_KEY_PATH, "utf8");

  const publicKey = crypto.createPublicKey({
    key: Buffer.from(key),
  });

  const message = fs.readFileSync(FILE_PATH, "utf8");

  const signature = fs.readFileSync(SIGNATURE_PATH, "utf8");

  const verify = crypto.createVerify("SHA256");
  verify.update(message);
  verify.end();

  const isVerify = verify.verify(publicKey, signature, "base64");

  console.log(isVerify);
}

module.exports = {
  checkVerify,
};

