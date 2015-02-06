# Media API 1.0

**Endpoint**: `/api/v1/media`

### Timestamp

Timezone: `UTC` Type: `UNIX`

### Location

Checkpoints can be added in the CMS, the ID is shown on the checkpoint page.

### Signature

The signature is calculated by:
```js
sha512(
  rfid + 
  timestamp + 
  apikey + 
  sha1(value) + // image/video sha1 
  sharedsecret
)
```
The shared secret will be given to you on registration and can be unique per city.

### Examples

In the following examples, `sharedsecret` is assumed to be "sharedsecret".

**Example image request**

```json
{
  "rfid": "1234567890",
  "checkpoint": 1,
  "timestamp": 1423055651,
  "type": "image",
  "apikey": "123456abcdef",
  "signature": "..."
}
```

Image data is expected to be the raw (multi-part) POST data.

**Example video request**

```json
{
  "rfid": "1234567890",
  "checkpoint": 1,
  "timestamp": 1423055651,
  "type": "video",
  "apikey": "123456abcdef",
  "signature": "..."
}
```

Video data is expected to be the raw (multi-part) POST data.