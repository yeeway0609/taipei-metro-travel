import { TrackInfo } from '@/lib/types'

const USER_NAME = process.env.METRO_API_USER_NAME
const PASS_WORD = process.env.METRO_API_PASS_WORD

export async function getTrackInfo() {
  const options = {
    method: 'POST',
    headers: { 'Content-type': 'text/xml; charset=utf-8' },
    body: `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:xsd="http://www.w3.org/2001/XMLSchema"
      xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
      <getTrackInfo xmlns="http://tempuri.org/">
      <userName>${USER_NAME}</userName>
      <passWord>${PASS_WORD}</passWord>
      </getTrackInfo>
      </soap:Body>
      </soap:Envelope>`,
  }

  try {
    const response = await fetch('https://api.metro.taipei/metroapi/TrackInfo.asmx', options)

    let xmlString = await response.text()

    const soapIndex = xmlString.indexOf('<?xml version="1.0" encoding="utf-8"?>')
    if (soapIndex !== -1) {
      xmlString = xmlString.slice(0, soapIndex)
    }

    const json = JSON.parse(xmlString)

    return json as TrackInfo[]
  } catch (error) {
    console.error('解析錯誤', error)
  }
}
