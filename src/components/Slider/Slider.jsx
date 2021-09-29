import styles from './slider.module.css'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../data/images/home', false, /\.(gif|jpe?g|svg)$/));

export default function Slider({img, size}){
    return(<div className={`${size===1 ? styles.fullSlider : styles.midiumSlider}`}>
        <img className={styles.slider__img} src={images[img].default} alt="" />
    </div>)
}