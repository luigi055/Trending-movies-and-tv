import { getCookie } from "services/cookies";
import { setCookie } from ".";

const tokenStub =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaWN0dXJlIjoiaHR0dHA6Ly91cmwuY29tL2ltYWdlLnBuZyIsImVtYWlsIjoiam9obmRvZUByZWFjdC5jb20iLCJ1c2VyX2lkIjoiMTJ3ZjN3ZWY0c3NhczUiLCJuYW1lIjoiamhvbiBkb2UifQ.YPTFZ5zV1xHbPGMTAEgASHyQiL4AkmVfT0H707zD9eU";

describe("Testing cookies services", () => {
  it("should save a cookie", () => {
    const cookieName = "session_token";
    setCookie(cookieName, tokenStub, 2);

    expect(getCookie(cookieName)).toBe(tokenStub);
  });

  it("should trim the cookie when taken", () => {
    const cookieName = "session_token";
    setCookie(" " + cookieName, tokenStub, 2);

    expect(getCookie(cookieName)).toBe(tokenStub);
  });
});
