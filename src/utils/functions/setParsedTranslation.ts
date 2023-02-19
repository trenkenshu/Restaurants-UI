import { IUser } from 'types';

const setParsedTranslation = (updatedUser: IUser): void => {
    updatedUser.favourites.forEach((rest) => {
        rest.parsedTranslation = JSON.parse(rest.translation);
    });
    updatedUser.bookings.forEach((el) => {
        el.cafe.parsedTranslation = JSON.parse(el.cafe.translation);
    });
    updatedUser.reviews.forEach((el) => {
        el.cafe.parsedTranslation = JSON.parse(el.cafe.translation);
    });
};

export default setParsedTranslation;
