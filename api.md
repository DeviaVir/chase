# Media API 1.0

**Endpoint**: `/api/v1/media`

The "media" API endpoint allows you to submit photo's and/or videos to the Adidas Energy Takeover platform. The API expects an HTTP **POST** with media attached as raw multi-part data and a `urlencoded` (form posted) JSON that contains the details of your request, examples of JSONs can be found below. 

More information about the timestamp, location checkpoints and signature can be found below.

### Timestamp

Timezone: `UTC`
Type: `UNIX`

Example: **1423055651**: 02/04/2015 @ 1:14pm (UTC)

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