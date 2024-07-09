import { QuillEditor } from '@vueup/vue-quill'
export default defineNuxtPlugin((nuxtApp) => {
    // const globalOptions = {
    //     debug: 'info',
    //     modules: {
    //       toolbar: 'minimal'
    //     },
    //     placeholder: 'Compose an epic...',
    //     readOnly: true,
    //     theme: 'snow'
    //   }
    //   // set default globalOptions prop
    //   QuillEditor.props.globalOptions.default = () => globalOptions
nuxtApp.vueApp.component('QuillEditor',QuillEditor)
})
