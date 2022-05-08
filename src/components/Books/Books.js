import BookItem from "../Books/BookItem";

const Books = (props) => {
  return (
    <div className="card p-3">
      <p className="title is-4">List of Books</p>
      <div className="columns is-desktop is-multiline">
        {props.items.length > 0 ? (
          props.items.map((item, index) => (
            <BookItem
              key={index}
              id={item.id}
              is_favorite={item.is_favorite}
              title={item.title}
              rating={item.rating}
              author={item.author}
              thumbnail={item.thumbnail}
              onRefreshHandler={(value) => props.onRefreshHandler(value)}
            />
          ))
        ) : (
          <div className="container is-fullheight p-2">
            <p className="subtitle">Tidak ada data</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
