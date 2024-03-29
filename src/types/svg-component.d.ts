
declare module '~virtual/svg-component' {
  const SvgIcon: import("vue").DefineComponent<{
      name: {
          type: import("vue").PropType<"icon-home-line">;
          default: string;
          required: true;
      };
  }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
      name: {
          type: import("vue").PropType<"icon-home-line">;
          default: string;
          required: true;
      };
  }>>, {
      name: "icon-home-line";
  }>;
  export const svgNames: ["icon-home-line"];
  export type SvgName = "icon-home-line";
  export default SvgIcon;
}
