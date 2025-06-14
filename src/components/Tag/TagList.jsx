import style from './Tag.module.css';
import { Tag } from './Tag';
import { useState } from 'react';
import { addArticle, removeArticle, getTags } from '../../api/apiTags';
import { useEffect } from 'react';
import iconAdd from "../../assets/icon-add-green.png";
import iconCancel from "../../assets/icon-delete-red.png";
import iconOk from "../../assets/icon-ok-green.png";
import { Input } from '../Input/Input';


function TagList({ article, admin }) {

    const [tags, setTags] = useState([]);                                   // массив тагов для отрисовки

    const [openAddForm, setOpenAddForm] = useState(false);                  // отрисовка формы добавления тегов
    const [tagName, setTagName] = useState('');                             // название тега для создания

    // удаляет теги
    function deleteTags(tag) {
        removeArticle(tag.id, article.id).then(response => {
            getTags(article.id).then(response => setTags(response.data));
        });
    };

    // добавляет теги
    function addTags() {
        if (!tagName.trim()) {
            setTagName('');
            return;
        };

        addArticle(tagName.trim(), article.id).then(response => {
            setTagName('');
            getTags(article.id).then(response => setTags(response.data));
        });
    };

    useEffect(() => {

        if (article) {
            getTags(article.id).then(response => setTags(response.data));
        } else {
            setTags([]);
        };

    }, [article]);

    return <>
        <div className={style.tags}>

            <div className={style.title}>
                <div>Список тегов</div>
                {admin && <img onClick={() => { setOpenAddForm(true) }} className={style.imgIcon} src={iconAdd} />}
            </div>

            {
                openAddForm && admin &&
                <div className={style.formAdd}>
                    <Input
                        label='Наименование'
                        value={tagName}
                        onInput={(e) => { setTagName(e.target.value) }}
                    />
                    <div className={style.icons}>
                        <img onClick={() => { setOpenAddForm(false); setTagName(''); }} src={iconCancel} />
                        <img onClick={addTags} src={iconOk} />
                    </div>
                </div>
            }

            <div className={style.tagsList}>
                {
                    tags.map(tag => (
                        <Tag key={tag.id} tag={tag} deleteTags={deleteTags} admin={admin} />
                    ))
                }
            </div>
        </div>
    </>
};


export { TagList }
