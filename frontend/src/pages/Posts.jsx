import React from "react";

const CreatePostForm = ({onCreatePosts, user}) => {
    const[title, setTitle] = React.useState("");
    const[date, setDate] = React.useState("");
    const[message, setMessage] = React.useState("");

     // HANDLERS
     const onTitreChange = (e) => setTitle(e.target.value);
     const onDateChange = (e) => setDate(e.target.value);
     const onMessageChange = (e) => setMessage(e.target.value);
 
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                date: date,
                message: message,
                userid: user.id
            })
        };
        fetch('http://localhost:8000/api/posts/', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.status === "ok") {
                    onCreatePosts();
                } else {
                    console.log(data);
                }
            }).catch(err => {console.log(err)});
    }

    return (
        <div className="mt-4">
            <h1>Créer un post</h1>
            <br />
            <form class="needs-validation" novalidate>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <h6 htmlFor="title">Titre</h6>
                        <input type="text" class="form-control" id="titLe" value={title} onChange={onTitreChange} required/>
                    </div>
                    <div class="col-md-6 mb-3">
                        <h6 htmlFor="date">Date</h6>
                        <input type="text" class="form-control" id="date" value={date} onChange={onDateChange} required/>
                    </div>
                
                </div>
                <div class="row">
                    <div class="form-group col-12">
                        <h6 htmlFor="message">Message</h6>
                        <textarea class="form-control" id="message" rows="3" value={message} onChange={onMessageChange} ></textarea>
                    </div>
                </div>
                <br/>
                <button class="btn btn-success" type="submit" onClick={handleSubmit}>Envoyer</button>
            </form>
            <br />
            <hr />
        </div>
    )
}




const Posts = ({user}) => {
    // constante représentant le state (état) du composant post
    const [posts, setPosts] = React.useState([]);
    const[newPost, setNewPost] = React.useState(0);

    
    React.useEffect(() => {
        const url = "http://localhost:8000/api/posts/"
        fetch(url).then(res => res.json()).then(data => {
            data.reverse()
            setPosts(data) 
        }).catch(err => {console.log(err)});
    }, [newPost])

    const handleCreatePost = () => { 
        const count = newPost + 1;
        setNewPost(count) 
    }

    return (
        <div className="col-md-6 ms-auto me-auto">
            <CreatePostForm onCreatePosts={handleCreatePost} user={user}/>
            <h1 className="mt-5 mb-5">Post</h1> 
            {posts.map(posts => <Posts data={posts}  key={posts.id}/>)}
        </div>
    )
}

export default Posts; 