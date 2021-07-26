import moment from "moment";

export function parseDate(Odate: string): string {
    return moment(Odate).format("DD-MM-YYYY").toString();
};

export function parseDateFromNow(Odate: string): string {
    return moment(Odate).fromNow().toString();
};
