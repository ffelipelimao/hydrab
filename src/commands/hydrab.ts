import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'hydrab',
  description: 'Generate your Nodejs Typescript boi',
  run: async toolbox => {

    const files = [
      '.editorconfig.ejs',
      '.env.ejs',
      '.eslintignore.ejs',
      '.eslintrc.json.ejs',
      '.gitignore.ejs',
      '.huskyrc.json.ejs',
      '.jest.config.js.ejs',
      'app.ts.ejs',
      'index.ts.ejs',
      'test.spec.ts.ejs',
      'package.json.ejs',
      'Dockerfile.ejs',
      'tsconfig.json.ejs',
      'tsconfig-build.json.ejs',
    ];

    const handleFile = {
      'app.ts':'src/main/app/app.ts',
      'test.spec.ts':'test/test.spec.ts',
  };
    
    const { print, template:{ generate } } = toolbox

    const a: string = "#     # #     # ######  ######     # \n"
    const b: string = "#     #  #   #  #     # #     #   # # \n"
    const c: string = "#     #   # #   #     # #     #  #   # \n"
    const d: string = "#######    #    #     # ######  #     # \n"
    const e: string = "#     #    #    #     # #   #   ####### \n"
    const f: string = "#     #    #    #     # #    #  #     # \n"
    const g: string = "#     #    #    ####### #    #  #     # \n"
    
    print.success(a+b+c+d+e+f+g)

    files.map(async file =>{
      
      const fileExtensionsOff = file.replace('.ejs', '')
      
      await generate({
          template: file,
          target: handleFile[fileExtensionsOff] ? handleFile[fileExtensionsOff] : fileExtensionsOff
      })
      
    })


  print.info('Done             :)')
  print.info('Happy Code!')

  },
}

module.exports = command
