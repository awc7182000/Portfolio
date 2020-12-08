import Banner from './Pictures/Banner.PNG'
import {Link} from '@reach/router'
import React from 'react';
import MyPhoto from './Pictures/MyPhoto.jpg'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Carousel from 'react-bootstrap/Carousel'
import soloAdmin from './Pictures/Solo-admin.PNG'
import soloMain from './Pictures/Solo-Main.PNG'
import soloSignup from './Pictures/Solo-Signup.PNG'
import soloTable from './Pictures/Solo-table.PNG'
import Image from 'react-bootstrap/Image'
import { DefaultEffects } from '@fluentui/react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import Player from './Pictures/Player-Project.PNG'
import Product from './Pictures/Product-Project.PNG'
import Group from './Pictures/Group-Project.PNG'
import Github from './Pictures/Github.PNG'
import Facebook from './Pictures/Facebook.PNG'
import LinkedIn from './Pictures/LinkedIn.PNG'



export default(props) => {

    return(
        <div className="Container">
            <img class="Banner" alt="banner"src={Banner}></img>
            <h1 class="Name">Andrew Clark</h1>
            <ul class="links">
                <a href="#test"><li>Home</li></a>
                <a href="#test2"><li>Projects</li></a>
                <a href="#test3"><li>Contact me</li></a>
            </ul>
            <Jumbotron id="test" class="parentContainer" style={{ boxShadow: DefaultEffects.elevation64 }} >
            <div className="test">
                <h2 class="Hello">Hi, My name is Andrew</h2>
                <p class="details">A web developer from Mason, Ohio looking to grow my knowledge and create great websites</p>
            </div>
            <div class="container2">
                <Image className="MyPhoto" src={MyPhoto} roundedCircle />
                <div class="middle">
                <a target="_blank" href="//github.com/awc7182000"><div class="text">My GitHub Projects!</div></a>
                </div>
            </div>
            </Jumbotron>
            <a id="test2"target="_blank" href="https://volunteer.bb4k.org/"><h4 class="ui horizontal inverted divider">
    My Featured Project
  </h4></a>
            <p class="explain">My Featured Solo-Project from Coding Dojo was a project that helped organize volunteers that sign up for an event for the non-profit known in Ohio as Building Blocks for Kids</p>
            <a target="_blank" href="https://volunteer.bb4k.org/"><Carousel pause="hover">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={soloMain}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={soloSignup}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={soloAdmin}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={soloTable}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </a>
        <h4 class="ui horizontal inverted divider">
    Other Projects
  </h4>
  <CardDeck >
  <Card>
  <Card.Img variant="top" src={Group} />
  <hr class="rounded"></hr>
  <Card.Body>
    <Card.Title style={{fontSize:40,textAlign:"center"}}>Photo Commenter</Card.Title>
    <Card.Text style={{fontSize:15,textAlign:"center"}}>
        This is a fully deployed Group Project that was a photo Commenting page similar to wedding picture websites
    </Card.Text>
  </Card.Body>
  <Card.Footer>
  <a target="_blank" href="https://groupproject.mrsontag.com/"><Button >Link to Website</Button></a>
  </Card.Footer>
</Card>
  <Card>
  <Card.Img variant="top" src={Player} />
  <hr class="rounded1"></hr>
  <Card.Body>
    <Card.Title style={{fontSize:40,textAlign:"center"}}>Team Manager Project</Card.Title>
    <Card.Text style={{fontSize:15,textAlign:"center"}}>
      This Project was one of our Full Stack Projects that was a quick way to organize players on a team
    </Card.Text>
  </Card.Body>
  <Card.Footer>
  <a target="_blank" href="https://github.com/awc7182000/Team-Manager"><Button>Link to GitHub</Button></a>
  </Card.Footer>
</Card>
<Card>
  <Card.Img variant="top" src={Product} />
  <hr class="rounded"></hr>
  <Card.Body>
    <Card.Title style={{fontSize:40,textAlign:"center"}}>Product Manager</Card.Title>
    <Card.Text style={{fontSize:15,textAlign:"center"}}>
      One of my first Full Stack Projects that was a quick way to add, remove, and delete items from a list
    </Card.Text>
  </Card.Body>
  <Card.Footer>
  <a target="_blank" href="https://github.com/awc7182000/Product-manager-2"><Button>Link to GitHub</Button></a>
  </Card.Footer>
</Card>
</CardDeck>

<Jumbotron style={{paddingTop:10,paddingBottom:10}}>
<h4 class="ui horizontal divider header">
  <i class="question circle outline icon"></i>
  Contact Me
</h4>
<div id="test3"class="contact">
<a target="_blank" href="//github.com/awc7182000"><img className="Git"src={Github}></img><br/></a>
<a target="_blank" href="https://www.facebook.com/profile.php?id=100009533630851"><img src={Facebook} class="facebook icon"></img></a>
<a target="_blank" href="https://www.linkedin.com/in/andrew-clark-3225991b3/" ><img src={LinkedIn} class="linkedin icon"></img></a>
</div>
<div class="contact-right">
<i class="phone icon"></i><p class="number">1+(513)341-3762</p><br/>
<a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=clark4a4@outlook.com" ><i class="envelope icon"></i><p class="mail">clark4a4@outlook.com</p><br/></a>
<a target="_blank" href="https://www.google.com/maps/place/Mason,+OH/@39.3556351,-84.3360685,13z/data=!3m1!4b1!4m5!3m4!1s0x884057a89a9a35ef:0xbd5cb1c4195f3d13!8m2!3d39.3600586!4d-84.309939"><i class="map marker alternate icon"></i><p class="pin">Mason,Ohio (45040)</p></a>
</div>
</Jumbotron>
        </div>
    )
}