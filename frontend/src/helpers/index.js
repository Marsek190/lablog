import { isEmpty } from 'lodash'
import axios from 'axios'

export const setHttpToken = token => {
  if (isEmpty(token)) {
    axios.defaults.headers.common['Authorization'] = null
  } else {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
  }
}
