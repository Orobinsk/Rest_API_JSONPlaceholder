import React, {useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";



const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'', body:''})

    const addNewPost = (e) =>{
        e.preventDefault()
        const newPost ={
            ...post, id:Date.now()
        }
        create(newPost)
        setPost({title:'', body:''})
    }

    return (
        <div>
            <form>
                {/*Управляемый компонент*/}
                <MyInput
                    value={post.title}
                    type="text"
                    placeholder="название поста"
                    onChange = {e =>setPost({...post, title:e.target.value})}
                />

                {/*Неуправляемый/неконтролируемы компонент*/}
                <MyInput
                    value={post.body}
                    onChange = {e =>setPost({...post, body:e.target.value})}
                    type="text"
                    placeholder="описание поста"
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
        </div>
    );
};

export default PostForm;