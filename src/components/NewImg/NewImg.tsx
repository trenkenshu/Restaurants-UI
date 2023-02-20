import Loader from 'components/Loader';
import Modal from 'components/Modal';
import { FC, useState } from 'react';

type NewImgType = {
    wrapperClasses: string;
    imgClasses: string;
    src: string;
    alt: string;
    key: string;
    openImgModal?: (data: string) => void;
};

const NewImg: FC<NewImgType> = (props) => {
    const { wrapperClasses, imgClasses, src, alt, openImgModal } = props;
    const [imageLoaded, setImageLoaded] = useState(false);
    console.log(openImgModal?.toString());
    return (
        <div className={`relative cursor-pointer ${wrapperClasses}`} onClick={() => openImgModal && openImgModal(src)}>
            <Loader imageLoaded={imageLoaded} />
            <img src={src} alt={alt} className={`w-full ${imgClasses}`} onLoad={() => setImageLoaded(true)} />
        </div>
    );
};

export default NewImg;
