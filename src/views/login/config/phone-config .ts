const rules = {
  number: [
    {
      require: true,
      message: "手机号是必传的",
      trigger: "blur",
    },
    {
      pattern: /^[0-9]{11}$/,
      message: "手机号必须是11位数字",
      trigger: "blur",
    },
  ],
  password: [
    {
      require: true,
      message: "验证码是必传的",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{6}$/,
      message: "密码必须是6位字母或数字",
      trigger: "blur",
    },
  ],
};
export default rules;
