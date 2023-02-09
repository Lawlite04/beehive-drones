import moment from "moment/moment";

export const filters = {
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    formattedDate(value) {
        return moment(value).format('YYYY-MMMM-DD');
    },
    formattedDate2(value) {
        return moment(value).format('YYYY-MM-DD');
    },
}
