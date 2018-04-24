import React from 'react'
import { Table } from 'antd'
import styles from './List.less'

const List = ({ ...tableProps }) => {
  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      // render: (text, record) => <Link to={`authenticate/${record.id}`}>{text}</Link>,
    }, {
      title: '来源',
      dataIndex: 'source',
      key: 'source',
    }, {
      title: '发布时间',
      dataIndex: 'createTime',
      key: 'createTime',
    }, {
      title: '举报原因',
      dataIndex: 'reason',
    },
  ]

  return (
    <div>
      <Table
        {...tableProps}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        simple
        className={styles.table}
        rowKey={record => record.id}
      />
    </div>
  )
}

export default List
