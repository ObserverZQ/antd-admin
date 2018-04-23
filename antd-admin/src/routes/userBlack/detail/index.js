import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'

const Detail = ({ userBlackDetail }) => {
  const { data } = userBlackDetail
  const content = []
  for (let key in data) {
    if ({}.hasOwnProperty.call(data, key)) {
      content.push(<div key={key} className={styles.item}>
        <div>{key}</div>
        <div>{String(data[key])}</div>
      </div>)
    }
  }
  return (<div className="content-inner">
    <div className={styles.content}>
      {content}
    </div>
  </div>)
}

Detail.propTypes = {
  userBlackDetail: PropTypes.object,
}

export default connect(({ userBlackDetail, loading }) => ({ userBlackDetail, loading: loading.models.userBlackDetail }))(Detail)
