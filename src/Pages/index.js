import React, { Component } from 'react';
import { Navbar, Crousel, CenteredBox, Cards, jumbotronContainer } from '../Components';
// import {jumbotron }from '../Components/Jumbotron';

export default class Index extends Component {
    render() {
        return (
            <div >
                <Navbar />
                <Crousel />
                <div style={{ fontSize: 40, color: '#581400', fontWeight: 'bold', marginTop: 20, marginBottom: 20, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    Blogs
          </div>
                <Cards />
                <div style={{ width: '100%', height: 100, fontweight: 'bold', display: 'flex', fontSize: 60, backgroundColor: '#FFE598', color: '#581400', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ fontSize: 60, }}>Say No To Drugs{"\n"}</div>
                </div>
                <div style={{ width: '100%', height: 200, fontSize:15,paddingTop:50,backgroundColor: '#FFE598', color: '#581400', justifyContent: 'center', alignItems: 'center' }}>Drugs are chemicals that change the way a person's body or mind works. Drugs are not good for health as they have many side effects and damage our brain, heart and other important organs.Some of the illegal drugs are marijuana, ecstasy, cocaine, LSD, crystal meth and heroin. Drugs are consumed in different ways, by inhaling, taking by mouth, injecting, applying on skin, and smoking. When a person is addicted to a drug, the drug becomes so important that the person cannot manage without it. Drug use distracts attention leading to academic failure and poor social skills. Stress plays a major role in drug use and continuing drug abuse. It also creates problem in our family, school and with our friends.</div>
            </div>
        );
    }
}
