import PropTypes from 'prop-types';

export default function CustomImage({ imgSrc }) {
    return (
        <div className="custom-image" >
            <img src={imgSrc} alt="" />
        </div>
    )
}

CustomImage.propTypes = {
    imgSrc: PropTypes.string,
};