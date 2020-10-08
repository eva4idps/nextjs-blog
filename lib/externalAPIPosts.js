import { makeGetRequest } from "./apiManager"

export async function getSortedPostsData() {
  return makeGetRequest('https://emma.pixnet.cc/users/nigi33kimo')
}