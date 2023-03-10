import React from "react";
import { Card, CardText, CardTitle, CardBody, CardHeader } from "reactstrap";

const BookList = ({ books }) => {
  if (!books.length) {
    return <h3>There are no books in the library</h3>;
  }

  return (
    <div>
      {books &&
        books.map((book) => (
          <Card outline color={"secondary"} key={book.id}>
            <CardHeader>Title: {book.title}</CardHeader>
            <CardBody>
              <CardTitle>Author: {book.author}</CardTitle>
              <CardText>Number of Pages: {book.pages} </CardText>
            </CardBody>
          </Card>
        ))}
    </div>
  );
};

export default BookList;
