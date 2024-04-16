import Cookies from "js-cookie";

export function setUserData(name, username, userid) {
  Cookies.set("name", name);
  Cookies.set("username", username);
  Cookies.set("userid", userid);
}

export function getUserData() {
  const name = Cookies.get("name");
  const email = Cookies.get("username");
  const userid = Cookies.get("userId");

  return {
    name,
    email,
    userid,
  };
}
