import React from 'react'
import { Row, Col, Select, Divider, Table } from 'antd'
import Fetch from '../fetch'
import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
  } from "bizcharts";
  
  class Basic extends React.Component {
    render() {
      const data = [
        {
          year: "1",
          value: 83
        },
        {
          year: "2",
          value: 84
        },
        {
          year: "3",
          value: 85
        },
        {
          year: "4",
          value: 79
        },
        {
          year: "5",
          value: 77
        },
        {
          year: "6",
          value: 81
        },
        {
          year: "7",
          value: 88
        },
        {
          year: "8",
          value: 90
        },
        {
          year: "预测值",
          value: 91
        }
      ];
      const cols = {
        value: {
          min: 0,
          range:[0,0.93],
          alias:'分数'
        },
        year: {
          range: [0, 0.9],
          alias:'月份'
        }
      };
      return (
        <div>
          <Chart height={400} data={data} scale={cols} forceFit>
            <Axis name="year" title={{
                position:'end',
                offset:15,
                textStyle: {
                  fontSize: '12',
                  textAlign: 'center',
                  fill: '#999',
                  fontWeight: 'bold',
                  rotate: 0,
                  autoRotate:true
              }
            }} />
            <Axis name="value"  title={{
                position:'end',
                offset:5.5,
                textStyle: {
                  fontSize: '12',
                  textAlign: 'right',
                  fill: '#999',
                  fontWeight: 'bold',
                  rotate: 0
              }
            }}/>
            <Tooltip
              crosshairs={{
                type: "y"
              }}
            />
            <Geom type="line" position="year*value" size={2} 
              tooltip={['year*value',(year,value)=>{
                return {
                    name:'数值', // 要显示的名字
                    value:value,
                    title:year
                }
            }]} />
            <Geom
              type="point"
              position="year*value"
              size={4}
              shape={"circle"}
              style={{
                stroke: "#fff",
                lineWidth: 1
              }}
              tooltip={['year*value',(year,value)=>{
                return {
                    name:'数值', // 要显示的名字
                    value:value,
                    title:year
                }
            }]}
            />
          </Chart>
        </div>
      );
    }
  }
const { Option } = Select
const ItemSelect = () => {
    return (
        <Row align="middle" justify="space-around">
            <Col span={4}>
                <Select defaultValue="1802班" style={{ width: 120 }}>
                    <Option value="1802">1802</Option>
                    <Option value="lucy">1803</Option>
                    <Option value="disabled" disabled>
                        1801
                    </Option>
                </Select>
            </Col>
            <Col span={4}>
                <Select defaultValue="操作系统" style={{ width: 120 }}>
                    <Option value="jack">操作系统</Option>
                </Select>
            </Col>
            <Col span={4}>
                <Select defaultValue="使用近一年成绩" style={{ width: 180 }}>
                    <Option value="jack">小于70</Option>
                </Select>
            </Col>
            <Col span={4}>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="输入学生学号"
                    // optionFilterProp="children"
                    // onChange={onChange}
                    // onFocus={onFocus}
                    // onBlur={onBlur}
                    // onSearch={onSearch}
                    // filterOption={(input, option) =>
                    //     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    // }
                >
                    <Option value="jack">2018214877</Option>
                    <Option value="lucy">2018214878</Option>
                    <Option value="tom">2018214879</Option>
                </Select>
            </Col>
        </Row>
    )
}

const TPredict = () => {
    return (
    <div>
        <ItemSelect />
        <Divider />
        <Basic />
    </div>
    )
}

export default TPredict