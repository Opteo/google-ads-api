declare module "circ-json" {
  export function parse(str: string): Record<string, unknown>;
  export function stringify(obj: unknown, space?: string | number): string;
}
