import style from "./InputSearch.module.css"
import { Input } from "../Input/Input";


function InputSearch({ setTextSearch, searchArticles, textError = '', mini = false }) {
    return <>
        <div className={style.container}>
            <Input
                onInput={(e) => { setTextSearch(e.target.value) }}
                onBlur={(e) => { !e.target.value.trim() && searchArticles() }}
                onKeyDown={searchArticles}
                label="Поиск по порталу"
                search
            />
            {textError && <div className={mini ? style.textErrorBottom : style.textError}>{textError}</div>}
        </div>
    </>;
};


export { InputSearch };
