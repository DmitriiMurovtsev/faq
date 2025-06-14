import style from "./TopLine.module.css";
import smallLogo from "../../assets/small-logo.png";


function TopLine() {
    return <>
        <div className={style.topLine}>
            <div className={style.logo}>
                <img src={smallLogo} />
                <div className={style.names}>
                    <div className={style.logoName}>InsFamily</div>
                    <div className={style.logoSubName}>обучающий портал</div>
                </div>
            </div>
        </div>
    </>;
};


export { TopLine }
