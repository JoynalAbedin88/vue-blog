import Vue from 'vue'
import moment from 'moment'

Vue.filter('substr', (arg, start, end) => {
    return arg.substring(start, end)
})
Vue.filter('setTime', (arg, type) => {
    if (type == 'date')
        return moment(arg).format('LL')
    else if (type == 'hours')
        return moment(arg).startOf().fromNow()
})