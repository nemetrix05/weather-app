module.exports = {
    // default working directory (can be changed per 'cwd' in every asset option)
    context: __dirname,
 
    // path to the clientlib root folder (output)
    clientLibRoot: "C:/wamp64/www/adobe/AEM/projects/AEMMaven13/ui.apps/src/main/content/jcr_root/apps/AEMMaven13/components/app-react/clientlibs",
 
    libs: {
        name: "react-component",
        allowProxy: true,
        categories: ["component.react"],
        serializationFormat: "xml",
        jsProcessor: ["min:gcc"],
        assets: {
            js: [
                "build/static/**/*.js"
            ],
            css: [
                "build/static/**/*.css"
            ]
        }
    }
};