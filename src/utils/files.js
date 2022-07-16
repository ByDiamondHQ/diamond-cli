const fs = require('fs');
const path = require('path');

module.exports = {
  mkdir(dir) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(path.join(process.cwd(), dir))
    } else {
      throw Error()
    }
  },
  mkfile(file, data) {
    fs.writeFileSync(path.join(process.cwd(), file), data)
  },
  async readFile(file) {
    return fs.readFileSync(path.join(process.cwd(), file), 'utf-8')
  },
  async copyFolder(from, to) {
    return fs.copyFileSync(from, path.join(process.cwd(), to))
  }
}