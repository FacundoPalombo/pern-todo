import { phi, phiRatio } from "./phi";

describe("GIVEN number phi utilities", () => {
  const mockedPhi = (1 + Math.sqrt(5)) / 2;
  it("THEN should return phi number", () => {
    expect(phi).toEqual(mockedPhi);
  });
  it("THEN should return sides in proportion of phi", () => {
    expect(phiRatio(1)).toEqual(mockedPhi * 1);
    expect(phiRatio(2)).toEqual(mockedPhi * 2);
  });
});
