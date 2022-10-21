import {IFrom} from '../../../../../base-ui/form/type'
export     const searchFormConfig: IFrom = {
  labelWidth: "120px",
  itemLayout: { padding: '20px 40px' },
  collayout: {
    span: 8,
    xl:6,
    la:8,
    md:12,
    sm:24,
    xs:24

  },
  formItems: [
    {
      type: "input",
      label: "id",
      placeholder: "请输入id",
    },
    {
      label: "用户名",
      type: "input",
      placeholder: "请输入用户名",
    },
    {
      label: "密码",
      type: "password",
      placeholder: "请输入密码",
    },
    {
      label: "喜欢的运动",
      type: "select",
      placeholder: "请选择喜欢的运动",
      options: [
        {
          title: "篮球",
          value: "basketball",
        },
        {
          title: "足球",
          value: "footerball",
        },
      ],
    },
    {
      label: "创建时间",
      type: "datepicker",
      otheroptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange",
      },
    },
  ],
};
