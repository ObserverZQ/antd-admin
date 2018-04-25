import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Select } from 'antd'
import { Link } from 'react-router-dom'
import styles from './index.less'

const Option = Select.Option
const children = [
  <Option key="1">言论虚假</Option>,
  <Option key="2">标题夸大</Option>,
  <Option key="3">违法违规</Option>,
  <Option key="4">内容低俗</Option>,
]
const Detail = ({ authenticateDetail }) => {
  const { data } = authenticateDetail
  const content = []
  for (let key in data) {
    if ({}.hasOwnProperty.call(data, key)) {
      if (key === 'content') {
        content.push(<div key={key} className={styles.item}>
          <div>{key}</div>
          <div dangerouslySetInnerHTML={{ __html: String(data[key]) }} />
        </div>)
        continue
      }
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
    <div className={styles['radio-group']}>
      <Select mode="multiple"
        style={{ width: '70%' }}
        placeholder="Please select"
        defaultValue={[]}
      >
        {children}
      </Select>
      <Link to="/authenticate"><Button type="primary" ghost className={styles['confirm-button']}>确认</Button></Link>
    </div>
  </div>)
}

Detail.propTypes = {
  authenticateDetail: PropTypes.object,
}

export default connect(({ authenticateDetail, loading }) => ({ authenticateDetail, loading: loading.models.authenticateDetail }))(Detail)
