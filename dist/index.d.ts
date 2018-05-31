import Vue from "vue";
import { ThisTypedComponentOptionsWithArrayProps, ThisTypedComponentOptionsWithRecordProps, FunctionalComponentOptions, RecordPropsDefinition, ComponentOptions } from "vue/types/options";
declare function asComponentOptions<Data, Methods, Computed, PropNames extends string = never>(options: ThisTypedComponentOptionsWithArrayProps<Vue, Data, Methods, Computed, PropNames>): ThisTypedComponentOptionsWithArrayProps<Vue, Data, Methods, Computed, PropNames>;
declare function asComponentOptions<Data, Methods, Computed, Props>(options: ThisTypedComponentOptionsWithRecordProps<Vue, Data, Methods, Computed, Props>): ThisTypedComponentOptionsWithRecordProps<Vue, Data, Methods, Computed, Props>;
declare function asComponentOptions<PropNames extends string = never>(definition: FunctionalComponentOptions<Record<PropNames, any>, PropNames[]>): FunctionalComponentOptions<Record<PropNames, any>, PropNames[]>;
declare function asComponentOptions<Props>(definition: FunctionalComponentOptions<Props, RecordPropsDefinition<Props>>): FunctionalComponentOptions<Props, RecordPropsDefinition<Props>>;
declare function asComponentOptions(options: ComponentOptions<Vue>): ComponentOptions<Vue>;
export default asComponentOptions;
