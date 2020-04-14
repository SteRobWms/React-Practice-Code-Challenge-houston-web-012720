import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.displaySushis ? props.displaySushis.map(sushi => <Sushi sushi={sushi} eatSushi={props.eatSushi} eatenSushis={props.eatenSushis} />).slice(props.sliceStart, props.sliceEnd) : "loading..."
        }
        <MoreButton incrementSushiList={props.incrementSushiList} />
      </div>
    </Fragment>
  )
}

export default SushiContainer