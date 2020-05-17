import React, { Component } from "react";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";

export default class Services extends Component {
    state={
        services:[
            {
                id:1,
                icon:<FaDolly/>,
                title: 'free shipping', 
                text: 
                        "Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been the
                         industry standard dummy text ever since the 1500s"
            }
        ]
    }
  render() {
    return <div></div>;
  }
}
