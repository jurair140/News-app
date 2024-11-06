import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Newsitems = ({title,description,url,src}) => {
  return (
    <>
    
     <Card style={{ maxWidth: '345px'}} className='bg-dark  text-white mb-3  my-3 mx-3 '>

      <Card.Img variant="top" src={src? src : 'https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5ld3N8ZW58MHx8MHx8fDA%3D'} style={{height:'250px'}}/>
      <Card.Body>
        <Card.Title>{title?.slice(0,50)}</Card.Title>
        <Card.Text>
          {description ? description.slice(0,100) : 'In a developing story, new information is emerging as sources continue to report on the situation. Stay informed as updates become available'}
        </Card.Text>
        <a href={url} target='blank'><Button  variant="primary">Read more</Button></a>
      </Card.Body>
    </Card>

    
    </>
  )
}

export default Newsitems
