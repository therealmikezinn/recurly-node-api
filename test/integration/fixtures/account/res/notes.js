const parser = require('./../../parser');

const response = `
<?xml version="1.0" encoding="UTF-8"?>
<notes type="array">
  <note>
    <account href="https://your-subdomain.recurly.com/v2/accounts/1"/>
    <message>This is my second note</message>
    <created_at type="datetime">2015-06-14T16:08:41Z</created_at>
  </note>
  <note>
    <account href="https://your-subdomain.recurly.com/v2/accounts/1"/>
    <message>This is my first note</message>
    <created_at type="datetime">2016-06-13T16:06:21Z</created_at>
  </note>
</notes>
`;

module.exports = {
  response,
  parsedResponse: parser.success(response),
};
