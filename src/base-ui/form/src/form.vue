<template>
  <div class="hyform">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="collayout">
            <el-form-item
              :style="itemStyle"
              :label="item.label"
              :rules="item.rules"
              v-if="!item.isHidden"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                  :show-password="item.type === 'password'"
                  :placeholder="item.placeholder"
                >
                </el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                  style="width: 100%"
                  :placeholder="item.placeholder"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                  v-bind="item.otheroptions"
                >
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, watch, computed } from "vue";
import { IFromItem, IFrom } from "../type/index";

export default defineComponent({
  props: {
    modelValue: {
      require: true,
      type: Object,
    },
    formItems: {
      type: Array as PropType<IFromItem[]>,
      default: () => [],
    },
    labelWidth: {
      type: String,
      default: "100px",
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: "10px 40px" }),
    },
    collayout: {
      type: Object,
      default: () => ({
        xl: 6,
        la: 8,
        md: 12,
        sm: 24,
        xs: 24,
      }),
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    // const formData = ref({ ...props.modelValue })
    // watch(
    //   formData,
    //   (newValue) => {
    //     console.log(newValue);
    //     emit("update:modelValue", newValue);
    //   },
    //   {
    //     deep: true,
    //   }
    // );
    const handleValueChange = (value: any, field: string) => {
      emit("update:modelValue", { ...props.modelValue, [field]: value });
    };
    return {
      // formData,
      handleValueChange,
    };
  },
});
</script>

<style lang="less" scoped>
.hyform {
  padding-top: 22px;
  // .form-item{
  //   padding: 5px 30px;
  // }
}
</style>
