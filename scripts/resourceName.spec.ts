import {
  PathTemplate,
  Parts,
  Comments,
  Text,
  generateTextParts,
  generateText,
} from "./resourceName";

interface TestData {
  pathTemplate: PathTemplate;
  parts: Parts;
  comments: Comments;
  text: Text;
}

const testData: TestData[] = [
  {
    pathTemplate: {
      path: "carrierConstantPathTemplate",
      bindings: { criterion_id: "*" },
      data: "carrierConstants/{criterion_id}",
    },
    parts: {
      resource: "CarrierConstant",
      typeName: "CarrierConstantResourceName",
      functionName: "carrierConstant",
      arguments: "criterionId: string | number",
      returnType: "carrierConstants/${StrNum}",
      returnValue: "carrierConstants/${criterionId}",
    },
    comments: {
      params: "* @param {string | number} criterionId",
      return: "\n* @returns `CarrierConstantResourceName`\n",
      example:
        "* @example const carrierConstant: ResourceNames.CarrierConstantResourceName = ResourceNames.carrierConstant(10987417)\n",
    },
    text: {
      comment: "/* CarrierConstant */\n",
      type:
        "export type CarrierConstantResourceName = `carrierConstants/${StrNum}`\n",
      functionComments:
        "/**\n* @param {string | number} criterionId\n* @returns `CarrierConstantResourceName`\n* @example const carrierConstant: ResourceNames.CarrierConstantResourceName = ResourceNames.carrierConstant(10987417)\n*/\n",
      function:
        "export function carrierConstant(criterionId: string | number): CarrierConstantResourceName { return `carrierConstants/${criterionId}` as const }\n\n",
    },
  },
  {
    pathTemplate: {
      path: "hotelPerformanceViewPathTemplate",
      bindings: { customer_id: "*" },
      data: "customers/{customer_id}/hotelPerformanceView",
    },
    parts: {
      resource: "HotelPerformanceView",
      typeName: "HotelPerformanceViewResourceName",
      functionName: "hotelPerformanceView",
      arguments: "customerId: string | number",
      returnType: "customers/${StrNum}/hotelPerformanceView",
      returnValue: "customers/${customerId}/hotelPerformanceView",
    },
    comments: {
      params: "* @param {string | number} customerId",
      return: "\n* @returns `HotelPerformanceViewResourceName`\n",
      example:
        "* @example const hotelPerformanceView: ResourceNames.HotelPerformanceViewResourceName = ResourceNames.hotelPerformanceView(10987417)\n",
    },
    text: {
      comment: "/* HotelPerformanceView */\n",
      type:
        "export type HotelPerformanceViewResourceName = `customers/${StrNum}/hotelPerformanceView`\n",
      functionComments:
        "/**\n* @param {string | number} customerId\n* @returns `HotelPerformanceViewResourceName`\n* @example const hotelPerformanceView: ResourceNames.HotelPerformanceViewResourceName = ResourceNames.hotelPerformanceView(10987417)\n*/\n",
      function:
        "export function hotelPerformanceView(customerId: string | number): HotelPerformanceViewResourceName { return `customers/${customerId}/hotelPerformanceView` as const }\n\n",
    },
  },
  {
    pathTemplate: {
      path: "accountBudgetPathTemplate",
      bindings: { customer_id: "*", account_budget_id: "*" },
      data: "customers/{customer_id}/accountBudgets/{account_budget_id}",
    },
    parts: {
      resource: "AccountBudget",
      typeName: "AccountBudgetResourceName",
      functionName: "accountBudget",
      arguments:
        "customerId: string | number, accountBudgetId: string | number",
      returnType: "customers/${StrNum}/accountBudgets/${StrNum}",
      returnValue: "customers/${customerId}/accountBudgets/${accountBudgetId}",
    },
    comments: {
      params:
        "* @param {string | number} customerId\n* @param {string | number} accountBudgetId",
      return: "\n* @returns `AccountBudgetResourceName`\n",
      example:
        "* @example const accountBudget: ResourceNames.AccountBudgetResourceName = ResourceNames.accountBudget(10987417, 21974834)\n",
    },
    text: {
      comment: "/* AccountBudget */\n",
      type:
        "export type AccountBudgetResourceName = `customers/${StrNum}/accountBudgets/${StrNum}`\n",
      functionComments:
        "/**\n* @param {string | number} customerId\n* @param {string | number} accountBudgetId\n* @returns `AccountBudgetResourceName`\n* @example const accountBudget: ResourceNames.AccountBudgetResourceName = ResourceNames.accountBudget(10987417, 21974834)\n*/\n",
      function:
        "export function accountBudget(customerId: string | number, accountBudgetId: string | number): AccountBudgetResourceName { return `customers/${customerId}/accountBudgets/${accountBudgetId}` as const }\n\n",
    },
  },
  {
    pathTemplate: {
      path: "adGroupCriterionSimulationPathTemplate",
      bindings: {
        customer_id: "*",
        ad_group_id: "*",
        criterion_id: "*",
        type: "*",
        modification_method: "*",
        start_date: "*",
        end_date: "*",
      },
      data:
        "customers/{customer_id}/adGroupCriterionSimulations/{ad_group_id}~{criterion_id}~{type}~{modification_method}~{start_date}~{end_date}",
    },
    parts: {
      resource: "AdGroupCriterionSimulation",
      typeName: "AdGroupCriterionSimulationResourceName",
      functionName: "adGroupCriterionSimulation",
      arguments:
        "customerId: string | number, adGroupId: string | number, criterionId: string | number, type: string | number, modificationMethod: string | number, startDate: string | number, endDate: string | number",
      returnType:
        "customers/${StrNum}/adGroupCriterionSimulations/${StrNum}~${StrNum}~${StrNum}~${StrNum}~${StrNum}~${StrNum}",
      returnValue:
        "customers/${customerId}/adGroupCriterionSimulations/${adGroupId}~${criterionId}~${type}~${modificationMethod}~${startDate}~${endDate}",
    },
    comments: {
      params:
        "* @param {string | number} customerId\n* @param {string | number} adGroupId\n* @param {string | number} criterionId\n* @param {string | number} type\n* @param {string | number} modificationMethod\n* @param {string | number} startDate\n* @param {string | number} endDate",
      return: "\n* @returns `AdGroupCriterionSimulationResourceName`\n",
      example:
        "* @example const adGroupCriterionSimulation: ResourceNames.AdGroupCriterionSimulationResourceName = ResourceNames.adGroupCriterionSimulation(10987417, 21974834, 43949668, 87899336, 175798672, 351597344, 703194688)\n",
    },
    text: {
      comment: "/* AdGroupCriterionSimulation */\n",
      type:
        "export type AdGroupCriterionSimulationResourceName = `customers/${StrNum}/adGroupCriterionSimulations/${StrNum}~${StrNum}~${StrNum}~${StrNum}~${StrNum}~${StrNum}`\n",
      functionComments:
        "/**\n* @param {string | number} customerId\n* @param {string | number} adGroupId\n* @param {string | number} criterionId\n* @param {string | number} type\n* @param {string | number} modificationMethod\n* @param {string | number} startDate\n* @param {string | number} endDate\n* @returns `AdGroupCriterionSimulationResourceName`\n* @example const adGroupCriterionSimulation: ResourceNames.AdGroupCriterionSimulationResourceName = ResourceNames.adGroupCriterionSimulation(10987417, 21974834, 43949668, 87899336, 175798672, 351597344, 703194688)\n*/\n",
      function:
        "export function adGroupCriterionSimulation(customerId: string | number, adGroupId: string | number, criterionId: string | number, type: string | number, modificationMethod: string | number, startDate: string | number, endDate: string | number): AdGroupCriterionSimulationResourceName { return `customers/${customerId}/adGroupCriterionSimulations/${adGroupId}~${criterionId}~${type}~${modificationMethod}~${startDate}~${endDate}` as const }\n\n",
    },
  },
];

describe("generateTextParts", () => {
  const testedTextParts = testData.map((test) =>
    generateTextParts(test.pathTemplate)
  );

  it("creates a name for the resource", () => {
    const testedResources = testedTextParts.map((t) => t.parts.resource);
    const expectedResources = testData.map((t) => t.parts.resource);
    expect(testedResources).toEqual(expectedResources);
  });

  it("creates a type name for the resource", () => {
    const testedTypeNames = testedTextParts.map((t) => t.parts.typeName);
    const expectedTypeNames = testData.map((t) => t.parts.typeName);
    expect(testedTypeNames).toEqual(expectedTypeNames);
  });

  it("creates a function name for the resource", () => {
    const testedFunctionNames = testedTextParts.map(
      (t) => t.parts.functionName
    );
    const expectedFunctionNames = testData.map((t) => t.parts.functionName);
    expect(testedFunctionNames).toEqual(expectedFunctionNames);
  });

  it("creates a function arguments string for the resource", () => {
    const testedFunctionArguments = testedTextParts.map(
      (t) => t.parts.arguments
    );
    const expectedFunctionArguments = testData.map((t) => t.parts.arguments);
    expect(testedFunctionArguments).toEqual(expectedFunctionArguments);
  });

  it("creates a return type string for the resource", () => {
    const testedReturnTypes = testedTextParts.map((t) => t.parts.returnType);
    const expectedReturnTypes = testData.map((t) => t.parts.returnType);
    expect(testedReturnTypes).toEqual(expectedReturnTypes);
  });

  it("creates a return value string for the resource", () => {
    const testedReturnValues = testedTextParts.map((t) => t.parts.returnValue);
    const expectedReturnValues = testData.map((t) => t.parts.returnValue);
    expect(testedReturnValues).toEqual(expectedReturnValues);
  });

  it("creates param comments for the resource", () => {
    const testedParamComments = testedTextParts.map((t) => t.comments.params);
    const expectedParamComments = testData.map((t) => t.comments.params);
    expect(testedParamComments).toEqual(expectedParamComments);
  });

  it("creates a return comment for the resource", () => {
    const testedReturnComment = testedTextParts.map((t) => t.comments.return);
    const expectedReturnComment = testData.map((t) => t.comments.return);
    expect(testedReturnComment).toEqual(expectedReturnComment);
  });

  it("creates an example comment for the resource", () => {
    const testedExampleComments = testedTextParts.map(
      (t) => t.comments.example
    );
    const expectedExampleComments = testData.map((t) => t.comments.example);
    expect(testedExampleComments).toEqual(expectedExampleComments);
  });
});

describe("generateText", () => {
  const testedText = testData.map((test) =>
    generateText(test.parts, test.comments)
  );

  it("creates a comment for the resource", () => {
    const testedResources = testedText.map((t) => t.comment);
    const expectedResources = testData.map((t) => t.text.comment);
    expect(testedResources).toEqual(expectedResources);
  });

  it("creates a type for the resource", () => {
    const testedTypes = testedText.map((t) => t.type);
    const expectedTypes = testData.map((t) => t.text.type);
    expect(testedTypes).toEqual(expectedTypes);
  });

  it("creates function comments for the resource", () => {
    const testedFunctionComments = testedText.map((t) => t.functionComments);
    const expectedFunctionComments = testData.map(
      (t) => t.text.functionComments
    );
    expect(testedFunctionComments).toEqual(expectedFunctionComments);
  });

  it("creates a function for the resource", () => {
    const testedFunctions = testedText.map((t) => t.function);
    const expectedFunctions = testData.map((t) => t.text.function);
    expect(testedFunctions).toEqual(expectedFunctions);
  });
});
