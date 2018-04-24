import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Tabs } from 'antd'
import { routerRedux } from 'dva/router'
import queryString from 'query-string'
import { Page } from 'components'
import List from './List'

const { TabPane } = Tabs

const EnumAuthenticateHistoryStatus = {
  RIGHT: 1,
  WRONG: 2,
}

const Index = ({
  authenticateHistory, dispatch, loading, location,
}) => {
  const { list, pagination } = authenticateHistory
  location.query = queryString.parse(location.search)
  const { query, pathname } = location

  const listProps = {
    pagination,
    dataSource: list,
    loading: loading.effects['authenticateHistory/query'],
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
    <Tabs defaultActiveKey={String(EnumAuthenticateHistoryStatus.RIGHT)} onTabClick={handleTabClick}>
      <TabPane tab="正确" key={String(EnumAuthenticateHistoryStatus.RIGHT)}>
        <List {...listProps} />
      </TabPane>
      <TabPane tab="错误" key={String(EnumAuthenticateHistoryStatus.WRONG)}>
        <List {...listProps} />
      </TabPane>
    </Tabs>
  </Page>)
}

Index.propTypes = {
  authenticateHistory: PropTypes.object,
  loading: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ authenticateHistory, loading }) => ({ authenticateHistory, loading }))(Index)
