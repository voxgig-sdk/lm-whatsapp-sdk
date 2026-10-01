
const { ApiDef } = require('@voxgig/apidef')

const opts = {
  folder: __dirname + '/../model',

  // The MyLINK WhatsApp API definition declares no `servers`, so apidef would
  // otherwise leave the base URL as a `{base}` variable for every caller to
  // fill. apidef uses this option ONLY when the definition names no server,
  // so the vendor file in .sdk/def stays byte-for-byte as published.
  // Source and evidence for the value: .sdk/def/PROVENANCE.md.
  server: 'https://api.linkmobility.com',
}

module.exports = ApiDef.makeBuild(opts)
