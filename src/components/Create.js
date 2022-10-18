import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('Bibush');
    const[isLoading, setIsLoading]=useState(false);
    const history=useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title, body, author};

        setIsLoading(true);

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('New blog added');
            setIsLoading(false);
            history.push('/');
        })

    }

    return (
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />

                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                />
                <label>Blog Author:</label>
                <select 
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="bib">Bibush</option>
                    <option value="bibz">Bibz</option>
                    <option value="bibzz">bib</option>
                </select>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button>Adding Blog...</button>}

            </form>
        </div>
    );
}

export default Create;