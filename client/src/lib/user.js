import Cookies from "js-cookie";

export function setUserData(name, username, userid) {
  Cookies.set("name", name, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
  });
  Cookies.set("username", username, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
  });
  Cookies.set("userid", userid, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
  });
}

export function getUserData() {
  const name = Cookies.get("name");
  const email = Cookies.get("username");
  const userid = Cookies.get("userid");

  return {
    name,
    email,
    userid,
  };
}
