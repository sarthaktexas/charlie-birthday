const AirtablePlus = require("airtable-plus")

const airtable = new AirtablePlus({
  baseID: process.env.AIRTABLE_BASE_ID,
  apiKey: process.env.AIRTABLE_API_KEY,
  tableName: process.env.AIRTABLE_TABLE_NAME,
  transform: (r) => {
    return r.fields
  }
})


export default async (_, res) => {
  let readRes = await airtable.read();
  res.status(200).send(readRes)
}
