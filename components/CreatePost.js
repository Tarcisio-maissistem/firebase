import React, { useState } from 'react';
import fire from '../config/fire-config';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [notification, setNotification] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        fire.firestore()
            .collection('blog')
            .add({
                title: title,
                content: content,
            });

        setTitle('');
        setContent('');

        setNotification('Seu Comentário foi Criado!');
        setTimeout(() => {
            setNotification('')
        }, 2000)
    }
    return (
        <div>
            <h2>Add Comentário</h2>

            {notification}

            <form onSubmit={handleSubmit}>
                <div>
                    Titulo<br />
                    <input type="text" value={title} onChange={({ target }) => setTitle(target.value)} />
                </div>
                <div>
                    Comentário<br />
                    <textarea value={content} onChange={({ target }) => setContent(target.value)} />
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    )
}

export default CreatePost;