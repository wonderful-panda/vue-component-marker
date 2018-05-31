/*
 * This code is originated from vue.js (https://github.com/vuejs/vue)
 *  (which published under the MIT license, Copyright (c) 2013-present, Yuxi (Evan) You)
 */
import Vue from "vue";
import {
  ThisTypedComponentOptionsWithArrayProps,
  ThisTypedComponentOptionsWithRecordProps,
  FunctionalComponentOptions,
  RecordPropsDefinition,
  ComponentOptions
} from "vue/types/options";

function asComponentOptions<
  Data,
  Methods,
  Computed,
  PropNames extends string = never
>(
  options: ThisTypedComponentOptionsWithArrayProps<
    Vue,
    Data,
    Methods,
    Computed,
    PropNames
  >
): ThisTypedComponentOptionsWithArrayProps<
  Vue,
  Data,
  Methods,
  Computed,
  PropNames
>;

function asComponentOptions<Data, Methods, Computed, Props>(
  options: ThisTypedComponentOptionsWithRecordProps<
    Vue,
    Data,
    Methods,
    Computed,
    Props
  >
): ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
>;

function asComponentOptions<PropNames extends string = never>(
  definition: FunctionalComponentOptions<Record<PropNames, any>, PropNames[]>
): FunctionalComponentOptions<Record<PropNames, any>, PropNames[]>;

function asComponentOptions<Props>(
  definition: FunctionalComponentOptions<Props, RecordPropsDefinition<Props>>
): FunctionalComponentOptions<Props, RecordPropsDefinition<Props>>;

function asComponentOptions(
  options: ComponentOptions<Vue>
): ComponentOptions<Vue>;

function asComponentOptions(options: any): any {
  return options;
}

export default asComponentOptions;
