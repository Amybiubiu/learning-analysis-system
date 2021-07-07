import React from 'react'
import Image1 from '../image/oose.jpg'
import Image2 from '../image/sa.jpg'
import { Table } from 'antd'



class Recommend extends React.Component{
    render()
    {
       const columns1=[
            {
                title:'资源名称',
                dataIndex:'name',
                width:300,
            },
            {
                title:'资源图片',
                dataIndex:'image1',     
                render:() =>
                <img src={Image1} alt="" width="100px"/>
             }]

            const data1 = [
                {
                    name:'《面向对象软件工程》（使用uml、模式与Java（第二版）） 叶俊民 汪望珠 译'
                }
            ]
            const columns2=[
                {
                    title:'资源名称',
                    dataIndex:'name',
                    width:300,
                },
                {
                    title:'资源图片',
                    dataIndex:'image2',     
                    render:() =>
                    <img src={Image2} alt="" width="100px"/>
                 }]
    
                const data2 = [
                    {                      
                        name:'《软件体系结构》牛振东 江鹏 金福生 编译'
                    }
                ]
            return (
                <div>                 
                    <h2>课程：面向对象软件工程----------------------------------------------------------</h2>
                    <Table
                    columns={columns1}
                    dataSource={data1}
                    pagination={false}
                    />
                    <h2>课程：软件体系结构---------------------------------------------------------------</h2>
                    
                    <Table
                    columns={columns2}
                    dataSource={data2}
                    pagination={false}
                    />
                </div>
                )
    }
    
}


export default Recommend;