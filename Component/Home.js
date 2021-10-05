import React, { Component } from 'react'
import axios from 'axios'
import card from 'react-bootstrap/card'
import Button from '@restart/ui/esm/Button';

 class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
        allData: [],
    }

  }


componentDidMount = async () => {
    const server = 'https//'
    const allData = await axios.get(`${server}/all`)

    }



    render() {
        return (
            <card style={{ width: '18rem' }}>
            <card.Img variant="top" src="holder.js/100px180" />
            <card.Body>
              <card.Title>Card Title</card.Title>
              <card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </card.Text>
              <Button variant="primary">Add To Fav</Button>
            </card.Body>
          </card>
        )
    }
 }
 
export default Home
