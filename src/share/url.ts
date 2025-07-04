

const URLs = {
  authorize: {
    callback: "/authorize/callback",
    login: "/authorize/login",
    logout: "/authorize/logout",
  },
  home: "/home",
  setting: {
    menu: "/setting",
    password: "/setting/password",
    profile: "/setting/profile",
    totp: {
      list: "/setting/totp",
      add: "/setting/totp/register",
    }
  }
}

export default URLs;