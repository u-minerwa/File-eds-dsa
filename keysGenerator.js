const fs = require("fs"),
  NodeRSA = require("node-rsa");

const KEYS_DIR = "./keys";

function generateKeys() {
  const key = new NodeRSA().generateKeyPair();

  const publicKey = key.exportKey("public"),
    privateKey = key.exportKey("private");

  fs.writeFile(
    `${KEYS_DIR}/public.pem`,
    publicKey.toString("base64"),
    (err) => {
      if (err) throw err;
      console.log("Public key is created successfully.");
    }
  );
  fs.writeFile(
    `${KEYS_DIR}/private.pem`,
    privateKey.toString("base64"),
    (err) => {
      if (err) throw err;
      console.log("Private key is created successfully.");
    }
  );
}

module.exports = {
  generateKeys,
};
