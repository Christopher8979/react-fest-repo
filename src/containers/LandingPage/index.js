import React from "react";
// import { push } from 'connected-react-router'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
import {
  DisplayCard
} from "../../components";

import "./index.scss";
import apiUrls from '../../api/urls';
import _ from 'lodash';

export default class LandingPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      petsData: [{
                    "name": "Snoopy",
                    "category": "Dog",
                    "imageUrl": "https://smedia2.intoday.in/lallantop/wp-content/uploads/2016/05/cute-dog_160516-023453.jpg",
                    "isFavourite": false
                  },
                  {
                    "name": "Tommy",
                    "category": "Cat",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg6mKUF2r_U-_Nz10Wnk4TB5NLniqvO3oUHJW3at3cJp5UzffsMg",
                    "isFavourite": true
                  }],
      isFavouriteScreen: false
    };
    this.updateFavourite = this.updateFavourite.bind(this);
    this.showFavourites = this.showFavourites.bind(this);
    this.showAll = this.showAll.bind(this);
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {

  // }

  componentDidMount() {
    // Executed post render for the first time
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Executed post render 
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // return false to not render when any state is changed. Default return is true
  // }

  componentDidCatch(error, info){
    // executed if any error occurs
  }

  componentWillMount(){
    // this.props.fetchAllData({apiUrl: apiUrls.petsData, type: FETCH_DATA});
  }

  updateFavourite(idx, data){
    let {petsData} = this.state;
    data.isFavourite = !data.isFavourite;
    petsData[idx] = data;
    this.setState({
      petsData: petsData
    })
  }

  showFavourites(){
    this.setState({isFavouriteScreen: true});
  }

  showAll(){
    this.setState({isFavouriteScreen: false});
  }

  render() {
    let petsData = this.state.isFavouriteScreen ? this.state.petsData.filter((data) => { return data.isFavourite; }) : this.state.petsData;
      return (
        <div className="landing-page">
          <div className="col-md-3">
            <button className="col-md-12" onClick={this.showFavourites}>View Favourites</button>
            <button className="col-md-12" onClick={this.showAll}>View All</button>
          </div>
          <div className="col-md-9">
            { 
              _.map(petsData, (data, k) => {
                 return <DisplayCard data={data} key={k} updateFavourite={this.updateFavourite} idx={k}/>;
               })
            }
          </div>
        </div>
      );
  }
}

// const mapStateToProps = ({ pets }) => ({
//   petsData: pets.pets
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
//   fetchAllData
// }, dispatch)

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LandingPage)