export async function makeGetRequest(url) {
  let res
  try {
    res = await fetch(url)
  } catch (e) {
    console.log(`${url} \n get fetch error: ${e.message}`)
    throw Error("Server is not Online")
  }
  let resultObject = {}
  try {
    resultObject = await res.json()
  } catch (e) {
    console.log(`${url} \n json parse error: ${e.message}`)
    throw Error("Json parse error")
  }

  return resultObject
}