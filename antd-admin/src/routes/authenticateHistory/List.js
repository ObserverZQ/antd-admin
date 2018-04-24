import React from 'react'
import { Table } from 'antd'
import styles from './List.less'

const List = ({ ...tableProps }) => {
  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
    }, {
      title: '来源',
      dataIndex: 'author',
    }, {
      title: '类别',
      dataIndex: 'categories',
    }, {
      title: '发布日期',
      dataIndex: 'date',
    }, {
      title: '鉴定日期',
      dataIndex: 'authenticateDate',
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
