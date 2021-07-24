import moment from "moment";
export const parseDate = (Odate: string): string => {
    return moment(Odate).format("DD-MM-YYYY").toString();
};

export const parseDateFromNow = (Odate: string): string => {
    return moment(Odate).fromNow().toString();
};
