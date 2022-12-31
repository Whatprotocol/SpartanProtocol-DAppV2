import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import { tempChains } from '../../utils/web3'
import WrongNetwork from '../../components/WrongNetwork/index'
import { usePool } from '../../store/pool'
import PoolStatus from './FrozenPools'
import HelmetLoading from '../../components/Spinner/index'
import { useWeb3 } from '../../store/web3'
import ReserveDetails from './ReserveDetails'
// import Others from './Others'
import { useApp } from '../../store/app'

const Overview = () => {
  const app = useApp()
  const pool = usePool()
  const web3 = useWeb3()

  const [activeTab, setActiveTab] = useState('overview')

  const isLoading = () => {
    if (!pool.poolDetails || !pool.tokenDetails) {
      return true
    }
    return false
  }

  return (
    <>
      <div className="content">
        {tempChains.includes(app.chainId) && (
          <>
            <Row className="row-480">
              <Col>
                <Nav className="card-480 mb-2" activeKey={activeTab}>
                  <Nav.Item key="overview">
                    <Nav.Link
                      eventKey="overview"
                      onClick={() => {
                        setActiveTab('overview')
                      }}
                    >
                      Overview
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item key="pools">
                    <Nav.Link
                      eventKey="pools"
                      onClick={() => {
                        setActiveTab('pools')
                      }}
                    >
                      Pools
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item key="reserve">
                    <Nav.Link
                      eventKey="reserve"
                      onClick={() => {
                        setActiveTab('reserve')
                      }}
                    >
                      Reserve
                    </Nav.Link>
                  </Nav.Item>
                  {/* <Nav.Item key="others">
                    <Nav.Link
                      eventKey="others"
                      onClick={() => {
                        setActiveTab('others')
                      }}
                    >
                      Others
                    </Nav.Link>
                  </Nav.Item> */}
                </Nav>
              </Col>
            </Row>
            <Row className="row-480">
              {activeTab === 'overview' && (
                <>
                  <Col xs="auto">
                    <Card className="card-480">
                      <Card.Header>Status of RPCs</Card.Header>
                      <Card.Body>
                        {web3?.rpcs ? (
                          web3.rpcs
                            .filter((x) => x.url)
                            .map((x) => (
                              <Row key={x.url}>
                                <Col>
                                  {x.url} {x.block} {x.good ? 'OKAY!' : 'BAD!'}
                                </Col>
                              </Row>
                            ))
                        ) : (
                          <Col className="card-480">
                            <HelmetLoading height={150} width={150} />
                          </Col>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              )}
              {activeTab === 'pools' && !isLoading() && <PoolStatus />}
              {['pools', 'reserve', 'others'].includes(activeTab) &&
                isLoading() && (
                  <Col className="card-480">
                    <HelmetLoading height={150} width={150} />
                  </Col>
                )}
              {activeTab === 'reserve' && !isLoading() && <ReserveDetails />}
              {/* {activeTab === 'others' && !isLoading() && <Others />} */}
            </Row>
          </>
        )}
        {!tempChains.includes(app.chainId) && <WrongNetwork />}
      </div>
    </>
  )
}

export default Overview
