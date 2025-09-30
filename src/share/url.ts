import { BreadcrumbMap, URLLabelMap, URLMap } from '@component/url/type';

export const URLs: URLMap = {
  home: "/home",

  authorize_callback: "/authorize/callback",
  authorize_login: "/authorize/login",
  authorize_logout: "/authorize/logout",
  authorize_totp: "/authorize/totp",

  registration: "/registration",
  registration_validation: "/registration/validation/:token",

  setting: "/setting",
  setting_password: "/setting/password",
  setting_profile: "/setting/profile",
  setting_totp: "/setting/totp",
  setting_totp_register: "/setting/totp/register",
};

export const URLLabels: URLLabelMap<typeof URLs> = {
  home: "Home",

  authorize_callback: "Authorize Callback",
  authorize_login: "Login",
  authorize_logout: "Logout",
  authorize_totp: "Two-Factor Authentication",

  registration: "Registration",
  registration_validation: "Registration Validation",

  setting: "Settings",
  setting_password: "Password",
  setting_profile: "Profile",
  setting_totp: "Two-Factor Authentication",
  setting_totp_register: "Register Two-Factor",
}

export const Breadcrumbs: BreadcrumbMap<typeof URLs> = {
  registration_validation: ["registration"],

  setting_password: ["setting"],
  setting_profile: ["setting"],
  setting_totp: ["setting"],
  setting_totp_register: ["setting"],
}