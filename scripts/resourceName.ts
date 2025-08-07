import fs from "fs";
import { CampaignServiceClient } from "google-ads-node";
import { toCamelCase, capitaliseFirstLetter } from "../src/utils";
import { FILES } from "./path";

export interface PathTemplate {
  path: string;
  bindings: { [index: string]: string | number };
  data: string;
}

export interface Parts {
  resource: string; // "AccountBudget"
  typeName: string; // "AccountBudgetResourceName"
  functionName: string; // "accountBudget"
  arguments: string; // "customerId: string | number, accountBudgetId: string | number"
  returnType: string; // "customers/${StrNum}/accountBudgets/${StrNum}""
  returnValue: string; // "customers/${customerId}/accountBudgets/${accountBudgetId}""
}

export interface Comments {
  params: string; // "* @param {string | number} customerId \n * @param {string | number} accountBudgetId"
  return: string; // "* @returns `AccountBudgetResourceName`"
  example: string; // "* @example const accountBudget: ResourceNames.AccountBudgetResourceName = ResourceNames.accountBudget(10987417, 21974834)"
}

interface Bindings {
  arguments: string[]; // ["customerId: string | number", "accountBudgetId: string | number"]
  params: string[]; // ["* @param {string | number} customerId", "* @param {string | number} accountBudgetId"]
  exampleArgs: string[]; // [10987417, 21974834]
}

export interface Text {
  comment: string; // "/* AccountBudget */"
  type: string; // "export type AccountBudgetResourceName = `customers/${StrNum}/accountBudgets/${StrNum}`"
  functionComments: string; // "/**\n* @param {string | number} customerId\n* @param {string | number} accountBudgetId\n* @returns `AccountBudgetResourceName`\n* @example const accountBudget: ResourceNames.AccountBudgetResourceName = ResourceNames.accountBudget(10987417, 21974834)\n*/"
  function: string; // "export function accountBudget(customerId: string | number, accountBudgetId: string | number): AccountBudgetResourceName { return `customers/${customerId}/accountBudgets/${accountBudgetId}` as const }"
}

export function generateTextParts(pathTemplate: PathTemplate): {
  parts: Parts;
  comments: Comments;
} {
  const resource = pathTemplate.path.replace(/PathTemplate/g, "");

  const parts: Parts = {
    resource: capitaliseFirstLetter(resource),
    typeName: capitaliseFirstLetter(`${resource}ResourceName`),
    functionName: resource,
    arguments: "",
    returnType: pathTemplate.data,
    returnValue: pathTemplate.data,
  };

  const comments: Comments = {
    params: "",
    return: `\n* @returns \`${parts.typeName}\`\n`,
    example: `* @example const ${resource}: ResourceNames.${parts.typeName} = ResourceNames.${parts.functionName}(`,
  };

  const bindings: Bindings = { arguments: [], params: [], exampleArgs: [] };
  let exampleId = 10987417;

  Object.keys(pathTemplate.bindings).forEach((snakeArg: string) => {
    const camelArg = toCamelCase(snakeArg);

    const re = new RegExp(`{${snakeArg}}`, "g");
    parts.returnType = parts.returnType.replace(re, `\${StrNum}`);
    parts.returnValue = parts.returnValue.replace(re, `\${${camelArg}}`);

    bindings.arguments.push(`${camelArg}: string | number`);
    bindings.params.push(`* @param {string | number} ${camelArg}`);
    bindings.exampleArgs.push(`${exampleId}`);
    exampleId = exampleId * 2;
  });

  parts.arguments = bindings.arguments.join(`, `);
  comments.params = bindings.params.join(`\n`);
  comments.example = comments.example.concat(
    `${bindings.exampleArgs.join(`, `)})\n`
  );

  return { parts, comments };
}

export function generateText(parts: Parts, comments: Comments): Text {
  return {
    comment: `/* ${parts.resource} */\n`,
    type: `export type ${parts.typeName} = \`${parts.returnType}\`\n`,
    functionComments: `/**\n${comments.params}${comments.return}${comments.example}*/\n`,
    function: `export function ${parts.functionName}(${parts.arguments}): ${parts.typeName} { return \`${parts.returnValue}\` as const }\n\n`,
  };
}

function buildResourceNameBuilder(stream: fs.WriteStream, text: Text): void {
  stream.write(text.comment);
  stream.write(text.type);
  stream.write(text.functionComments);
  stream.write(text.function);
}

export async function compileResourceNameFunctions(): Promise<void> {
  const service = new CampaignServiceClient();

  const pathTemplatesRaw = service.pathTemplates;

  const pathTemplates = Object.entries(pathTemplatesRaw).map(
    ([path, template]) => {
      // Extract bindings from segments (public property)
      const bindings: { [key: string]: string } = {};
      template.segments.forEach((segment) => {
        const match = segment.match(/\{([^=}]+)(?:=([^}]+))?\}/);
        if (match) {
          bindings[match[1]] = match[2] || "*";
        }
      });

      // Use inspect() to get the template string
      const data = template.inspect();

      return {
        path,
        bindings,
        data,
      };
    }
  );

  const stream = fs.createWriteStream(FILES.resourceNames);

  stream.write(`/* Autogenerated File! Do Not Edit */\n\n`);
  stream.write(`type StrNum = string | number\n\n`);

  pathTemplates.forEach((pathTemplate: PathTemplate) => {
    const { parts, comments } = generateTextParts(pathTemplate);
    const text = generateText(parts, comments);
    buildResourceNameBuilder(stream, text);
  });
}
