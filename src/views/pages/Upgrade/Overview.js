import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Row } from 'react-bootstrap'
import { useWeb3React } from '@web3-react/core'
import { fallenSpartansCheck } from '../../../store/sparta/actions'
import Upgrade from './Upgrade'

const Overview = () => {
  const dispatch = useDispatch()
  const wallet = useWeb3React()

  const [trigger0, settrigger0] = useState(0)
  const getData = () => {
    dispatch(fallenSpartansCheck(wallet))
  }
  useEffect(() => {
    if (trigger0 === 0) {
      getData()
    }
    const timer = setTimeout(() => {
      getData()
      settrigger0(trigger0 + 1)
    }, 5000)
    return () => {
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger0])

  useEffect(() => {
    settrigger0(0)
  }, [wallet.account])

  return (
    <>
      <div className="content">
        <Row className="row-480">
          <Upgrade />
        </Row>
      </div>
    </>
  )
}

export default Overview
