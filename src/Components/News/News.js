import React from 'react';
import { Button, Card } from 'react-bootstrap';

const News = (props) => {
   console.log(props.article);
    const { title, description, content } = props.article;
    return (
        <div>
            <Card>
                <Card.Header>{content}</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;