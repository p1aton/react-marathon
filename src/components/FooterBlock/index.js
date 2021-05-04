import s from './style.module.css';

const FooterBlock = ({title, copyright}) => {
    return (
        <footer>
            <div class={s.wrapper}>
                <h3>{title}</h3>
                <p>{copyright}</p>
            </div>
        </footer>

    )

}

export default FooterBlock;