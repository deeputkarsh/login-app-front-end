let AuthUser
export const Auth = {
  register: (apiUser = {}) => {
    AuthUser = new User(apiUser)
    LocalStorageHelper.register(AuthUser)
  },

  isLoggedIn: () => {
    return !!AuthUser || !!LocalStorageHelper.getUser() || false
  },

  deregister: () => {
    LocalStorageHelper.deregister()
    AuthUser = undefined
  },

  getUser: () => {
    return AuthUser || LocalStorageHelper.getUser()
  },

  getToken: () => {
    let token = ''
    if (AuthUser) {
      token = 'Bearer ' + AuthUser.token
    } else {
      const localUser = LocalStorageHelper.getUser()
      if (localUser) {
        token = 'Bearer ' + localUser.token
      }
    }
    return token
  },

  getUserName: () => {
    let userName = ''
    if (AuthUser) {
      userName = AuthUser.username
    } else {
      const localUser = LocalStorageHelper.getUser()
      if (localUser) {
        userName = localUser.username
      }
    }
    return userName
  }
}

class User {
  constructor ({ id, name, token, email, mobile }) {
    this.id = id
    this.token = token
    this.username = name
  }
}

const { btoa, atob, localStorage } = window || {}
const LocalStorageHelper = {
  register (userObj) {
    const encodedObj = EncodeDecode.encode(JSON.stringify(userObj))
    localStorage.setItem('USER', encodedObj)
  },
  deregister () {
    localStorage.clear()
  },
  getUser () {
    let user = ''
    if (localStorage.getItem('USER')) {
      user = EncodeDecode.decode(localStorage.getItem('USER'))
      user = JSON.parse(user)
    }
    return user
  }
}

const EncodeDecode = {
  encode (data) {
    let encodedData = ''
    if (data) {
      const isObject = data => data && data.constructor && data.constructor === Object
      encodedData = isObject ? btoa(data) : ''
    }
    return encodedData
  },
  decode (data) {
    let decodedData = ''
    decodedData = data ? atob(data) : ''
    return decodedData
  }
}
