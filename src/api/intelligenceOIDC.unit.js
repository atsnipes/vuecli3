import IntelligenceOIDC from './intelligenceOIDC'
import axios from '@api/client'

describe('IntelligenceOIDC interface', () => {

  // Setup spy funcs
  const postSpy = jest.spyOn(axios, 'post');
  const getSpy = jest.spyOn(axios, 'get');

  describe('getQlikSession', () => {
    it('returns qlikJwt session token, when called with the expected payload', () => {
      // Arrange
      const accountId = "5988C8FB-C918-479C-9E45-68111D71CF41"
      const responseData = {
        data: "1231231231231asdasdasdasdadsadsasd"
      }
      const userContext = {
        UserId: 'SANTA CLAWS',
        UserDirectory: 'PET SEMINARY',
      }

      // Act
      IntelligenceOIDC.getQlikSession(userContext, accountId)
        .then(result => {
          // Assert
          expect(result).toEqual(JSON.parse(responseData.data))
          expect(postSpy).toHaveBeenCalledTimes(1)
          expect(postSpy).toHaveBeenCalledWith(userContext, accountId)
        })
    })
  })

  describe('getAccountUserNavigation', () => {
    it('returns navigation data for the specific account user', () => {
      // Arrange
      const accountId = "5988C8FB-C918-479C-9E45-68111D71CF41";
      const responseData = {
        data: [{
            what: 'dudes'
          },
          {
            whaaaattt: 'dddduuuudddeeess'
          }
        ]
      }

      // Act
      IntelligenceOIDC.getAccountUserNavigation(accountId)
        .then(result => {
          // Assert
          expect(result).toBe(responseData.data)
          expect(getSpy).toHaveBeenCalledTimes(1)
          expect(getSpy).toHaveBeenCalledWith(accountId)
        })

    })
  })

  describe('isAccountUserFeatureAllowed', () => {
    it('sends a request to IntelligenceOIDC as expected', () => {
      // Arrange
      const accountId = '5988C8FB-C918-479C-9E45-68111D71CF41'
      const featureId = 'last action hero'
      const marketName = 'what'
      const submarketName = 'huh'
      const responseData = {}

      // Act
      IntelligenceOIDC.isAccountUserFeatureAllowed(marketName, submarketName, accountId, featureId)
        .then(result => {
          // Assert
          expect(result).toBe(responseData)
          expect(getSpy).toHaveBeenCalledTimes(1)
          expect(getSpy).toHaveBeenCalledWith(accountId)
        })
    })
  })

  describe('getUserAccount', () => {
    it('makes a get request', () => {
      // Arrange & Act
      IntelligenceOIDC.getUserAccount()
      .then(result => {
        // Assert
        expect(getSpy).toHaveBeenCalledTimes(1)
        expect(getSpy).not.toHaveBeenCalledWith(expect.anything())
      })
    })
  })
})
