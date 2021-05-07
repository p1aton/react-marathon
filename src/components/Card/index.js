import React, { Component } from 'react';
import cl from 'classnames';
import s from './style.module.scss';




class Card extends React.Component {

  state = {
    done: false,
  }

  handleCardClick = () => {
    this.setState({
        done: !this.state.done ,
      })
  }

  

  render() {
    const {eng, rus} = this.props;
    const {done} = this.state;



    // const cardClass = [s.card, s.box];
    // if (done) {
    //   cardClass.push(s.done);
    // } 

    

    return (
      <div 
      className={ cl(s.card, {[s.done]: done}) }
      onClick ={this.handleCardClick}
      
      >
        <div className={s.cardInner}>
          <div className={s.cardFront}>
            {eng}
          </div>
          <div className={s.cardBack}>
            {rus}
          </div>
        </div>

      </div>
    );
  }
}


export default Card;