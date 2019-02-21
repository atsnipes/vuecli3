import axios from 'axios'
import qlikClient from '@api/qlik'

describe('@api/qlik', () => {
  let axiosCreateSpy;
  let axiosRequestSpy;

  beforeAll(() => {
    jest.mock('axios')
    axiosCreateSpy = jest.spyOn(axios, 'create')
    axiosRequestSpy = jest.spyOn(qlikClient, 'getBeaconImage')
  })

  it('has the expected properties', () => {
    expect(qlikClient.getBeaconImage).not.toBe('undefined')
    expect(typeof qlikClient.getBeaconImage).toBe('function')
  })

  describe('getBeaconImage', () => {
    it('calls axios functions for setup purposes', () => {
      // Arrange
      const BareBear = 'Whats with hairless stuffed animals?'

      // Act
      qlikClient.getBeaconImage(BareBear)
        .then(_ => {
          // Assert
          expect(axiosCreateSpy).toHaveBeenCalledWith(BareBear)
          expect(axiosRequestSpy).toHaveBeenCalledWith(BareBear)
        })
    })
  })
});
