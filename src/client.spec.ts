import { Client } from "./client";
import { Service } from "./service";

describe("listAccessibleCustomers", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  const newClient = () =>
    new Client({
      client_id: "MOCK_CLIENT_ID",
      client_secret: "MOCK_CLIENT_SECRET",
      developer_token: "MOCK_DEVELOPER_TOKEN",
    });

  it("closes the one-shot customer service after the call", async () => {
    const client = newClient();
    const close = jest.fn().mockResolvedValue(undefined);
    const listAccessibleCustomers = jest
      .fn()
      .mockResolvedValue([{ resource_names: ["customers/123"] }]);

    const loadServiceSpy = jest
      .spyOn(Service.prototype as any, "loadService")
      .mockReturnValue({ listAccessibleCustomers, close });

    const response = await client.listAccessibleCustomers("MOCK_REFRESH_TOKEN");

    expect(response).toEqual({ resource_names: ["customers/123"] });
    expect(loadServiceSpy).toHaveBeenCalledWith("CustomerServiceClient", {
      skipCache: true,
    });
    expect(close).toHaveBeenCalledTimes(1);
  });

  it("closes the one-shot customer service when the call fails", async () => {
    const client = newClient();
    const close = jest.fn().mockResolvedValue(undefined);

    jest.spyOn(Service.prototype as any, "loadService").mockReturnValue({
      listAccessibleCustomers: jest
        .fn()
        .mockRejectedValue(new Error("rpc failed")),
      close,
    });
    jest.spyOn(console, "log").mockImplementation(() => undefined);

    await expect(
      client.listAccessibleCustomers("MOCK_REFRESH_TOKEN")
    ).rejects.toThrow("rpc failed");
    expect(close).toHaveBeenCalledTimes(1);
  });
});
