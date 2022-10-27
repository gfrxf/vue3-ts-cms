type IFormType = "input" | "password" | "select" | "datepicker";
export interface IFromItem {
  field: string;
  type: IFormType;
  label: string;
  rules?: any[];
  placeholder?: any;
  // 针对select
  options?: any[];
  // 针对的特殊属性
  otheroptions?: any;
  isHidden?: boolean;
}
export interface IFrom {
  formItems: IFromItem[];
  labelWidth?: string;
  collayout?: any;
  itemLayout?: any;
}
