import React from 'react'
import { Slider } from 'antd'
import { Page } from 'components'
import styles from './index.less'

const marks = {
  0: '0°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100%</strong>,
  },
};

class Parameter extends React.Component {
  constructor () {
    super()
    this.state = {
      range: [20, 70],
    }
    this.onChange = this.onChange.bind(this)
    this.onAfterChange = this.onAfterChange.bind(this)
  }

  onChange (value) {
    this.setState({
      range: value,
    })
    console.log('onChange: ', value)
  }
  onAfterChange (value) {
    this.setState({
      range: value,
    })
    console.log('onAfterChange: ', value)
  }
  render () {
    return (<Page inner>
      <div className={styles.slider}>
        <h3>模糊区间</h3>
        <Slider range marks={marks} step={5} defaultValue={this.state.range} onChange={this.onChange} onAfterChange={this.onAfterChange} />
      </div>
    </Page>)
  }
}


export default Parameter
