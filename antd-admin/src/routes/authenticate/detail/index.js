import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Radio } from 'antd'
import { Link } from 'react-router-dom'
import styles from './index.less'

const RadioGroup = Radio.Group
const Detail = ({ authenticateDetail }) => {
  const { data } = authenticateDetail
  const content = []
  for (let key in data) {
    if ({}.hasOwnProperty.call(data, key)) {
      content.push(<div key={key} className={styles.item}>
        <div>{key}</div>
        <div>{String(data[key])}</div>
      </div>)
    }
  }
  return (<div className={styles['content-inner']}>
    <div className={styles.content}>
      {content}
    </div>
    <RadioGroup name="radiogroup" defaultValue={1}>
      <Radio value={1}>可信</Radio>
      <Radio value={2}>标题党</Radio>
      <Radio value={3}>谣言</Radio>
    </RadioGroup>
    <Link to="/authenticate"><Button>确认</Button></Link>
  </div>)
}

Detail.propTypes = {
  authenticateDetail: PropTypes.object,
}

export default connect(({ authenticateDetail, loading }) => ({ authenticateDetail, loading: loading.models.authenticateDetail }))(Detail)
