# adidas Energy Takeover API 1.0

**Endpoint**: `/api/v1/checkin`

The "checkin" API endpoint allows you to submit time checkin's for participants. The API expects an HTTP **POST** with a `urlencoded` (form posted) JSON that contains the details of your request. 

More information about the arguments can be found below.

## Examples

**Example checkin request**

```json
{
  "rfid": "1234567890",
  "checkpoint": 1,
  "timestamp": 1423055651,
  "apikey": "123456abcdef",
  "signature": "..."
}
```

## Arguments

## RFID

The unique RFID ID scanned from the participant. Should be passed as `string`.

### Checkpoint

Checkpoints can be added in the CMS, the ID is shown on the checkpoint page. A checkpoint is connected to a location, this is used to place the participant on a map at a certain time. Should be passed as `number`.

### Timestamp

Timezone: `UTC`
Type: `UNIX`

Example: **1423055651**: 02/04/2015 @ 1:14pm (UTC)

Should be passed as `number`.

### APIKey

The API key will be given to you on registration and can be unique per run. Should be passed as `string`.

### Signature

The signature is calculated by:
```js
sha512(
  rfid + 
  timestamp + 
  apikey + 
  sharedsecret
)
```
The shared secret will be given to you on registration and can be unique per run. Should be passed as `string`.
