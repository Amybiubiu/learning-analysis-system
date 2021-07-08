
import React from 'react'

import { Table } from 'antd'


class SGrade extends React.Component{
    render()
    {
       const columns1=[
            {
                title:' ',
                dataIndex:'name',
                width:100,
            },
            {
                title:'软件工程导论',
                dataIndex:'grade1',
                width:300,
                
             },
            {
                title:'人工智能',
                dataIndex:'grade2',
                width:300,

            },
            {
                title:'编译原理',
                dataIndex:'grade3',
                width:300,

                
             }]

            const data1 = [
                {
                    name:'张三',
                    grade1:'98',
                    grade2:'54',
                    grade3:'70'
        
                }]
    
           
            return (
                <div>             
                   
                    <Table
                    columns={columns1}
                    dataSource={data1}
                    pagination={false}
                    />
                
                </div>
                )
    }
    
}


export default SGrade
