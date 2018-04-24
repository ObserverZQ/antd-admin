import React from 'react'
import { Slider } from 'antd'
import { Page } from 'components'
import styles from './index.less'

// let marks = {
//   0: {
//     style: {
//       color: '#1c4587',
//     },
//     label: <strong>0%</strong>,
//   },
//   // 40: {
//   //   style: {
//   //     color: '#073763',
//   //   },
//   //   label: <strong>40%</strong>,
//   // },
//   // 60: {
//   //   style: {
//   //     color: '#073763',
//   //   },
//   //   label: <strong>60%</strong>,
//   // },
//   100: {
//     style: {
//       color: '#f50',
//     },
//     label: <strong>100%</strong>,
//   },
// }

class Parameter extends React.Component {
  constructor () {
    super()
    this.state = {
      oldRange: [33, 65],
      range: [33, 65],
      marks: {
        0: {
          style: {
            color: '#1c4587',
          },
          label: <strong>0%</strong>,
        },
        33: {
          style: {
            color: '#073763',
          },
          label: <strong>33%</strong>,
        },
        65: {
          style: {
            color: '#073763',
          },
          label: <strong>65%</strong>,
        },
        100: {
          style: {
            color: '#f50',
          },
          label: <strong>100%</strong>,
        },
      },
    }
    this.formatter = this.formatter.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onAfterChange = this.onAfterChange.bind(this)
  }

  formatter (value) {
    console.log(this.state)
    return `${value}%`
  }
  onChange (value) {
    this.setState({
      range: value,
    })
    // console.log('onChange: ', value)
  }

  onAfterChange (value) {
    let newMarks = this.state.marks
    delete newMarks[this.state.oldRange[0]]
    delete newMarks[this.state.oldRange[1]]
    newMarks[value[0]] = {
      style: {
        color: '#073763',
      },
      label: <strong>{value[0]}%</strong>,
    }
    newMarks[value[1]] = {
      style: {
        color: '#073763',
      },
      label: <strong>{value[1]}%</strong>,
    }
    // console.log(this.state.range)
    this.setState({
      oldRange: value,
      range: value,
      marks: newMarks,
    })
    // console.log('onAfterChange: ', value)
  }

  render () {
    return (<Page inner>
      <div className={styles.slider}>
        <h3>模糊区间</h3>
        <Slider range marks={this.state.marks} step={1} defaultValue={this.state.range} onChange={this.onChange} onAfterChange={this.onAfterChange} tipFormatter={this.formatter} />
      </div>
    </Page>)
  }
}


export default Parameter
