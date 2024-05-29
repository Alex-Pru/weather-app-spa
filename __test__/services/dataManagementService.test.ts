import { DataManagementService } from "@/services/DataManagementService";
import { data } from "./mockData";
import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

describe("Should manage information from API", () => {
  beforeEach(() => {
    fetchMock.doMock(JSON.stringify(data));
  });
  it("Should return an object with all the current information of the selected city", async () => {
    const dataManagerService = new DataManagementService();
    const londonInfo = await dataManagerService.getCityCurrentData("london");

    // The name of the country is set to upperCase after parsed
    expect(londonInfo.name).toBe("LONDON");
  });

  it("Should return an array with the temperature in different moments of the day", async () => {
    const dataManagerService = new DataManagementService();
    const arrayTimestamps = await dataManagerService.getCityForecastData(
      "london"
    );

    expect(arrayTimestamps).toHaveLength(4);
    expect(arrayTimestamps[0].name).toBe("dawn");
    expect(arrayTimestamps[0].condition).toBe("rainy");
    expect(arrayTimestamps[0].temperature).toBe(11.8);
  });
});
