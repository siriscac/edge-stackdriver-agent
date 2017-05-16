var Tail = require('tail').Tail;
tailf = new Tail("/var/log/syslog");

var servicekey = {
  "type": process.env.GSRV_TYPE,
  "project_id": process.env.GSRV_PROJECT_ID,
  "private_key_id": process.env.GSRV_PRIVATE_KEY_ID,
  "private_key": process.env.GSRV_PRIVATE_KEY,
  "client_email": process.env.GSRV_CLIENT_EMAIL,
  "client_id": process.env.GSRV_CLEINT_ID,
  "auth_uri": process.env.GSRV_AUTH_URI,
  "token_uri": process.env.GSRV_TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.GSRV_AUTH_PROVIDER_CERT_URL,
  "client_x509_cert_url": process.env.GSRV_CLIENT_CERT_URL
}

console.log(servicekey);

var loggingClient = require('@google-cloud/logging')({
  credentials: servicekey
});

// The name of the log to write to
const logName = 'edge-log';

// Selects the log to write to
const log = loggingClient.log(logName);

// The metadata associated with the entry
const metadata = { resource: { type: 'global' } };

tailf.on("line", function(data) {
  console.log(data);
  // Prepares a log entry
  const entry = log.entry(metadata, data);

  // Writes the log entry
  log.write(entry)
    .then(() => {
      console.log(`Logged: ${data}`);
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
});

tailf.on("error", function(error) {
  console.log('ERROR: ', error);
});
