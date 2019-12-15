function login() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  if (username.value === "123" && password.value === "123") {
      alert("恭喜亲亲登录成功哟！");
  } else {
      password.value = "";
  }
}