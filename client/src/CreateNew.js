
const CreateNew = props => {
    return <div>
        <form onSubmit={props.submitBook}>
            <label htmlFor="book-title">Book Title</label>
            <input type="text" id="book-title" name="book-title" />
            <label htmlFor="book-description">Book Description</label>
            <input type="text" id="book-description" name="book-description" />
            <label htmlFor="book-author">Book Author</label>
            <input type="text" id="book-author" name="book-author" />
        </form>
        <button 
          type="submit" >
          Save Book ✔
        </button>
    </div>
}

export default CreateNew;