import React, { useEffect, useState } from 'react'
import { Row, Col, Select, Divider, Table } from 'antd'
import Fetch from '../fetch'

const { Option } = Select

const ItemSelect = ({ onParamsChange }) => {
    const handleChange = (val) => {
        onParamsChange(val)
    }
    return (
        <Row align="middle" justify="space-around">
            <Col span={4}>
                <Select defaultValue="班级" style={{ width: 120 }} onChange={handleChange}>
                    <Option value="1802">1802</Option>
                    <Option value="lucy">1803</Option>
                    <Option value="disabled" disabled>
                        1801
                    </Option>
                </Select>
            </Col>
            <Col span={4}>
                <Select defaultValue="课程" style={{ width: 120 }}>
                    <Option value="jack">操作系统</Option>
                </Select>
            </Col>
            <Col span={4}>
                <Select defaultValue="成绩" style={{ width: 120 }}>
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
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
            </Col>
        </Row>
    )
}
const ResultList = ({ data }) => {
    console.log("form data")
    console.log(data);
    const columns = [
        {
            title: '学号',
            dataIndex: 'sid',
            width: 150
        },
        {
            title: '姓名',
            dataIndex: 'sname',
            width: 200
        },
        {
            title: '班级',
            dataIndex: 'class'
        },
        {
            title: '课程',
            dataIndex: 'course'
        },
        {
            title: '成绩',
            dataIndex: 'grade'
        }
    ]
    const newData = []
    for (let i = 0; i < data.length; i += 1) {
        newData.push({ key: data[i].sid, ...data[i] })
    }
    return (
        <Table
            columns={columns}
            dataSource={newData}
            pagination={{ pageSize: 12 }}
            scroll={{ y: 380 }}
        />
    )
}
const TGrade = () => {
    const [list, setList] = useState([]);
    const changeQueryParams = () => {
        Fetch("/teacher/grade?teacher_id=2008214877").then(
            res => {
                console.log(res)
                setList(res.grades);
            }
        )
    }
    return (
        <div>
            <ItemSelect onParamsChange={changeQueryParams} />
            <Divider />
            <ResultList data={list} />
        </div>
    )
}

export default TGrade