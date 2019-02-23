/* eslint-disable */
import router from '@router/index'
import state from '@state/store'
/* eslint-enable */
import * as utils from "@utils/oidc";

import interceptors from "@api/interceptors";

describe("@api/Interceptors", () => {
  const testConfig = {
    headers: {}
  };
  beforeEach(() => {
    jest.mock("@router/index");
    jest.mock("@state/store");
    jest.mock("@utils/oidc");
  });

  describe("authorizationHeaderInterceptor method", () => {
    it("should set authorization header when user is authorized for request", () => {
      // arrange
      utils.isAuthorizedForApiRequest = jest.fn().mockReturnValueOnce(true);

      // act
      const request = interceptors.request[0](testConfig);

      // assert
      expect(request.headers.Authorization).not.toBe(null);
      expect(request.headers.Authorization).toContain("Bearer");
    });

    it("should not set authorization header when user not authorized for request", () => {
      // arrange
      testConfig.headers = {};
      utils.isAuthorizedForApiRequest.mockReturnValueOnce(false);

      // act
      const request = interceptors.request[0](testConfig);

      // assert
      expect(request.headers).toBe(testConfig.headers);
      expect(request.headers.Authorization).toBe(undefined);
    });
  });

  describe("unauthorizedInterceptor method", () => {
    describe("fulfilled scenario", () => {
      it("should return response", () => {
        // arrange
        const testResponse = {
          some: "response"
        };

        // act
        const fulfilledResponse = interceptors.response[0].fulfilled(
          testResponse
        );

        // assert
        expect(fulfilledResponse).toBe(testResponse);
      });
    });

    describe("rejected scenario", () => {
      it("should push error to rejected promise when 500", () => {
        // arrange
        const testError = {
          response: {
            message: "some Error because: badness.",
            status: 500
          }
        };
        // act
        const rejectedResponsePromise = interceptors.response[0].rejected(
          testError
        );

        // assert
        expect(rejectedResponsePromise).rejects.toThrow(testError);
      });
    });
  });
});
