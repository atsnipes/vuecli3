const intelligenceOIDC = jest.genMockFromModule('../intelligenceOIDC.js');

intelligenceOIDC.getAccountUserNavigation = accountId => {
  const navItems = ['a', 'b', 'c']
  return new Promise(resolve => resolve(navItems))
}
intelligenceOIDC.isAccountUserFeatureAllowed = (marketName, submarketName, accountId, featureId) => new Promise(res => res(true))

export default intelligenceOIDC
