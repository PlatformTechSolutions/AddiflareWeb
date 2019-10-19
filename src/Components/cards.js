import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row,Col
} from 'reactstrap';

const Example = (props) => {
    return (
        <div style={{ width: '100%',alignItems: 'center',justifyContent:'center' }}>
            <Row style={{ width: '100%',alignItems: 'center',justifyContent:'center' }}>
                <Col xs="3" style={{marginBottom:20}}>
                    <Card  style={{color:'#581400',backgroundColor:'#CB9F685C'}}>
                        <CardImg top width="50%" src={require('../assets/blog1.jpeg')} alt="Card image cap" style={{width:'100%',height:'50%'}} />
                        <CardBody>
                            <CardTitle>Miss Thrifty</CardTitle>
                            {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                            <CardText>One of the more popular frugal blogs in the UK, Miss Thrifty is targeting young mums with her money saving, frugal tips and articles.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>

                </Col >
                <Col xs="3" style={{marginBottom:20}}>
                    <Card  style={{color:'#581400',backgroundColor:'#CB9F685C'}}>
                        <CardImg top width="50%" src={require('../assets/blog1.jpeg')} alt="Card image cap" style={{width:'100%',height:'50%'}} />
                        <CardBody>
                            <CardTitle>Miss Thrifty</CardTitle>
                            {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                            <CardText>One of the more popular frugal blogs in the UK, Miss Thrifty is targeting young mums with her money saving, frugal tips and articles.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>

                </Col >
                <Col xs="3"  style={{marginBottom:20}}>
                    <Card  style={{color:'#581400',backgroundColor:'#CB9F685C'}}>
                        <CardImg top width="50%" style={{width:'100%',height:'50%'}}  src={require('../assets/blog2.jpeg')} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Skint Dad</CardTitle>
                            {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                            <CardText> Skint Dad is a site that helps young / new dads save money and be more frugal in their day to day living. </CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                </Row>
                <Row style={{ width: '100%',alignItems: 'center',justifyContent:'center' }}>
                <Col xs="3" style={{marginBottom:20}}>
                    <Card  style={{color:'#581400',backgroundColor:'#CB9F685C'}}>
                        <CardImg style={{width:'100%',height:'20%'}}  top width="50%" src={require('../assets/blog3.jpeg')} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Miss Thrifty</CardTitle>
                            {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                            <CardText style={{color:'#581400'}}>One of the more popular frugal blogs in the UK, Miss Thrifty is targeting young mums with her money saving, frugal tips and articles.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>

                </Col >
                <Col xs="3"  style={{marginBottom:20}}>
                    <Card  style={{color:'#581400',backgroundColor:'#CB9F685C'}}>
                        <CardImg top style={{width:'100%',height:'50%'}}  width="50%" src={require('../assets/blog4.jpeg')} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Skint Dad</CardTitle>
                            {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                            <CardText> Skint Dad is a site that helps young / new dads save money and be more frugal in their day to day living. </CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="3" style={{marginBottom:20}}>
                    <Card  style={{color:'#581400',backgroundColor:'#CB9F685C'}}>
                        <CardImg top width="50%" src={require('../assets/blog1.jpeg')} alt="Card image cap" style={{width:'100%',height:'50%'}} />
                        <CardBody>
                            <CardTitle>Miss Thrifty</CardTitle>
                            {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                            <CardText>One of the more popular frugal blogs in the UK, Miss Thrifty is targeting young mums with her money saving, frugal tips and articles.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>

                </Col >
            </Row>
        </div>
    );
};

export default Example;