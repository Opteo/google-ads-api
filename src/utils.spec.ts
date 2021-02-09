import {
  fromMicros,
  toMicros,
  normaliseQuery,
  capitaliseFirstLetter,
  toCamelCase,
  toSnakeCase,
  recursiveFieldMaskSearch,
} from "./utils";

describe("fromMicros", () => {
  it("should convert micro amounts to a normal money value", () => {
    const tests: [number, number][] = [
      [0, 0],
      [1_000_000, 1],
      [12_500_000, 12.5],
      [57_742_187_913, 57742.187913],
    ];
    for (const [input, expected] of tests) {
      expect(fromMicros(input)).toEqual(expected);
    }
  });
});

describe("toMicros", () => {
  it("should convert money values to micro format", () => {
    const tests: [number, number][] = [
      [0, 0],
      [1, 1_000_000],
      [12.5, 12_500_000],
      [57742.187913, 57_742_187_913],
    ];
    for (const [input, expected] of tests) {
      expect(toMicros(input)).toEqual(expected);
    }
  });
});

describe("normaliseQuery", () => {
  it("replaces multiple whitespace with single whitespace", () => {
    const query = `SELECT campaign.name
      FROM campaign
      LIMIT 10`;

    expect(normaliseQuery(query)).toEqual(
      "SELECT campaign.name FROM campaign LIMIT 10"
    );
  });
});

describe("capitaliseFirstLetter", () => {
  it("capitalises a string", () => {
    const tests = [
      {
        uncapitalised: "ad_group_criterion_simulation",
        capitalised: "Ad_group_criterion_simulation",
      },
      {
        uncapitalised: "adGroupCriterionSimulation",
        capitalised: "AdGroupCriterionSimulation",
      },
      {
        uncapitalised: "AdGroupCriterionSimulation",
        capitalised: "AdGroupCriterionSimulation",
      },
    ];

    tests.forEach(({ uncapitalised, capitalised }) => {
      expect(capitaliseFirstLetter(uncapitalised)).toEqual(capitalised);
    });
  });
});

describe("toCamelCase", () => {
  it("converts space case to camel case", () => {
    expect(toCamelCase("this is a space case")).toEqual("thisIsASpaceCase");
  });
  it("converts snake case to camel case", () => {
    expect(toCamelCase("this_is_a_snake_case")).toEqual("thisIsASnakeCase");
  });
  it("converts title case to camel case", () => {
    expect(toCamelCase("This Is A Title Case")).toEqual("thisIsATitleCase");
  });
  it("preserves camel case", () => {
    expect(toCamelCase("thisIsACamelCase")).toEqual("thisIsACamelCase");
  });
});

describe("toSnakeCase", () => {
  it("converts space case to snake case", () => {
    expect(toSnakeCase("this is a space case")).toEqual("this_is_a_space_case");
  });
  it("converts camel case to snake case", () => {
    expect(toSnakeCase("thisIsACamelCase")).toEqual("this_is_a_camel_case");
  });
  it("converts title case to snake case", () => {
    expect(toSnakeCase("This Is A Title Case")).toEqual("this_is_a_title_case");
  });
  it("preserves snake case", () => {
    expect(toSnakeCase("this_is_a_snake_case")).toEqual("this_is_a_snake_case");
  });
});

describe("recursiveFieldMaskSearch", () => {
  it("returns the keys of a single layered object in snake case", () => {
    const input = { key: true, secondKey: false, thirdKey: true };
    const output = ["key", "second_key", "third_key"];

    expect(recursiveFieldMaskSearch(input)).toEqual(output);
  });

  it("ignores the key resourceName", () => {
    const input = { key: true, resourceName: false, thirdKey: true };
    const output = ["key", "third_key"];

    expect(recursiveFieldMaskSearch(input)).toEqual(output);
  });

  it("recursively gets keys", () => {
    const input = {
      key: {
        childKey: {
          grandChildKey: {
            greatGrandChildKey: true,
            secondGreatGrandChildKey: {
              greatGreatGrandChildKey: false,
            },
          },
        },
        secondChildKey: false,
        thirdChildKey: {
          secondGrandChildKey: true,
        },
      },
    };

    expect(recursiveFieldMaskSearch(input)).toEqual([
      "key.child_key.grand_child_key.great_grand_child_key",
      "key.child_key.grand_child_key.second_great_grand_child_key.great_great_grand_child_key",
      "key.second_child_key",
      "key.third_child_key.second_grand_child_key",
    ]);
  });
});
