const checkPlatform = (mac, windows) => process.platform == 'darwin' ? mac : windows
module.exports = {
  checkPlatform
}