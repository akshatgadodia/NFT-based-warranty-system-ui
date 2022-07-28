import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import '../CSS/HomePage.css'

const AccordionComponent = (props) => {
  return (
    <Accordion.Item eventKey={props.id} className='faq-page-accordion-item'>
        <Accordion.Header>{props.title}</Accordion.Header>
        <Accordion.Body>{props.data}</Accordion.Body>
      </Accordion.Item>
  )
}

export default AccordionComponent