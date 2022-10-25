import { IFrom } from "../../../../../base-ui/form/type";
export const searchFormConfig: IFrom = {
  labelWidth: "120px",
  itemLayout: { padding: "20px 40px" },
  collayout: {
    span: 8,
    xl: 6,
    la: 8,
    md: 12,
    sm: 24,
    xs: 24,
  },
  formItems: [
    {
      field: "id",
      type: "input",
      label: "id",
      placeholder: "请输入id",
    },
    {
      field: "name",
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名",
    },
    {
      field: "realname",
      type: "input",
      label: "真实姓名",
      placeholder: "请输入真实姓名",
    },
    {
      field: "cellphone",
      type: "input",
      label: "电话号码",
      placeholder: "请输入电话号码",
    },
    {
      field: "enable",
      type: "select",
      label: "用户状态",
      placeholder: "请选择用户状态",
      options: [
        { title: "启用", value: 1 },
        { title: "禁用", value: 0 },
      ],
    },
    {
      field: "createAt",
      type: "datepicker",
      label: "创建时间",
      otheroptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange",
      },
    },
  ],
};
