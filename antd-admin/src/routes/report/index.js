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
      <TabPane tab="最终鉴定结果" key={String(EnumPostStatus.FINAL)}>
        <List {...listProps} />
      </TabPane>
      <TabPane tab="机器鉴定" key={String(EnumPostStatus.MACHINE)}>
        <List {...listProps} />
      </TabPane>
      <TabPane tab="人工鉴定" key={String(EnumPostStatus.HUMAN)}>
        <List {...listProps} />
      </TabPane>
      <TabPane tab="专家鉴定" key={String(EnumPostStatus.EXPERT)}>
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
