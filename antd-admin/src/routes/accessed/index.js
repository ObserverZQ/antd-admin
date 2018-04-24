import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Tabs } from 'antd'
import { routerRedux } from 'dva/router'
import queryString from 'query-string'
import { Page } from 'components'
import List from './List'

const { TabPane } = Tabs

const EnumPostStatus = {
  FINAL: 1,
  MACHINE: 2,
  HUMAN: 3,
  EXPERT: 4,
}

const Index = ({
  accessed, dispatch, loading, location,
}) => {
  const { list, pagination } = accessed
  location.query = queryString.parse(location.search)
  const { query, pathname } = location

  const listProps = {
    pagination,
    dataSource: list,
    loading: loading.effects['accessed/query'],
    onChange (page) {
      dispatch(routerRedux.push({
        pathname,
        search: queryString.stringify({
          ...query,
          page: page.current,
          pageSize: page.pageSize,
        }),
      }))
    },
  }

  const handleTabClick = (key) => {
    dispatch(routerRedux.push({
      pathname,
      search: queryString.stringify({
        status: key,
      }),
    }))
  }


  return (<Page inner>
    <Tabs defaultActiveKey={String(EnumPostStatus.FINAL)} onTabClick={handleTabClick}>
      <TabPane tab="已调用本系统的服务列表" key={String(EnumPostStatus.FINAL)}>
        <List {...listProps} />
      </TabPane>
    </Tabs>
  </Page>)
}

Index.propTypes = {
  accessed: PropTypes.object,
  loading: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ accessed, loading }) => ({ accessed, loading }))(Index)
