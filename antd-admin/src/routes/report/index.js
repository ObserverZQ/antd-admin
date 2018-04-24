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
  report, dispatch, loading, location,
}) => {
  const { list, pagination } = report
  location.query = queryString.parse(location.search)
  const { query, pathname } = location

  const listProps = {
    pagination,
    dataSource: list,
    loading: loading.effects['report/query'],
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
      <TabPane tab="举报信息汇总" key={String(EnumPostStatus.FINAL)}>
        <List {...listProps} />
      </TabPane>
    </Tabs>
  </Page>)
}

Index.propTypes = {
  report: PropTypes.object,
  loading: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ report, loading }) => ({ report, loading }))(Index)
