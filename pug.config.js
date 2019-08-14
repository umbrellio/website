const fs = require('fs')
const path = require('path')
const jsYaml = require('js-yaml')

const translate = (paths, translations) => {
  return paths.reduce((prev, curr) => prev[curr], translations)
}

const getTranslations = () => {
  const language = fs.readFileSync(path.join(__dirname, '.lang'), 'utf8')
  if (!language) return

  return jsYaml.safeLoad(
    fs.readFileSync(path.join(__dirname, 'src', 'translations', `${language}.yml`)),
    'utf8'
  )
}

/**
 * HACK 1:
 *
 * It's unclear how Parcel's PugAsset works with `pug.config.js` (needs further investigation).
 * The only way for language switching to work right now requires reading current language from
 * file on every function call.
 * Good news is, this only happens at build time.
 */
module.exports = {
  locals: {
    t: k => {
      return translate(k.split('.'), getTranslations())
    },
    scopedT: ns => {
      const scope = ns.split('.')
      return k => translate([...scope, ...k.split('.')], getTranslations())
    },
    get lang () {
      return fs.readFileSync(path.join(__dirname, '.lang'), 'utf8')
    }
  }
}
