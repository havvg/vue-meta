exports.install = function (Vue) {
    Vue.meta = {
        get(name) {
            return document.head.querySelector("[name='"+name+"']").content;
        }
    }

    Vue.prototype.$meta = Vue.meta
}
