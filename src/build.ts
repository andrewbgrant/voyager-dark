import * as fs from 'fs'
import * as path from 'path'
import template, { SchemeName } from './template'

const filePath = (variant: string) =>
  path.join(process.cwd(), `/voyager-${variant}.json`)

;['light', 'dark', 'mirage'].map((variant: SchemeName) => {
  const scheme = JSON.stringify(template(variant), null, '\t')

  fs.writeFileSync(filePath(variant), scheme)
  console.log(`Updated ${variant}`)
})
